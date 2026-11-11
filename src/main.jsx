import { createRoot } from 'react-dom/client'
import logo from './assets/tutuca-logo.png'
import icon from './assets/tutuca-icon.png'
import firstGameArt from './assets/first-game-concept.png'
import './styles.css'

function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header shell">
        <a className="brand" href="#home" aria-label="TUTUCA Games home">
          <img src={icon} alt="" width="36" height="36" />
          TUTUCA GAMES
        </a>
        <nav aria-label="Main navigation">
          <a href="#games">Games</a>
          <a href="#studio">Studio</a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero shell" id="home" aria-labelledby="title">
          <div className="poster">
            <h1 id="title"><img src={logo} alt="TUTUCA Games" width="1672" height="941" fetchPriority="high" /></h1>
          </div>
          <div className="hero-caption">
            <p>Making games in Córdoba, Argentina</p>
            <a className="pill" href="#games">Explore our games <span aria-hidden="true">↓</span></a>
          </div>
        </section>
        <section className="games" id="games" aria-labelledby="games-title">
          <div className="shell">
            <h2 id="games-title">Games</h2>
            <article className="project">
              <div className="project-copy">
                <span className="status"><i aria-hidden="true" /> In development</span>
                <h3>Our first game</h3>
                <p>Our debut game is taking shape. We’ll share more here as development progresses.</p>
              </div>
              <div className="project-art">
                <img src={firstGameArt} alt="Concept art of four survivors facing a horde in a ruined city" loading="lazy" />
              </div>
            </article>
          </div>
        </section>
        <section className="studio shell" id="studio" aria-labelledby="studio-title">
          <div className="studio-story">
            <h2 id="studio-title">The studio</h2>
            <p>We’re Federico and Arturo, two longtime players from Córdoba, Argentina, with years of experience in the industry.</p>
            <p>We’d always wanted to make games of our own. When we played the genres we love, we’d talk about what frustrated us, what we wished we could do, and which ideas we’d try ourselves. We started TUTUCA Games to build those ideas into games with our own point of view.</p>
          </div>
          <ul className="team" aria-label="Founders">
            <li>
              <h3>Federico Ahumada</h3>
              <p>Developer Lead</p>
            </li>
            <li>
              <h3>Arturo Castro</h3>
              <p>Game Art Lead</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} TUTUCA Games</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
