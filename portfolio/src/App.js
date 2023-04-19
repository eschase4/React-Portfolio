import Header from './components/header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
    </>
  );
}
// projectName={projects.name} projectLink={projects.link} projectPreview={projects.preview} projectDescription={projects.description}
export default App;
