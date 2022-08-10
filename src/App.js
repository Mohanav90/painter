import './App.css';
import Blog from './components/Blog/Blog';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Copyright from './components/Copyright/Copyright';
import Footer from './components/Footer/Footer';
import GetAQuote from './components/GetAQuote/GetAQuote';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import Painter from './components/Painter/Painter';
import Professional from './components/Professional/Professional';
import Project from './components/Project/Project';
import TeamMembers from './components/TeamMembers/TeamMembers';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
     <Nav />
     <Logo />
     <Header />
     <Painter />
     <ChooseUs />
     <Professional />
     <GetAQuote />
     <TeamMembers />
     <Testimonials />
     <Blog />
     <Project />
     <Footer />
     <Copyright />
     
    </div>
  );
}

export default App;
