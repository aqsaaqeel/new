import {SignIn} from "./pages/SignIn"
import { Dashboard } from "./pages/Dashboard"
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
