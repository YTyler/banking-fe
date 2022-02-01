import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import NoMatch from "./screens/NoMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" >
            <Route index element={<HomePage logging = {log} userObject = {userObj}/>}/>
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
