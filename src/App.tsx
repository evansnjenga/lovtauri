import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";
import ThemeProvider from "./components/theme-provider";
import Nav from "./components/nav";
import Home from "./pages/home";
import Settings from "./pages/settings";
import { useSettingsStore } from "./stores/settings";

function App() {
  const showTray = useSettingsStore((s) => s.showTray);

  useEffect(() => {
    invoke("set_tray_visible", { visible: showTray });
  }, []);

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
