import {Helmet, HelmetProvider} from "react-helmet-async"
import HomePage from "./components/homepage/homepage"

function App() {
  return (
    <>
      <HelmetProvider>
      <Helmet>
        <meta name="description" content="Home Page Centro Estetico Un'ora per te"/>
      </Helmet>
      </HelmetProvider>
      <HomePage />
    </>
  )
}

export default App
