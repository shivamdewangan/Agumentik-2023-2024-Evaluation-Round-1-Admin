import Aside from "./Aside";

function Main({ out }: { out: () => void }) {
    return (
        <>
            <Aside out={out} />
        </>
    )
}

export default Main;
