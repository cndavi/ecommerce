import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style/global-style'
import { Navbar } from './components/content/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Store } from './pages/Store/Store'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
