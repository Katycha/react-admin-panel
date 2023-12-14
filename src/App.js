import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import DashBoard from "./pages/Dashboard/Dashboard";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <DashBoard />
              </MainLayout>
            }
          />
          <Route path="/sign-in" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
