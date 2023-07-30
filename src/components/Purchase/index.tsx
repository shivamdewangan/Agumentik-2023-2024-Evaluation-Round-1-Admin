import cardImage1 from '../../assets/purchase-card-1.png';
import cardImage2 from '../../assets/purchase-card-2.png';
import cardImage3 from '../../assets/purchase-card-3.png';
import arrowGray from '../../assets/purchase-arrow-gray.png';
import arrowOrange from '../../assets/purchase-arrow-orange.png';

function Purchase() {
    return (
        <section className="flex flex-col items-center pt-10 gap-10">
            <h1 className="banner-h1 w-full font-black text-4xl md:text-7xl text-center">Purchase the light</h1>
            <div className="w-full flex flex-1 flex-nowrap gap-10 justify-center flex-col md:flex-row">
                <Card image={cardImage1} title="Keorge NFT" price={0.49} />
                <Card image={cardImage2} title="George NFT" price={0.69} selected />
                <Card image={cardImage3} title="Leorge NFT" price={0.89} />
            </div>
        </section>
    );
}

export default Purchase;

export interface CardProps {
    image: string;
    title: string;
    price: number;
    selected?: boolean;
}

function Card({ image, title, price, selected }: CardProps) {
    return (
        <div className="flex-1 border border-gray-400 max-w-sm flex flex-col data-[selected]:bg-[#303831] data-[selected]:text-white" data-selected={selected}>
            <div className="flex flex-col px-10 flex-1 justify-center gap-5 py-5">
                <h2 className="font-bold text-2xl text-left">{title}</h2>
                <h3 className="font-bold text-lg text-[#666b66] flex items-center flex-nowrap gap-4 data-[selected]:text-[#d75e35]" data-selected={selected}>
                    <svg stroke="currentColor" className="rotate-180 scale-150" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                    <span>{price} Starting Price</span>
                </h3>
                <div className="flex flex-nowrap items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#666b66] data-[selected]:border-[#d75e35]" data-selected={selected}>
                        <img src={selected ? arrowOrange : arrowGray} alt="View on Opensea" />
                    </div>
                    <span className="text-lg font-bold">View on Opensea</span>
                </div>
            </div>
            <img src={image} alt={title} />
        </div>
    );
}