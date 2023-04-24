import Header from './components/header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div id="appContent">
        <AboutMe />
        <Skills />
      </div>
      <Projects />
      <div id="contactDetails">
        <Contact />
        <Socials />
        <Resume />
      </div>
      <Footer />
    </>
  );
}
// projectName={projects.name} projectLink={projects.link} projectPreview={projects.preview} projectDescription={projects.description}
export default App;
