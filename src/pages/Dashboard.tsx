import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import ConfigEditor from "../components/ConfigComponents/ConfigEditor";

function Dashboard() {
    const [selectedGuild, setSelectedGuild] = useState<string | null>(null);
    const [selectedBot, setSelectedBot] = useState<string | null>(null);

    return (
        <div className="dashboard">
            <Sidebar onGuildClick={setSelectedGuild} />
            <Navbar selectedGuild={selectedGuild} onBotClick={setSelectedBot} />

            <div className="content">
                <ConfigEditor selectedGuild={selectedGuild} selectedBot={selectedBot} />
            </div>
        </div>
    )
}

export default Dashboard;