import './App.css'
import Header from './components/header/Header'
import BestSeller from './section/BestSeller'
import CustomersReviews from './section/CustomersReviews'
import Home from './section/Home'
import Univers from './section/Univers'
import Values from './section/Values'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Univers />
      <Values />
      <BestSeller />
      <CustomersReviews />
    </>
  )
}

export default App
