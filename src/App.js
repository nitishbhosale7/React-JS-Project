import './App.css';
import './index.css';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>   
    </div>
  );
}

export default App;
