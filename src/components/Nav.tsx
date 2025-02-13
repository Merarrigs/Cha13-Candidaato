import { Link } from "react-router-dom";


const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (

    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/savedCandidates">Saved Candidates</Link>

  )
};

export default Nav;
