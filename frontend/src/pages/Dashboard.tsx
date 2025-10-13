import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <>
            <div>
                <h1>Dashboard</h1>
                <button type={"button"} onClick={handleLogOut}>Log Out</button>
            </div>
        </>
    );
}