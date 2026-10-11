import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <p className="intro">Hello, I'm</p>

        <h1>Jordan Brandes</h1>

        <h2>Software Engineering Technology - Artificial Intelligence Student</h2>

        <p className="mission">
          I am a student at Centennial College with an interest in software
          development, artificial intelligence, databases, and using technology
          to solve real-world problems.
        </p>

        <div className="home-buttons">
          <Link to="/about" className="button">
            About Me
          </Link>

          <Link to="/projects" className="button secondary">
            View My Projects
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home