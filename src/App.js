import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
const Index = () => <h2>Home</h2>;
function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/" exact component={Index} />
        <Route path="/products" exact component={Products} />
      </div>
    </Router>
  );
}

export default App;
