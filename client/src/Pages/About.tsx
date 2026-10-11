import profileImage from '../assets/profile.jpg'
import resume from '../assets/Jordan_Brandes_Co-op_Resume.pdf'

function About() {
  return (
    <main className="about">
      <div className="about-container">
        <img
          src={profileImage}
          alt="Jordan Brandes"
          className="profile-image"
        />

        <div className="about-content">
          <h1>About Me</h1>

          <h2>Jordan Brandes</h2>

          <p>
            I am a Software Engineering Technology - Artificial Intelligence
            student at Centennial College. I have experience working with
            programming, databases, web development, and artificial
            intelligence through my college courses and personal projects.
          </p>

          <p>
            I enjoy learning new technologies and building projects that allow
            me to improve my skills and solve real-world problems.
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View My Resume
          </a>
        </div>
      </div>
    </main>
  )
}

export default About