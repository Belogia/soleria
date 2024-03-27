import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { IUser } from "../types";
import Navbar from "../components/Navbar";

function Dashboard() {
    const [user, setUser] = useState<IUser>({ id: "0", avatar: "0", username: "Loading error", guilds: []});
    const [selectedGuild, setSelectedGuild] = useState<string>("0");

    async function getMe() {
        const response = await axios.get('http://localhost:3000/api/user/me', {});

        setUser(response.data);
    }

    useEffect(() => {
        getMe();
    }, []);

    return (
        <div className="dashboard">
            <Sidebar user={user} onGuildClick={setSelectedGuild} />
            
            <div className="content">
                <Navbar />
                <h1>Dashboard</h1>
                {selectedGuild && <div>{selectedGuild}</div>}
                {/* Add your content here */}
            </div>
        </div>
    )
}

export default Dashboard;