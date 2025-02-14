// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    logo_url: string;
    file_url: string;
    name: string;
    location: string;
    email: string;
    company: string;
    bio: string;
}
export interface Candidates extends Candidate {
    data: Candidate[];
};