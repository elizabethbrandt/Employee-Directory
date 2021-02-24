// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Search />
      </div>
    </Router>
  );
}

export default App;
