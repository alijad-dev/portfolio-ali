import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import "./App.css";
import { Skills } from "./components/Skills";
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
    </div>
  );
}

export default App;