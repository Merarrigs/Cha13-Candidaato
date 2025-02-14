import { useState, useEffect, useRef } from 'react';
import { searchGithub } from '../api/API';
import { Candidates } from '../interfaces/CandidateInterface';
import WorkProfile from '../components/workProfile';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidates[]>([]);
  const [index, setIndex] = useState(0);
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    getData();
  }, [])


  const pickSelect = (pickIndex: any) => {
    setIndex(pickIndex);
  };

  const ref =useRef<any>(null);

  const prevTap = () => {
    ref.current?.next();
  };

  const nextTap = (SelectedData: any) => {
    alert('Saved to potential candidates');
    ref.current?.next();
    setList([...list, SelectedData]);
  };

async function getData() {
  const data = await searchGithub();
  let finalPick = data.map((item: Candidates) => {
    return {
      logo: item.logo_url,
      file: item.file_url,
      name: item.name,
      location: item.location,
      email: item.email,
      company: item.company,
      bio: item.bio,
      
    }
  })
  setCandidates(finalPick);

}

localStorage.setItem('selectedCandidates', JSON.stringify(list));

  return (
  <div>
    <h1>CandidateSearch</h1>;
    <Carousel ref={ref} activeIndex={index} onSelect={pickSelect} controls={false} indicators={false}>

      {candidates.map((item: i) => {
        return (
          <Carousel.Item key={i}>
            <WorkProfile props={item} />
            <Button variant="primary" onClick={prevTap}>-</Button>
            <Button variant="primary" onClick={() => nextTap(item)}>+</Button>
          </Carousel.Item>
        )
      })}
    </Carousel>
    </div>
  )
};

export default CandidateSearch;
