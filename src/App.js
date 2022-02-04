import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./screens/NoMatch";
import LoginPage from "./screens/LoginPage";
import ManagerPage from "./screens/ManagerPage";
import TestPage from "./screens/TestPage";
import NewCustomer from "./components/NewCustomer";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="manager" element={<ManagerPage />}>
              <Route path="newcustomer" element={<NewCustomer />} />
            </Route>
            <Route path="test" element={<TestPage />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
