import './App.css'
import Header from './components/Navigation/Header/Header';
import TeamSection from "./components/TeamSection/TeamSection.jsx";
import Footer from './components/Navigation/Footer/Footer'
import NameSection from "./components/NameSection/NameSection.jsx";
import IntroSection from "./components/IntroSection/IntroSection.jsx";
function App() {

  return (
    <>
      <Header />
      <NameSection />
      <IntroSection />
      <TeamSection />
      <Footer />
    </>
  )
}

export default App
