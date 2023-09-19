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
import ComedyPage from './pages/ComedyPage';
import AnimationPage from './pages/AnimationPage';
import ScienceFictionPage from './pages/ScienceFictionPage';
import RomancePage from './pages/RomancePage';
import DramaPage from './pages/DramaPage';
import FilterPage from './pages/FilterPage';
import IndonesiaPage from './pages/IndonesiaPage';
import EnglishPage from './pages/EnglishPage';
import AboutPage from './pages/AboutPage';
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
              <Route path='/genres/comedy' element={<ComedyPage />} />
              <Route path='/genres/animation' element={<AnimationPage />} />
              <Route path='/genres/science-fiction' element={<ScienceFictionPage />} />
              <Route path='/genres/romance' element={<RomancePage />} />
              <Route path='/genres/drama' element={<DramaPage />} />
              <Route path='/filter' element={<FilterPage />} />
              <Route path='/language/indonesian' element={<IndonesiaPage />} />
              <Route path='/language/english' element={<EnglishPage />} />
            </Route>
            <Route path='detail/:id' element={<Detail />} />
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/tv' element={<AboutPage />}></Route>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
