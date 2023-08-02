import { NavLink } from 'react-router-dom'
import '../styles/Sidebar.scss'

const Sidebar = () => {
    // const navigator = useNavigate()
    return (
        <>
            <div className="sidebar fixed-top">
                <div className="list">
                    <h2>Genre</h2>
                        <NavLink className="option" to={'/genres/action'}>Action</NavLink>
                        <NavLink className="option" to={'/genres/horror'}>Horor</NavLink>
                        <NavLink className="option" to={'/genres/action'}>Comedy</NavLink>
                        <NavLink className="option" to={'/genres/action'}>Adventure</NavLink>
                        <NavLink className="option" to={'/genres/action'}>Sci-Fi</NavLink>
                        <NavLink className="option" to={'/genres/action'}>Romance</NavLink>
                        <NavLink className="option" to={'/genres/action'}>Drama</NavLink>
                        <NavLink className="option" to={'/genres/action'}>More..</NavLink>
                    {/* <div className="option">Horor</div>
                    <div className="option">Comedy</div>
                    <div className="option">Adventure</div>
                    <div className="option">Sci-Fi</div>
                    <div className="option">Romance</div>
                    <div className="option">Drama</div>
                    <div className="option">More..</div> */}
                </div>
                <div className="list">
                    <h2>Language</h2>
                    <NavLink className="option" to={'/genres/action'}>Indonesia</NavLink>
                    <NavLink className="option" to={'/genres/action'}>English</NavLink>
                    {/* <div className="option">Indonesia</div>
                    <div className="option">English</div> */}
                    {/* <div className="option">Korea</div>
                <div className="option">Jepang</div>
                <div className="option">More..</div> */}
                </div>
            </div>
        </>
    )
}

export default Sidebar