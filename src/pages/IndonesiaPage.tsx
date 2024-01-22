import { Fragment, useEffect, useState } from 'react'
import { getFilter, getSort } from '../services/Api'
import '../styles/MoviePage.scss'
import Skeleton from 'react-loading-skeleton'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CardMovie from '../components/CardMovie'

const IndonesiaPage = () => {
  const [action, setAction] = useState<any>()
  const [emulator, setEmulator] = useState<any>()
  const [sort, setSort] = useState<any>()

  useEffect(() => {
    getFilter(`with_original_language=id`).then((res) => {
      setAction(res)
      console.log(res)
    })
  }, [])

  useEffect(() => {
    if (sort) {
      getSort(`sort_by=${sort}`, `with_original_language=id`).then((res) => {
        setAction(res)
        console.log(res)
      })
    }
  }, [sort])

  console.log(sort)

  useEffect(() => {
    const emt = action
    setTimeout(() => {
      setEmulator(emt)
    }, 1 * 1000)
  })

  const renderAction = () => {
    return action && action?.map((item: any, i: number) => {
      return (
        <Fragment key={i}>
          {emulator &&
            <CardMovie movie={item} />
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
      <div className='header'>
        <h2 className='kategori'>Indonesian Movie</h2>
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

export default IndonesiaPage