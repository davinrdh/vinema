import { useEffect, useState } from "react"
import { searchMovie } from "../services/Api"
import '../styles/SearchBar.scss'
import { Form, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {
    const [movie, setMovie] = useState<any>()
    const [searchInput, setSearchInput] = useState<any>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    // console.log(isLoading)


    const NavigateToPage = (data: any) => {
        navigate(`/movie/${data.id}`)
        window.location.reload()
    }


    const renderMovie = () => {
        return movie?.map((data: any, k: number) => (
            <>
            <div className="result" key={k} onClick={() => NavigateToPage(data)}>
                <img src={`${import.meta.env.VITE_APP_BASEIMG}/${data.poster_path}`} alt="" />
                <div className="ms-2">
                    <div className="title">{data.title}</div>
                    <div className="text-truncate" style={{maxWidth: '390px', fontSize: '14px', color: 'var(--white)'}}>{data.overview}</div>
                    <div className="rate">{data.vote_average} <i className="bi bi-star-fill"></i></div>
                </div>
            </div>
            </>
        ))
    }

    const renderSearch = async (q: any) => {
        setSearchInput(q)
    }

    useEffect(() => {

        const debounce = setTimeout(async () => {
            // console.log("first render")
            if (searchInput !== "") {
                setIsLoading(true)
                const query = await searchMovie(searchInput)
                // console.log("Render Movie")
                setMovie(query)
            }
        }, 1500)


        if (searchInput === "") {
            setMovie(null)
        }

        return () => {
            setIsLoading(false)
            // console.log("Cancel Timeout")
            clearTimeout(debounce)
        }
    }, [searchInput])


    return (
        <>

            <div className="search-input">
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search..."
                        className="me-2 searchType"
                        aria-label="Search"
                        value={searchInput}
                        onChange={({ target }) => renderSearch(target.value)}
                    />
                    {/* <i className="bi bi-search"></i> */}
                </Form>

                {movie?.length != 0 && movie && (

                    <div className="search">

                        {isLoading ? renderMovie() :
                            <div className="loading">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        }

                    </div>

                )}
            </div>


        </>

    )
}

export default SearchBar