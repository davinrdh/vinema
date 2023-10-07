/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { getPersonDetail, getPersonMovie, getSocmed } from '../services/Api'
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

export default function DetailPerson() {
  const [person, setPerson] = useState<any>()
  // const [movie, setMovie] = useState<any>()
  const [viewMore, setViewMore] = useState<boolean>(false)
  const [socmed, setSocmed] = useState()

  const { id } = useParams()

  const getDetail = (id: any) => {
    try {
      getPersonDetail(id).then((res) => {
        setPerson(res)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getMovie = (id: any) => {
    try {
      getPersonMovie(id).then((res) => {
        setMovie(res)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetail(id)
    getMovie(id)

    getSocmed(id).then((res) => {
      setSocmed(res)
    })
  }, [])


  const renderSosmed = () => {
    return (
      <div className="d-flex justify-content-center mt-3 fs-3">
        <div className='d-flex gap-3'>
          <BadgeRounded>
            <a href={`https://instagram.com/${socmed?.instagram_id}`} target='_blank'>
              <i className="bi bi-instagram"></i>
            </a>
          </BadgeRounded>
          <BadgeRounded>
            <a href={`https://x.com/${socmed?.twitter_id}`} target='_blank'>
              <i className="bi bi-twitter"></i>
            </a>
          </BadgeRounded>
          <BadgeRounded>
            <a href={`https://facebook.com/${socmed?.facebook_id}`} target='_blank'>
              <i className="bi bi-facebook"></i>
            </a>
          </BadgeRounded>
          <BadgeRounded>
            <a href={`https://youtube.com/@${socmed?.youtube_id}`} target='_blank'>
              <i className="bi bi-youtube"></i>
            </a>
          </BadgeRounded>
          <BadgeRounded>
            <a href={`https://tiktok.com/@${socmed?.tiktok_id}`} target='_blank'>
              <i className="bi bi-tiktok"></i>
            </a>
          </BadgeRounded>
        </div>
      </div>
    )
  }

  const renderPersonalInfo = () => (
    <div className='mt-3'>
      <h5><b>Personal Info</b></h5>
      <TextPersonal><b>Known For</b></TextPersonal>
      <TextPersonal>{person?.known_for_department}</TextPersonal>
      <TextPersonal><b>Birthday</b></TextPersonal>
      <TextPersonal>{person?.birthday}</TextPersonal>
      <TextPersonal><b>Place of Birth</b></TextPersonal>
      <TextPersonal>{person?.place_of_birth}</TextPersonal>
      <TextPersonal><b>Popularity</b></TextPersonal>
      <TextPersonal>{person?.popularity}</TextPersonal>
      <TextPersonal><b>Also Known as</b></TextPersonal>
      {person?.also_known_as.map((item: any, i: number) => (
        <TextPersonal key={i}>{item}</TextPersonal>
      ))}
    </div>
  )

  // const renderMovie = () => {
  //   return movie?.cast?.map((item:any, i:number) => (
  //     <CardMovieStyled key={i}>
  //       <img src={`${import.meta.env.VITE_APP_BASEIMG}${item?.poster_path}`} alt="" className='img-fluid' />
  //       <p className='m-0'>{item?.original_title}</p>
  //     </CardMovieStyled>
  //   ))
  // }

  const breakParagraph = (text: any) => {
    if (!text) {
      return null
    }

    const sentences = text.split('. ')
    const paragraphs: any = []
    let paragraph = ''

    sentences.forEach((sentence: any, index: number) => {
      paragraph += sentence + '. '

      if ((index + 1) % 5 === 0 || index === sentences.length - 1) {
        paragraphs.push(paragraph)
        paragraph = ''
      }
    })

    return paragraphs.map((item: any, i: number) => (
      <p key={i}>{item} <br /></p>
    ))
  }

  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col md={4} className='d-flex justify-content-center'>
            <div>
              <img src={`${person?.profile_path == null ? '/default-avatar.svg' : import.meta.env.VITE_APP_BASEIMG + person?.profile_path}`} alt="" className="img-fluid rounded" />
              {renderSosmed()}
              {renderPersonalInfo()}
            </div>
          </Col>
          <Col md={8}>
            <h1>{person?.name}</h1>
            <h5 className='mt-4 mb-3' style={{ fontWeight: '600' }}>Biography</h5>
            <TruncateText className={viewMore === true ? '' : 'overflow'}>
              {/* <p>{person?.biography}</p> */}
              {breakParagraph(person?.biography || `We don't have a biography for ${person?.name}`)}
            </TruncateText>
            {person?.biography === "" ? '' :
              (
                <Button
                  onClick={() => setViewMore(!viewMore)}
                  className={`${viewMore === true ? 'd-none' : ''} w-100 p-0 text-primary`}
                  style={{ color: 'var(--white)' }}
                  variant=''>Read More <i className="bi bi-arrow-down"></i></Button>
              )
            }
            {/* <ContainerMovie>
              {renderMovie()}
            </ContainerMovie> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

const TruncateText = styled.p`

  &.overflow {
    -webkit-line-clamp: 12;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`

const BadgeRounded = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--white);

  i {
    color: var(--background);
  }
`

const TextPersonal = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 5px;
`

// const ContainerMovie = styled.div`
// display: flex;
// width: auto;
// overflow-y: hidden;
// overflow-x: auto;
// margin: 1rem 0;
// `

// const CardMovieStyled = styled(Card)`
//   	width: 170px;
//     height: 300px;
//     cursor: pointer;
//     overflow: hidden;
//     background-color: transparent;
//     color: var(--white);
//     transition: .2s ease;
//     text-align: center;

//     img {
//             border-radius: 8px;
//     }

// `