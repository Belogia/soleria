import Cookies from "js-cookie"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./styles/App.css";

function App() {
    const token: string | undefined = Cookies.get("token");

    return token ? <Dashboard /> : <Login />;
}

export default App;