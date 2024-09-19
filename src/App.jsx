import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonUsage from "./components/mui-ex";
import CompanyForm from "./components/form";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Company from "./components/Company";
import Companies from "./components/Companies";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <NavBar />
      <CompanyForm />
      {/* <BrowserRouter>
        <Switch>
          <Route path="/add-company">
            <CompanyForm />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/companies">
            <Companies />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </>
  );
}

export default App;
