import React, { useEffect, useState } from 'react'
import { getFilter } from '../services/Api'
import '../styles/ActionPage.scss'
import Skeleton from 'react-loading-skeleton'

const HorrorPage = () => {
  const [action, setAction] = useState('')
  const [emulator, setEmulator] = useState()

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

  const renderAction = () => {
    return action && action?.map((action: any, i: number) => {
      return (
        <>
          {emulator &&
            <div key={i}>
              <div className="action card" onClick={() => (`/detail/${action.id}`)}>
                <div className="release">{action?.release_date.slice(0, 4)}</div>
                <img src={`${import.meta.env.VITE_APP_BASEIMG}/${action?.poster_path}`} alt="" />
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
    <h2 className='kategori'>Horror Movie</h2>
    <div className='content'>
      {renderAction()}
    </div>
    </>
  )
}

export default HorrorPage