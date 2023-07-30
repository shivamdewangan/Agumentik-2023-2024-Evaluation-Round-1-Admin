import heroBanner from '../../assets/banner-hero.png';
import payWithBanner from '../../assets/banner-go.png';
import Header from './Header';

function Banner() {
    return (
        <section className="bg-[#cbd6cc] pb-10">
            <Header />
            <div className="w-full flex flex-col md:flex-row-reverse flex-nowrap place-content-center gap-10 mt-10">
                <div className="flex-1 max-w-lg hidden md:block">
                    <img src={heroBanner} alt="Hero Banner" className="w-full h-full" />
                </div>
                <div className="flex-1 flex flex-col justify-center max-w-lg">
                    <h1 className="banner-h1 w-full font-black text-6xl md:text-7xl"><span className="banner-h1-wrinkle relative">Start</span> the<br /><span className="text-[#d95d37]">game</span> with<br />your <span className="banner-h1-scribble relative">NFT</span></h1>
                    <div className="flex-1 max-w-[200px] mx-auto block md:hidden my-5">
                        <img src={heroBanner} alt="Hero Banner" className="w-full h-full" />
                    </div>
                    <blockquote className="text-base md:text-lg font-semibold text-[#666b66] my-5 md:my-10">Earn automatic staking rewards before the Arena launch. Earn passive royalties from every battle transaction after the Arena launch.</blockquote>
                    <div className="flex flex-nowrap gap-6 items-center">
                        <img src={payWithBanner} alt="Pay with BNB" className="w-16" />
                        <h2 className="text-2xl font-black">Pay with BNB</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
