import Cards from './components/Cards';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

function App() {

  return (
    <div className="App bg-gray-900 text-white ">
      <Navbar />
      <Cards />
      <Footer />

    </div>
  );
}

export default App;
