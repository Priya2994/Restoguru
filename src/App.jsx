
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Recipe from './components/recipes/Recipe';
import Footer from './components/footer/Footer';



function App() {

  return (
    <div className="App">
      <div>
        {/* header component */}
          <Header />
        {/* header component ends*/}
        
        {/* Banner component */}
        <Banner />
        {/* Banner component ends */}
        

        {/* Recipe Component */}
        <Recipe />
        {/* Recipe Component ends*/}

        {/* Recipe Component */}
        <Footer />
        {/* Recipe Component ends*/}

      </div>
    </div>
  )
}

export default App
