import { Container } from 'react-bootstrap'
import Sidebar from '../shared/Sidebar'
import { Outlet } from 'react-router-dom'

export default function SidebarLayout() {
  return (
    <>
      <Sidebar />
      <div className='mt-4 d-flex justify-content-center'>
        <Container style={{padding: '0 80px'}}>
          <Outlet />
        </Container>
      </div>
    </>
  )
}
