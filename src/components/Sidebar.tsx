import { useEffect, useState } from "react";
import { ISidebarProps, IUser } from "../types";
import axios from "axios";
import "../styles/sidebar.css";

function Sidebar({ onGuildClick }: Readonly<ISidebarProps>) {
    const [user, setUser] = useState<IUser>({ id: "0", avatar: "0", username: "Loading error", guilds: []});

    async function getUser() {
        const response = await axios.get('http://localhost:3000/api/user/me', {
            withCredentials: true,
        });

        setUser(response.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="sidebar">
            <div className="user-info">
                <img
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`} alt="Avatar" className="avatar"
                />
                <h3 className="username">{user.username}</h3>
            </div>

            <ul className="nav-links">
                {user.guilds.map((guild) => (
                    <li key={guild.id}>
                        <button onClick={() => onGuildClick(guild.id)}>
                            {guild.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;