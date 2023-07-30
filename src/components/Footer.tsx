import logoFooter from '../assets/footer-logo.png';


function Footer() {
    return (
        <footer className="p-10 md:p-20 flex flex-wrap items-center justify-evenly gap-10 bg-[#17161b] text-white">
            <div className="flex-1 min-w-[200px]">
                <div className="flex flex-nowrap gap-5 items-center">
                    <img src={logoFooter} alt="NFT Studios" className="w-10" />
                    <h2 className="text-2xl font-black">NFT Studios</h2>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-5 min-w-[200px]">
                <div className="text-xl mb-5 font-bold">Menu Items</div>
                <a href="#" className="font-semibold text-white">About</a>
                <a href="#" className="font-semibold text-white">NFTs</a>
                <a href="#" className="font-semibold text-white">What We Do</a>
            </div>
            <div className="flex-1 flex flex-col gap-5 self-start min-w-[200px]">
                <div className="text-xl mb-5 font-bold">Other pages</div>
                <a href="#" className="font-semibold text-white">Terms & conditions</a>
                <a href="#" className="font-semibold text-white">Privacy policy</a>
            </div>
            <div className="flex-1 min-w-[200px]">
                <div className="font-bold text-lg">Copyright NFT Studios All Rights Reserved <span className="text-[#d95d37]">2023</span></div>
            </div>
        </footer>
    );
}

export default Footer;
