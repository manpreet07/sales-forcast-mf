import { BrowserRouter, Route, Routes } from "react-router-dom";
import SalesForcast from "./components/SalesForcast";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SalesForcast />} />
  </Routes>
);

function App() {
  const isStandalone = import.meta.env.MODE === "development";

  return (
    <>
      {isStandalone ? (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      ) : (
        <AppRoutes />
      )}
    </>
  );
}

export default App;
