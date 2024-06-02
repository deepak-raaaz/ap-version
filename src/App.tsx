import RootLayout from './pages/RootLayout';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
function App() {
  return (
      <Routes >
        {/* public routes  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/events" element={<EventIndex/>} /> */}
          {/* <Route path="/events/:id" element={<EventDetails/>} /> */}
        </Route>
      </Routes>
  )
}

export default App
