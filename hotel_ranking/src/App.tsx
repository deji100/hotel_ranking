import './App.css';
import Home from "./pages/home";
import CreatePage from "./pages/create";
import EditPage from "./pages/edit";
import Layout from "./components/organisms/layout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create-hotel" element={<CreatePage />} />
          <Route path="/edit-hotel/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
