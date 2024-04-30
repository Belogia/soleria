import { Button } from "reactstrap";
import LoginIcon from "../components/LoginIcon";

function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#2f3136" }}>
          <Button
            className="d-flex align-items-center py-2 px-4 rounded transition duration-300"
            href="https://api.belogia.fr/auth/discord"
            style={{
              backgroundColor: "#5865F2",
              color: "white",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(88, 101, 242, 0.8)"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#5865F2"}
          >
            <LoginIcon />
            <span className="text-sm">Sign in with Discord</span>
          </Button>
        </div>
      );
}

export default Login;