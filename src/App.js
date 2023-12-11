import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Authentication/Authentication";
import DashBoard from "./Dashboard/Dashboard";
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
