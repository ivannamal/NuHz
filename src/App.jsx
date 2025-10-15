import './App.css'
import Header from './components/Navigation/Header/Header';
import Footer from './components/Navigation/Footer/Footer'
import NameSection from "./components/NameSection/NameSection.jsx";
import IntroSection from "./components/IntroSection/IntroSection.jsx";
function App() {

  return (
    <>
      <Header />
      <NameSection />
      <IntroSection />
      <Footer />
    </>
  )
}

export default App
