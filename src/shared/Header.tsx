// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

// import {useState} from "react"


const Header = () => {
  // const [isTop, setIsTop] = useState(true)
  const navigate = useNavigate()


  // const search = async (value:string) => {
  //   if (value.length > 3) {
  //       const query = await searchMovie(value)
  //       setMovies(query.results)
  //     }
  //     handleSearch(value)
  // }

  // const checkIsTop = (e: any) => {
  //   console.log(e.target.scrollTop)
  // }

  return (
    <div className="sticky-top">
      <Navbar id="navbar" expand="lg" className=''>
        <Container fluid className='d-flex justify-content-evenly'>
          <div>
            <Navbar.Brand as={NavLink} to={'/'}>VINEMA.<span className='red'>I</span>D</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <Navbar.Collapse id="navbarScroll"  > */}

            {/* <Button variant="outline-success">Search</Button> */}
            {/* <input type="text" placeholder='Search' className='search' /> */}
            <div>
              <SearchBar />
            </div>
            <div>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate('/')}>About Us</Nav.Link>
                {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              </Nav>
            </div>

          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>

  );
}

export default Header;