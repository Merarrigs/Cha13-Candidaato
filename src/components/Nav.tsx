import { Link } from "react-router-dom";


const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (

    <div className="nav-i"> 
      <Link to="/" className='nav-link-i'>Home</Link>
      <Link to="/savedCandidates" className='nav-link-i'>Saved Candidates</Link>
</div>
  )
};

export default Nav;
