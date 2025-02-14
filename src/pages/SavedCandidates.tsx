import { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const SavedCandidates = () => {
    const selectedCandidates = JSON.parse(localStorage.getItem('selectedCandidates') || '[]');
    const [candidates, setCandidates] = useState(selectedCandidates);

    useEffect(() => {
        // Ensure candidates are synchronized with localStorage on initial load
        setCandidates(selectedCandidates);
    }, []);

    function deleteCandidate(i: any) {
        let newCandidates = [...candidates];
        newCandidates = newCandidates.filter((_, index) => i !== index);
        setCandidates(newCandidates);
        // Update localStorage after deletion
        localStorage.setItem('selectedCandidates', JSON.stringify(newCandidates));
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
                            {candidates.map((candidate: any, i: any) => (
                                <tr key={i}>
                                    <td>
                                        <img src={candidate.avatar_url} alt="" className="saved-candidates-avatar" />
                                    </td>
                                    <td>{candidate.login}</td>
                                    <td>{candidate.location === undefined ? 'Unknown' : candidate.location}</td>
                                    <td>{candidate.login}@test.com</td>
                                    <td>{candidate.company === undefined ? 'Github' : candidate.company}</td>
                                    <td>{candidate.bio === undefined ? 'Long walks on the beach' : candidate.bio}</td>
                                    <td><Button variant="danger" onClick={() => deleteCandidate(i)}>Reject</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
            </Container>
        </>
    );
};

export default SavedCandidates;
