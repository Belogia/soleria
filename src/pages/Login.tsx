import LoginIcon from "../components/LoginIcon";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <a href="http://localhost:3000/auth/discord/login">
                <LoginIcon />
            </a>
        </div>
    );
}

export default Login;