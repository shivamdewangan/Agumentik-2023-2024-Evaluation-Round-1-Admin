import appLogo from '../assets/header-logo.png';
function Logo() {
    return (
        <div className="flex flex-nowrap gap-5 items-center">
            <img src={appLogo} alt="NFT Studios" className="w-10 rounded" />
            <h2 className="text-2xl font-black">NFT Studios Admin</h2>
        </div>
    )
}

export default Logo;
