import { Container } from 'react-bootstrap'
import Sidebar from '../shared/Sidebar'
import { Outlet } from 'react-router-dom'

export default function SidebarLayout() {
  return (
    <>
        <Sidebar />
        <Container className='mt-4'>
        <Outlet />
        </Container>
    </>
  )
}
