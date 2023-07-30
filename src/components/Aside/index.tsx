import Logo from "../Logo";
import Nav from "./Nav";

function Aside({ out }: { out: () => void }) {
    return (
        <aside className="flex-1 max-w-sm h-screen overflow-auto sticky top-0 bg-[#212029] p-5 text-white flex flex-col">
            <Logo />
            <nav className="flex-1 my-10">
                <Nav>Header</Nav>
                <Nav>Hero Banner</Nav>
                <Nav>About Us</Nav>
                <Nav>Purchase Cards</Nav>
                <Nav>Join Discord</Nav>
                <Nav>Footer</Nav>
            </nav>
            <button className="w-full bg-black" onClick={out}>
                Logout
            </button>
        </aside>
    );
}

export default Aside;
