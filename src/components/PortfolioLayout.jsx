import React from "react";
import Introduction from "./Introduction.jsx";
import ProductsTags from "./ProductsTags.jsx";
import Button from "./Button.jsx";
import Gallery from "./Gallery.jsx";

const PortfolioData = {
    partnershipUrl: "https://shop.for-vibe.ru/registration/0196ee60-dbb7-7392-a7ef-4ade41a516da",
    telegramUrl: "https://t.me/lbeluchi",
};

const PortfolioLayout = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-background flex flex-col justify-between items-center relative">
            <div className="w-full max-w-[680px] flex flex-col gap-12 my-24 lg:px-0 px-5 mb-[100px] sm:mb-[200px]">
                <Introduction partnershipUrl={PortfolioData.partnershipUrl} telegramUrl={PortfolioData.telegramUrl} />
                <Button url={PortfolioData.partnershipUrl}>Начать с VIBE</Button>
                <ProductsTags />
                <Gallery />
                <Button url={PortfolioData.telegramUrl}>Связаться с наставником</Button>
            </div>
            <p
                className="absolute bottom-3 left-1/2 -translate-x-1/2 text-faint text-sm flex items-center"
            >
                © All rights reserved
            </p>
        </div>
    );
};

export default PortfolioLayout;
