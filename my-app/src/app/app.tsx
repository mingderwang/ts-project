// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../styles.css'
import GoogleAuthCallback from './GoogleAuthCallback'
import Home from './Home'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/auth/callback/google"
      element={<GoogleAuthCallback />} 
      />
      <Route path="/"
      element={<Home />}  
      />
      </Routes>
    </Router>
  )
}

export default App