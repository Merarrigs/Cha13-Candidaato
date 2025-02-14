import { useState, useEffect, useRef } from 'react';
import { searchGithub } from '../api/API';
import { Candidates } from '../interfaces/CandidateInterface';
import WorkFiles from '../components/WorkFile';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const CandidateSearch = () => {
    const [candidates, setCandidates] = useState<Candidates[]>([]);
    const [index, setIndex] = useState(0);
    const [list, setList] = useState<Candidates[]>([]);

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

    const prevTap = () => {
        const prevIndex = index === 0 ? candidates.length - 1 : index - 1;
        setIndex(prevIndex);
    };

    const nextTap = (SelectedData: Candidates) => {
        alert('Saved to potential candidates');
        const nextIndex = (index + 1) % candidates.length;
        setIndex(nextIndex);
        setList([...list, SelectedData]);
    };

    async function getData() {
        const data = await searchGithub();
        const finalPick = data.map((item: Candidates) => ({
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
            <Carousel activeIndex={index} onSelect={pickSelect} controls={false} indicators={false}>
                {candidates.map((item, i) => (
                    <Carousel.Item key={i}>
                        <WorkFiles props={item} />
                        <Button variant="primary" onClick={prevTap} style={{ marginRight: '10px' }}>-</Button>
                        <Button variant="primary" onClick={() => nextTap(item)}>+</Button>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CandidateSearch;
