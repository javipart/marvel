import './App.css';
import Footer from './components/Footer/Footer';
import Modals from './containers/Modals';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home';

const App = () => {
  
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
      <Modals />
    </div>
  );
}

export default App;
