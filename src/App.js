import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./screens/NoMatch";
import LoginPage from './screens/LoginPage';
import TestPage from './screens/TestPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage/>}/>
            <Route path="test" element={<TestPage/>}/>
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
