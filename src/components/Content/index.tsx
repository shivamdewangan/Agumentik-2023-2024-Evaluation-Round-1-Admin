import heroContent from '../../assets/content-hero.png';
import arrowContent from '../../assets/content-arrow.png';

function Content() {
    return (
        <section className="flex flex-col justify-center pb-10 md:pb-0">
            <div className="w-full flex flex-nowrap items-center justify-around gap-10 mt-10">
                <div className="flex-1 flex-col justify-center max-w-md hidden md:flex">
                    <img src={heroContent} alt="Content Hero" className="w-full h-full" />
                </div>
                <div className="flex-1 max-w-2xl">
                    <h1 className="banner-h1 w-full font-black text-4xl md:text-7xl">About Us Our<br />NFT Game</h1>
                    <div className="flex-1 max-w-[200px] mx-auto block md:hidden my-5">
                        <img src={heroContent} alt="Content Hero" className="w-full h-full" />
                    </div>
                    <h2 className="text-2xl font-black my-10">Here's how it works</h2>
                    <blockquote className="text-xl font-semibold text-[#666b66] my-10">Adopt them and rank up in our Discord to participate in writing their story. You're in the spotlight.</blockquote>
                    <div className="flex flex-nowrap gap-6 items-center justify-center md:justify-start">
                        <a href="#" className="items-center w-28 md:w-32 aspect-square rounded-full border border-[#666b66] inline-flex flex-col justify-center gap-1 text-[#666b66]">
                            <span>Read More</span>
                            <img src={arrowContent} alt="Read more" className="w-8" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;
