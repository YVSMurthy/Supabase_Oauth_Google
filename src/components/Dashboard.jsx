import { useEffect, useState } from "react";
import { supabase } from "../Auth/Supabase.js";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const sendAccessToken = async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();

            const accessToken = session?.access_token;

            if (error) {
                console.error("Error getting access token: ", error);
            } else {
                const response = await fetch("http://localhost:3001/get-user-role", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                const data = await response.json();
                console.log(data);

                if (data.detail == "ok") {
                    setUserRole(data.body.role);
                }
            }
        }

        const curr_user = JSON.parse(localStorage.getItem("user"));
        if (!curr_user) {
            navigate("/");
        } else {
            setUser(curr_user);
        }

        sendAccessToken();
    }, [navigate]);

    const signout = async () => {
        await supabase.auth.signOut();
        localStorage.clear();
        navigate("/");
    };

    const goToAdminPage = () => {
        if (userRole !== "admin") {
            alert("You are not authorized to access this page.");
            return;
        }
        navigate("/admin");
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            <h1 className="text-3xl text-black font-bold">Good Morning {user?.user_metadata?.full_name || user?.email}</h1>

            <button className="p-3 rounded-xl bg-red-500 hover:cursor-pointer"
            onClick={signout}>
                <h1 className="text-xl text-white">SignOut</h1>
            </button>

            <button className="p-3 rounded-xl bg-red-500 hover:cursor-pointer"
            onClick={goToAdminPage}>
                <h1 className="text-xl text-white">Admin Page</h1>
            </button>
        </div>
    )
}