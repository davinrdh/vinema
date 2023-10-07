/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, Fragment } from 'react'
import { getFilter, getSort } from '../services/Api'
import '../styles/moviePage.scss'
import Skeleton from 'react-loading-skeleton'
import CardMovie from '../components/CardMovie'

const ComponentPage = ({genres, TitlePage}: {genres: string, TitlePage: string}) => {
  const [movie, setMovie] = useState()
  const [emulator, setEmulator] = useState()
  // const [sort, setSort] = useState('popularity.desc')
  const [page, setPage] = useState(1)

  const getMovie = (pageNumber?: any, sortBy?: any) => {
    const actualSortBy = sortBy || sort;

    try {
      getFilter(`page=${pageNumber}&`, `sort_by=${actualSortBy}&`, `with_genres=${genres}`).then((res: any) => {
        if (!movie) {
          setMovie(res)
        } else {
          setMovie((prevState: any) => [...prevState, ...res])
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!movie) {
      getMovie(page, sort)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [movie, sort])
  

  const handleScroll = (e: any) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      setPage(prevPage => prevPage + 1);
      getMovie(page + 1, sort)
    }
  }

  // const handleSort = (newSort: any) => {
  //   setSort(newSort)
  //   setPage(0)
  //   window.scrollTo(0, 0);
  // }

  useEffect(() => {
    const emt = movie
    setTimeout(() => {
      setEmulator(emt)
    }, 1 * 1000)
  })

  const handleToggleUp = () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const rendermovie = () => {
    return movie && movie?.map((movie: any, i: number) => (
      <Fragment key={i}>
        {emulator &&
          <CardMovie movie={movie} />
          }
        {
          !emulator &&
          <Skeleton count={1} width="170px" height="300px" />
        }
      </Fragment>
    ))
  }

  return (
    <>
      <div className='header'>
        <h2 className='kategori'>{TitlePage}</h2>
        {/* <div className='d-flex gap-3'>
          <p>Sort By :</p>
          <Form.Select aria-label="Default select example" onChange={(e) => handleSort(e.target.value)}>
            <option value="popularity.desc">Popularity</option>
            <option value="vote_average.desc">Rating</option>
            <option value="primary_release_date.desc" onClick={() => handleSort('primary_release_date.desc')}>Newest</option>
            <option value="primary_release_date.asc">Latest</option>
          </Form.Select>
        </div> */}
      </div>
      <div className='content'>
        {rendermovie()}
        <div className="toggleUp fixed-bottom" onClick={handleToggleUp}>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </div>
      </div>
    </>
  )
}

export default ComponentPage