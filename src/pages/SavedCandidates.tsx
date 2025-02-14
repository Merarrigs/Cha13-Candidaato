import {useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';




const SavedCandidates = () => {
  const [candidates, setCandidates] = useState(selectedCandidates);
  var selectedCandidates = JSON.parse(localStorage.getItem('selectedCandidates') || '{}');

  function deleteCandidate(i:any) {
    let newCandidates = [...candidates];
    newCandidates = newCandidates.filter(
      (_item, index) => i !== index)
    setCandidates(newCandidates);

  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <Container>

        {candidates.length === 0 ? 
        <h2>No candidates saved</h2> :
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate: any, i: any) => {
              return (
                <>
                  <tr key={i}>
                    <td>
                      <img src={candidate.logo.url} alt="" className="saved-candidates-logo"/>
                      </td>
                    <td>{candidate.name}</td>
                    <td>{candidate.location}</td>
                    <td>{candidate.email}@test.com</td>
                    <td>{candidate.company === undefined? 'Github' : candidate.company}</td>
                    <td>{candidate.bio === undefined? 'Long walks on the beach' : candidate.bio}</td>
                    <td><Button variant="danger" onClick={() => deleteCandidate(i)}>Reject</Button></td>
                  </tr>
                </>
              )
            }
            )}
          </tbody>
        </Table>
        }
      </Container>
    </>

  );
};




export default SavedCandidates;
