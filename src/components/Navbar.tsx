import { useCallback, useEffect, useState } from "react";
import { INavbarProps } from "../types";
import axios from "axios";
import "../styles/navbar.css";

function Navbar({ selectedGuild, onBotClick }: Readonly<INavbarProps>) {
    const [bots, setBots] = useState([]);

    const getBots = useCallback(async () => {
        const response = await axios.get(`http://localhost:3000/api/guild/${selectedGuild}/bots`, {
            withCredentials: true,
        });
    
        setBots(response.data.bots);
    }, [selectedGuild]);
    
    useEffect(() => {
        if (selectedGuild !== null)
            getBots();
    }, [selectedGuild, getBots]);

    return (
        <div className="navbar">
            <ul className="nav-links">
                {
                    bots.map((bot: { id: string, name: string }) => (
                        <li key={bot.id} className="nav-link">
                            <button className="nav-button" onClick={() => onBotClick(bot.id)}>
                                {bot.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Navbar;