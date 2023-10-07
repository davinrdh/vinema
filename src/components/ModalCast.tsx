
import '../styles/Detail.scss'
import { Col, Modal, Row } from 'react-bootstrap'

export default function ModalCast({ modal, onClose, cast }: { modal: any, onClose: any, cast: any }) {
  const renderCast = () => {
    return cast?.map((item: any, i: number) => (
      <Col md={2} key={i}>
        <div className="box-cast card">
          <img src={`${item?.profile_path == null ? '/placeholder.jpg' : import.meta.env.VITE_APP_BASEIMG + item?.profile_path}`} alt="" className="img-cast" />
          <p className="fw-bold">{item?.original_name}</p>
          <p>as</p>
          <h6>{item?.character}</h6>
        </div>
      </Col>
    ))
  }
  return (
    <Modal show={modal} size='xl' onHide={onClose} className='h-100' centered>
      <Modal.Body style={{ background: '#3F2E3E' }}>
        <Row>
          {renderCast()}
        </Row>
      </Modal.Body>
    </Modal>
  )
}
