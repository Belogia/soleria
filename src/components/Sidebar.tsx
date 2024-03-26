import "../styles/sidebar.css"
import { IUser } from "../types";

interface SidebarProps {
    user: IUser;
    onGuildClick: (guildId: string) => void;
}

function Sidebar({ user, onGuildClick }: Readonly<SidebarProps>) {
    return (
        <div className="sidebar">
            <div className="user-info">
                <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`} alt="Avatar" className="avatar" />
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