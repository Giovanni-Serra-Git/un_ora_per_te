import {Helmet} from "react-helmet"
import HomePage from "./components/homepage/homepage"

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Home Page Centro Estetico Un'ora per te"/>
      </Helmet>
      <HomePage />
    </>
  )
}

export default App
