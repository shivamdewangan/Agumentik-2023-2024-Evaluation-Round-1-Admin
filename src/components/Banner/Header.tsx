import logoHeader from '../../assets/header-logo.png';

function Header() {
    return (
        <header className="w-full flex items-center gap-2 md:gap-20 py-5 px-0 md:p-10">
            <div className="flex flex-nowrap gap-5 items-center mr-auto">
                <img src={logoHeader} alt="NFT Studios" className="w-10" />
                <h2 className="text-2xl font-black hidden md:block">NFT Studios</h2>
            </div>
            <div className="hidden md:flex items-center gap-10">
                <NavLink text="Home" href="#" />
                <NavLink text="About us" href="#" />
                <NavLink text="NFTs" href="#" />
                <NavLink text="Discord" href="#" />
            </div>
            <a href="#" className="px-8 py-3 text-sm md:text-base md:px-10 md:py-4 text-white bg-black rounded-xl font-bold transition-all">Start game</a>
        </header>
    );
}

export default Header;

export interface NavLinkProps {
    href: string;
    text: string;
}

function NavLink({ href, text }: NavLinkProps) {
    const active: boolean = window.location.pathname === href;
    return (
        <a href={href} className="text-[#666b66] data-[active=true]:text-black font-bold text-lg transition-all" data-active={active}>{text}</a>
    );
}
