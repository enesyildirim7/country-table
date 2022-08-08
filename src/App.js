import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import CountryTable from "./components/Table";

function App() {
  return (
    <div className="d-flex w-100 h-100 justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center w-75">
        <CountryTable />
      </div>
    </div>
  );
}

export default App;
