import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navBar";
import { Banner } from "./components/banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import ScrollViewCounter from "./components/scrollViewCounter"; // Update this import statement

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollViewCounter />
    </div>
  );
}

export default App;
