import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Home />
      <ScrollToTop />
      <SpeedInsights />
    </>
  );
}

export default App;
