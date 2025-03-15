import logo from './logo.svg';
import './App.css';
import Example from './example';
import Time from './Time';
import MyComponent from './demo';
import Style from './style';
import EventEx from './EventEx';
import Welcome from './Welcome';
import CountEx from './CountEx';
import Color from './Color';
import EffectExample from './EffectExample';
import RandomUserData from './Fetch';
import Greet from './Greet';

function App() {
  const Header=()=>{
    return <h1>This is my header</h1>
  }
  const Navbar=()=>{
    return (
  <div className="navbar">
    <h1>This is my Navbar</h1>
  </div>)  }

  const Main=()=>{
    return (<div className="main">
      <h1>This is main</h1></div>)
  }
  const Footer=()=>{
    return (<div className="footer">
      <h1>This is my footer</h1></div>)
  }

  //jsx components
  const Output=()=>{
    let x=11;
    return(
      <div>
        <h1>Your output is {x==10?"java":"script"}</h1>
      </div>
    )
  }

  //alert

  function HandleClick(){
    alert("You clicked me")
  }

  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <Main/>
    <Footer/>
    <Output/>
    <Time/>
    <button onclick={HandleClick}>Click</button>
    <MyComponent/>
    <Style/>
    <EventEx/>
    <Welcome/>
    <CountEx/>
    <Color/>
    <EffectExample/>
    <RandomUserData/>
    <Greet name="Nitharshanaa"/>
   
    <Product
    img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9I2h5Xucs0v4-SrVt7P8bj2BfJVOGxlf2-Q&s."
    name="Kurta set"
    description="Very good fabric"
    />
    <Product
    img ="https://www.latestkurtidesigns.com/wp-content/uploads/2024/01/Fancy-Most-Amazing-Kurti.jpg"
    name="Kurta set"
    description="Very good fabric"
    />
    <Product
    img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9I2h5Xucs0v4-SrVt7P8bj2BfJVOGxlf2-Q&s"
    name="Kurta set"
    description="Very good fabric"
    />
   
    </div>
  );
}

export default App;
