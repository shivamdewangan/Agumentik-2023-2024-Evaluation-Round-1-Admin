import "./App.css";

import { useSessionStorage } from "react-unique-hooks";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
    const [auth, setAuth, logout] = useSessionStorage<string>("x-access-token", "");
    return (
        <section className="bg-[#cbd6cc]">
            {auth ? <Main out={logout} /> : <Login set={setAuth} />}
        </section>
    );
}

export default App;
