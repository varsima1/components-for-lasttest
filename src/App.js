import './App.css';
import ArrowToUp from './Components/ScrollToTopButton';
import  Header from './Components/Header';
import { Footer } from './Components/Footer';
import Router from './Router';
import RouterAuth from './RouterAuth';


function App() {
  return (
    <div className="App">
      <Header/>
    <ArrowToUp/>
      <Router/>
      <RouterAuth/>
    <Footer/>
    </div>
  );
}

export default App;