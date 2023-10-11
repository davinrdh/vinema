/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.scss'
import { NavLink } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect } from 'react';

const Header = () => {
  // const [isTop, setIsTop] = useState(true)

  const [theme, setTheme] = useLocalStorage('theme', 'dark' && 'theme' ? 'dark' : 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    themeModeonHtml(newTheme)
  }

  const themeModeonHtml = (theme: any) => {
    const htmlElement = document.querySelector('html')
    htmlElement?.setAttribute('theme-mode', theme)
  }

  useEffect(() => {
    themeModeonHtml(theme)
  },[])

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
    <div className="sticky-top desktop">
      <Navbar id="navbar" expand="lg" className=''>
        <Container fluid className='d-flex justify-content-evenly'>
          <div>
            <Navbar.Brand as={NavLink} to={'/'}>VINEMA.<span className='red'>I</span>D</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div>
            <SearchBar />
          </div>
          <div className='d-flex align-items-center gap-3'>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLinkStyled to={''}>Home</NavLinkStyled>
              {/* <Nav.Link onClick={() => navigate('/tv')}>TV Shows</Nav.Link> */}
              <NavLinkStyled to={'/about'}>About</NavLinkStyled>
            </Nav>
            <div className="cursor-pointer">
              <InputToggleTheme
                className='toggle-theme'
                type='checkbox'
                checked={theme == 'light'}
                onChange={toggleTheme}
              />
            </div>
          </div>

          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

const NavLinkStyled = styled(NavLink)`
  color: var(--white);
  font-weight: 700;
  transition: ease-in-out 0.5s;
  padding: 0 1rem;
  text-decoration: none;

  &:hover {
      color: red;
  }

  &.active {
    color: red;
  }
`
// const ThemeMode = styled.div`
//   position: relative;
//   cursor: pointer;
//   text-align: center;
//   width: 2.2rem;
//   height: 2.2rem;
//   // border-radius: 50%;
//   // border: 1px solid var(--secondary);

//   &:hover{
//     background-color: rgba(76, 46, 67, 0.3);
//     width: 2.2rem;
//     height: 2.2rem;
//     border-radius: 50%;
//   }

//   input[type="checkbox"] {
//     cursor: pointer;
//     width: 100%;
//     height: 100%;
//   }

//   .checkbox {
//     opacity: 0;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     height: 100%;
//   }
// `

const InputToggleTheme = styled.input`
  --size: 1.4rem;
  margin-top: 0.35rem;

  appearance: none;
  outline: none;
  cursor: pointer;

  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: var(--black);

  transition: all 500ms;

  &:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);

    transform: scale(0.75);
    color: hsl(40, 100%, 50%);
    box-shadow: inset 0 0 0 var(--size),
      calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
      var(--offset-orthogonal) 0 0 var(--ray-size),
      0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
      0 var(--offset-orthogonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
        var(--ray-size),
      var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
      var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
  }

  z-index: 1;
  &:checked {
    & ~ .background {
      --bg: white;
    }
    & ~ .title {
      --color: hsl(40, 100%, 50%);
    }
  }

  .title {
    --color: var(--black);
    color: var(--color);
    z-index: 1;
    cursor: pointer;
    display: block;
    padding: 0.5rem 0 0;
    transition: color 500ms;
  }
`;