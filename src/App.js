import './App.css';
import ArrowToUp from './Components/ScrollToTopButton';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import  Upload  from './Components/Upload';
import Router from './Router';


function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello</h1>
      <Upload/>
    <ArrowToUp/>
      <Router/>
    <Footer/>
    </div>
  );
}

export default App;