import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InsideTokyobike from './components/InsideTokyobike';
import Merch from './components/Merch';

function App() {
  return (
    <div className="App">
      <Header/>
      <Merch/>
      <InsideTokyobike/>
      <Footer/>
    </div>
  );
}

export default App;
