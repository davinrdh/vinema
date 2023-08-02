import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
// import Header from './shared/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ActionPage from './pages/ActionPage';
import NavBarLayout from './routing/NavbarLayout';
import SidebarLayout from './routing/SidebarLayout';
import HorrorPage from './pages/HorrorPage';
// import { searchMovie } from './services/Api';
// import { useState } from 'react';

const App = () => {


  // const [movies, setMovies] = useState<any>()

  // useEffect(() => {
  //   getMovie().then((res) => {
  //     setMovies(res)
  //   })
  // }, [])



  // const MovieList = () => {
  //   return movies?.map((movie: any, i: number) => (
  //     <CardMovie movie={movie} key={i} />
  //   ))
  // }

  // const search = async (q: any) => {
  //   if (q.length > 3) {
  //     const query = await searchMovie(q)
  //     setMovies(query.results)
  //   }
  // }


  return (
    <>
      {/* <Header/> */}
      {/* <Header handleSearch={(value: string) => search(value)} /> */}
      <Router>
        <Routes>
          <Route path='/' element={<NavBarLayout />}>
            <Route path='' element={<SidebarLayout />}>
              <Route index element={<Home />} />
              <Route path='/genres/action' element={<ActionPage />} />
              <Route path='/genres/horror' element={<HorrorPage />} />
            </Route>
            <Route path='detail/:id' element={<Detail />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
