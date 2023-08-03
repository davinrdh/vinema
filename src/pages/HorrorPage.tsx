import React, { useEffect, useState } from 'react'
import { getFilter, getSort } from '../services/Api'
import '../styles/ActionPage.scss'
import Skeleton from 'react-loading-skeleton'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HorrorPage = () => {
  const navigate = useNavigate()
  const [action, setAction] = useState('')
  const [emulator, setEmulator] = useState()
  const [sort, setSort] = useState()

  useEffect(() => {
    getFilter(`with_genres=27`).then((res) => {
      setAction(res)
      console.log(res)
    })
  }, [])

  useEffect(() => {
    const emt = action
    setTimeout(() => {
      setEmulator(emt)
    }, 1 * 1000)
  })

  useEffect(() => {
    if(sort) {
      getSort(`sort_by=${sort}`, `with_genres=27`).then((res) => {
      setAction(res)
      console.log(res)
      })
    }
  }, [sort])

  const renderAction = () => {
    return action && action?.map((action: any, i: number) => {
      return (
        <>
          {emulator &&
            <div key={i}>
              <div className="action card" onClick={() => navigate(`/detail/${action.id}`)}>
                <div className="release">{action?.release_date.slice(0, 4)}</div>
                <img src={`${action?.poster_path == null  ? '/placeholder.jpg' : import.meta.env.VITE_APP_BASEIMG + action?.poster_path}`}  alt="" className={action ? 'place-holder' : ''}/>
                <div className="action-title text-truncate">{action.title}</div>
                <div className="action-rate"><i className="bi bi-star-fill"></i> {action.vote_average} </div>
              </div>
            </div>}
          {
            !emulator &&
            <Skeleton count={1} width="170px" height="300px" />
          }
        </>
      )
    })
  }

  return (
    <>
    <div className='header'>
        <h2 className='kategori'>Horror Movie</h2>
        <div className='d-flex gap-3'>
          <p>Sort By :</p>
          <Form.Select aria-label="Default select example" onChange={(e) => {
            const sortby = e.target.value
            setSort(sortby)
            console.log(sortby)
          }}>
            {/* <option value="">---</option> */}
            <option value="popularity.desc">Popularity</option>
            <option value="vote_average.desc">Rating</option>
            <option value="primary_release_date.desc">Newest</option>
            <option value="primary_release_date.asc">Latest</option>
          </Form.Select>
        </div>
      </div>
    <div className='content'>
      {renderAction()}
    </div>
    </>
  )
}

export default HorrorPage