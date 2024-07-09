import RootLayout from './pages/RootLayout';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import BlogView from './pages/blogview/BlogView';
import Products from './pages/products/Products';
import About from './pages/about/About';
function App() {
  return (
      <Routes >
        {/* public routes  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/blogs/:slug" element={<BlogView/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
  )
}

export default App
