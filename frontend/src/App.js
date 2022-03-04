import './App.css';
import Navigation from './components/Navigation';
import { GlobalStyles, } from './components/StyledComponents/GlobalStyles.style';
import HomePageBody from './components/HomePageBody'; 

function App() {
  return (
    <div> 
      <GlobalStyles /> 
        <Navigation /> 
        <HomePageBody /> 
    </div> 
  );
}

export default App;
