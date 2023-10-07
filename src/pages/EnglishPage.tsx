import { useEffect, useState } from 'react'
import { getFilter, getSort } from '../services/Api'
import '../styles/MoviePage.scss'
import Skeleton from 'react-loading-skeleton'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CardMovie from '../components/CardMovie'

const EnglishPage = () => {
  const navigate = useNavigate()
  const [action, setAction] = useState('')
  const [emulator, setEmulator] = useState()
  const [sort, setSort] = useState('')

  useEffect(() => {
    getFilter(`with_original_language=en`).then((res) => {
      setAction(res)
      console.log(res)
    })
  }, [  ])

    useEffect(() => {
      if(sort) {
        getSort(`sort_by=${sort}`, `with_original_language=en`).then((res) => {
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
    return action && action?.map((action: any, i: number) => {
      return (
        <>
          {emulator &&
            <CardMovie movie={action} />
            }
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
        <h2 className='kategori'>English Movie</h2>
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

export default EnglishPage