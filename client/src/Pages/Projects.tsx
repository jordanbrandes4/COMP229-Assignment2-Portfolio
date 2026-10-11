import soccerImage from '../assets/soccerteammanager.png'
import wifiImage from '../assets/wifispeedtest.png'
import F1Image from '../assets/f1logo.png'

function Projects() {
  return (
    <main className="projects">
      <h1>My Projects</h1>

      <div className="project-container">

        <div className="project-card">
          <img src={soccerImage} alt="Soccer Team Manager" />
          <h2>Soccer Team Manager</h2>
          <p>
            I developed a Python application connected to an Oracle SQL
            database to manage soccer teams, players, and statistics.
          </p>
          <p>
            This project gave me experience working with Python, SQL,
            databases, and connecting an application to stored data.
          </p>
        </div>

        <div className="project-card">
          <img src={wifiImage} alt="WiFi Speed Test System" />
          <h2>WiFi Speed Test System</h2>
          <p>
            I worked on the design and software requirements for a WiFi speed
            testing platform that allows users to test and review their
            internet performance. The project included requirements, use cases, UML diagrams, and
            system design.
          </p>
        </div>

        <div className="project-card">
          <img src={F1Image} alt="F1 Strategy Simulator" />
          <h2>F1 Strategy Simulator</h2>
          <p>
            I am currently working on developing a simulation tool for Formula 1 racing strategies, allowing users to test different approaches and analyze performance.
          </p>
        </div>

      </div>
    </main>
  )
}

export default Projects