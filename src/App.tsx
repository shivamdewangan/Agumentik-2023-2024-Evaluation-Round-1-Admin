import "./App.css";
import About from "./components/About";
import Banner from './components/Banner';
import Content from "./components/Content";
import Footer from "./components/Footer";
import Purchase from "./components/Purchase";

function App() {
    return (
        <>
            <Banner />
            <Content />
            <Purchase />
            <About />
            <Footer />
        </>
    );
}

export default App;
