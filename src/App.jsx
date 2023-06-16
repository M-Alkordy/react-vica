import logo from './assets/img/logo.svg'
import './App.css';
import NavBar from './components/NavBar/NavBar'
function App() {
  return (
    <>
    <NavBar logo={logo} 
            firstElement = "home"
            secElement ="profile"
            thirdElement ="contact" />
    </>
  );
}

export default App;
