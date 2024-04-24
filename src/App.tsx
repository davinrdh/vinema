/* eslint-disable no-constant-condition */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss'
import Home from './pages/Home';
import Detail from './components/Detail';
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
import DetailCast from './components/DetailCast';
import DetailPerson from './components/DetailPerson';
import Result from './pages/Result';


const App = () => {
  return (
    <>
      {/* <Header/> */}
      {/* <Header handleSearch={(value: string) => search(value)} /> */}
      <div>
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
            <Route path='movie/:id' element={<Detail />} />
            <Route path='movie/:id/cast' element={<DetailCast />} />
            <Route path='person/:id' element={<DetailPerson />} />
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/tv' element={<AboutPage />}></Route>
            <Route path='/search' element={<Result />}></Route>
          </Route>
        </Routes>
      </Router>
      </div>

    </>
  )
}

export default App
