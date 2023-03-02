import logo from './logo.svg';
import './App.css';
import Slides from './components/slides';
import Footer from './components/footer';
import Cards from './components/demo';
 import popular from 'F:/myreact/netflix/src/components/json files/popular.json';
 import top10 from "F:/myreact/netflix/src/components/json files/toprated.json"
import PrimarySearchAppBar from './components/seachBAR/index.jsx';
import ToggleColorMode from './components/themeprovider';

function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
      {/* <Slides/>
      <Cards catg="popular" popular={popular} />
      <Cards catg="Top 10" popular={top10} />
       <Footer/>  */}
      
       <ToggleColorMode/>
    </div>
  );
}

export default App;
