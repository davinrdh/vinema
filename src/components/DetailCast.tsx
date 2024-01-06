/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { getCredits, getCreditsDetail } from '../services/Api'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function DetailCast() {
    const [cast, setCast] = useState<any>()
    const [castDetail, setCastDetail] = useState<any>()

    const { id } = useParams()

    useEffect(() => {
        getCredits(id).then((res) => {
            setCast(res)
        })
    }, [])

    useEffect(() => {
        getCastDetail(cast?.[0].credit_id)
    }, [cast])

    const getCastDetail = (id: any) => {
        try {
            getCreditsDetail(id).then((res) => {
                setCastDetail(res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleCastDetail = (id: any) => {
        getCastDetail(id)
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const renderCast = () => {
        return cast?.map((item: any, i: number) => (
            <Col md={2} key={i} className='mb-2'>
                <CardStyled onClick={() => handleCastDetail(item?.credit_id)} className={castDetail?.id === item?.credit_id ? 'active' : ''}>
                    <img src={`${item?.profile_path == null ? '/default-avatar.svg' : import.meta.env.VITE_APP_BASEIMG + item?.profile_path}`} alt="" className="img-fluid rounded" style={{ objectFit: "cover" }} />
                    <div style={{ maxWidth: '100px' }}>
                        <p className="fw-bold text-truncate">{item?.original_name}</p>
                        <p>as</p>
                        <h6 className='text-truncate'>{item?.character}</h6>
                    </div>
                </CardStyled>
            </Col>
        ))
    }

    const renderCastDetail = () => (
        <>
            <div className='d-flex justify-content-center mb-3 '>
                <img src={`${castDetail?.person?.profile_path == null ? '/placeholder.jpg' : import.meta.env.VITE_APP_BASEIMG + castDetail?.person?.profile_path}`} alt="" height={300} className='rounded' />
            </div>
            <div className='text-center'>
                <h6><b>Name</b></h6>
                <p className='fs-5 mb-1'>{castDetail?.person?.original_name}</p>
                <h6><b>Character</b></h6>
                <p className='fs-5 mb-1'>{castDetail?.media?.character}</p>
                <h6><b>Popularity</b></h6>
                <p className='fs-5 mb-1'>{castDetail?.person?.popularity}</p>
                <h6><b>Known For</b></h6>
                <p className='fs-5 mb-1'>{castDetail?.person?.known_for_department}</p>
                <NavLink to={`/person/${castDetail?.person?.id}`}>
                    <Button variant='outline-danger'>View More</Button>
                </NavLink>
            </div>
        </>
    )

    return (
        <Container className='my-4'>
            <Row className='gy-2'>
                <Col md={8}>
                    <h3 className='fw-bold'>Cast</h3>
                    <Row>
                        {renderCast()}
                    </Row>
                </Col>
                <Col md={4} style={{borderLeft: '1px solid var(--secondary)'}}>
                    <h3 className='text-center fw-bold'>Personal Info</h3>
                    {renderCastDetail()}
                </Col>
            </Row>
        </Container>
    )
}

const CardStyled = styled(Card)`
    background: transparent;
    text-align: center;
    color: var(--white);
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex: column;
    align-items: center;
    min-height: 255px;
    transition: .2s all ease-in-out;

    &:hover {
        box-shadow: 0px 3px 0px 0px red;
        background: linear-gradient(to bottom, rgb(255, 0, 0, 0), rgb(255, 0, 0, 0.1));
    }

    &.active {
        box-shadow: 0px 3px 0px 0px red;
        background: linear-gradient(to bottom, rgb(255, 0, 0, 0), rgb(255, 0, 0, 0.1));
    }

    p {
        margin-bottom: 0;
    }

    .img-cast {
        min-width: 100px;
        height: 150px;
        border-radius: 8px;
    }
`
