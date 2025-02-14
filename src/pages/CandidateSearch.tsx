import { useState, useEffect, useRef } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/CandidateInterface';
import WorkFiles from '../components/WorkFile';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

const CandidateSearch = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [index, setIndex] = useState(0);
    const [list, setList] = useState<Candidate[]>([]);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        // Update localStorage when the list changes
        localStorage.setItem('selectedCandidates', JSON.stringify(list));
    }, [list]);

    const pickSelect = (pickIndex: number) => {
        setIndex(pickIndex);
    };

    const ref = useRef<Carousel>(null);

    const prevTap = () => {
        ref.current?.next();
    };

    const nextTap = (SelectedData: Candidate) => {
        alert('Saved to potential candidates');
        ref.current?.next();
        setList([...list, SelectedData]);
    };

    async function getData() {
        const data = await searchGithub();
        let finalPick = data.map((item: Candidate) => ({
            avatar_url: item.avatar_url,
            html_url: item.html_url,
            login: item.login,
            location: item.location,
            email: item.email,
            company: item.company,
            bio: item.bio,
        }));
        setCandidates(finalPick);
    }

    return (
        <div>
            <h1>CandidateSearch</h1>
            <Carousel ref={ref} activeIndex={index} onSelect={pickSelect} controls={false} indicators={false}>
                {candidates.map((item, i) => (
                    <Carousel.Item key={i}>
                        <WorkFiles props={item} />
                        <Button variant="primary" onClick={prevTap}>-</Button>
                        <Button variant="primary" onClick={() => nextTap(item)}>+</Button>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CandidateSearch;
