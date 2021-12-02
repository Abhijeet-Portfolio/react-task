import BasicDetail from "./BasicDetail";
import SalaryDetail from "./SalaryDetail";
import data from "../utilities/data";
import "../assets/css/App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="wrapper">
          <h1>Higher Order Component</h1>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <ul className="emp">
            {data.map((data, key) => (
              <li key={key}>
                {HOC(BasicDetail,data)}
                {HOC(SalaryDetail,data)}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;

const HOC = (WrapperComponent,data) => {
  return <>
    <WrapperComponent data={data}/>
  </>;
};
