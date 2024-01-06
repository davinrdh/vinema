import { Container } from "react-bootstrap"

const AboutPage = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="fs-5">
          Welcome to VINEMA.<span style={{ color: 'red' }}>I</span>D, your go-to destination for comprehensive movie information and ratings. At VINEMA.<span style={{ color: 'red' }}>I</span>D, we strive to provide you with a user-friendly platform that offers in-depth insights into the world of cinema.
          <br />
          Our website is dedicated to delivering accurate and up-to-date ratings for a wide range of movies, helping you make informed decisions on what to watch next. Whether you're a film enthusiast or a casual viewer, VINEMA.<span style={{ color: 'red' }}>I</span>D is designed to cater to all your movie-related needs.
        </div>
      </Container>
      <div className="d-flex justify-content-center fixed-bottom">
        <div>
          <p className="m-0 text-center">Contact me?</p>
          <div className="d-flex gap-3 fs-1">
            <a href="www.linkedin.com/in/davin-ridha" target="_blank" style={{ color: 'var(--white)' }}>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/davinrdh" target="_blank" style={{ color: 'var(--white)' }}>
              <i className="bi bi-github"></i>
            </a>
            <a href="" target="_blank" style={{ color: 'var(--white)' }}>
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage