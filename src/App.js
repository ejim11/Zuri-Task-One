import "./App.scss";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import ProfileAndLinks from "./Components/ProfileAndLinks/ProfileAndLinks";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ProfileAndLinks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
