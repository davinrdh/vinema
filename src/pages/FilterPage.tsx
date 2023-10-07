import { Fragment, useEffect, useState } from 'react'
import { Form, FormSelect } from 'react-bootstrap'
import styled from 'styled-components'
import { getFilter } from '../services/Api'
import Skeleton from 'react-loading-skeleton'
import '../styles/CardMovie.scss'
import { useNavigate } from 'react-router-dom'
import CardMovie from '../components/CardMovie'

const FilterPage = () => {
  const navigate = useNavigate()
  const [movie, setMovie] = useState()
  const [genre1, setGenre1] = useState()
  const [genre2, setGenre2] = useState()
  const [language, setLanguage] = useState()
  const [emulator, setEmulator] = useState()

  useEffect(() => {
    const img = movie
    const emt = movie
    setTimeout(() => {
      setEmulator(emt)
    }, 1 * 1000)
  })

  useEffect(() => {
    let urlParams = `with_genres=${genre1}`
    if (genre2) {
      urlParams += `%2C${genre2}`
    }

    if (language) {
      urlParams += `&with_original_language=${language}&`
    }

    if (genre1) {
      getFilter(urlParams).then((res) => {
        setMovie(res)
        console.log(res)
      })
    }
  }, [genre1, genre2, language])


  const renderCard = () => {
    return movie?.map((movie: any, i: number) => {
      return (
        <Fragment key={i}>
          {emulator &&
            <CardMovie movie={movie} />
          }
          {
            !emulator &&
            <Skeleton count={1} width="170px" height="300px" />
          }
        </Fragment>
      )
    })
  }


  return (
    <>

      <HeaderStyled>
        <div>
          <label htmlFor="">Genre 1:</label>
          <FormSelectCustom aria-label="Default select example" onChange={(e) => {
            const genre1Value = e.target.value
            setGenre1(genre1Value)
            // console.log(genre1Value)
          }}>
            <option value='null'>---</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </FormSelectCustom>
        </div>

        <div>
          <label htmlFor="">Genre 2:</label>
          <FormSelectCustom aria-label="Default select example" onChange={(e) => {
            const genre2Value = e.target.value
            console.log(genre2Value)
            setGenre2(genre2Value)
          }}>
            <option>---</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </FormSelectCustom>
        </div>

        <div>
          <label htmlFor="">Language:</label>
          <FormSelectCustom aria-label="Default select example" onChange={(e) => {
            const languageValue = e.target.value
            console.log(languageValue)
            setLanguage(languageValue)
          }}>

            <option>---</option>
            <option value="id">Indonesian</option>
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="jv">Javanese</option>
          </FormSelectCustom>
        </div>

      </HeaderStyled>

      <div className="content mt-3">
        {renderCard() === null ? 'No Result' : renderCard()}
      </div>

    </>
  )
}

export default FilterPage

const HeaderStyled = styled.div`
  display: flex;
  margin: 0 120px;
  justify-content: space-between;
  gap: 1rem
`

const FormSelectCustom = styled(FormSelect)`
  background-color: var(--secondary);
  width: 340px;
  color: var(--white);
  border: none;
`