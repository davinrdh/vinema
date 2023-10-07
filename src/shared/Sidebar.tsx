import { NavLink } from 'react-router-dom'
import '../styles/Sidebar.scss'

const Sidebar = () => {
    // const navigator = useNavigate()
    return (
        <>
            <div className="sidebar desktop fixed-top">
                <div className="list">
                    <h2>Genre</h2>
                    <NavLink className="option" to={'/genres/action'}>Action</NavLink>
                    <NavLink className="option" to={'/genres/horror'}>Horor</NavLink>
                    <NavLink className="option" to={'/genres/comedy'}>Comedy</NavLink>
                    <NavLink className="option" to={'/genres/animation'}>Animation</NavLink>
                    <NavLink className="option" to={'/genres/science-fiction'}>Sci-Fi</NavLink>
                    <NavLink className="option" to={'/genres/romance'}>Romance</NavLink>
                    <NavLink className="option" to={'/genres/drama'}>Drama</NavLink>
                    <NavLink className="option" to={'/filter'}>More..</NavLink>
                </div>
                <div className="list">
                    <h2>Language</h2>
                    <NavLink className="option" to={'/language/indonesian'}>Indonesian</NavLink>
                    <NavLink className="option" to={'/language/english'}>English</NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar