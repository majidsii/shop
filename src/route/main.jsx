
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appp from "./App.jsx"
import BuyerForm from "./pages/BuyerForm.jsx";
import NoPage from "./pages/NoPage.jsx"
import '../route/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appp />}>
          <Route index element={<Appp />} />
        </Route>
        <Route path="buyform" element={<BuyerForm />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);