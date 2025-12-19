import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/theme-provider";
import Nav from "./components/nav";
import Home from "./pages/home";
import Settings from "./pages/settings";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
