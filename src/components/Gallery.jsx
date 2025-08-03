import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
    const galleryItems = [
        {
            image: "./product1.jpg",
            text: "Сыворотка Luminskin для лица",
        },
        {
            image: "./product2.jpg",
            text: "Спортивное питание",
        },
        {
            image: "./product3.jpg",
            text: "Сыворотка Blossom+ для питания корней волос",
        },
        {
            image: "/product4.jpg",
            text: "Прочность, эластичность и упругость кожи, костей, сухожилий, хрящей, связок и других тканей",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = () => {
        setCurrentIndex((currentIndex + 1) % galleryItems.length);
    };

    const goPrev = () => {
        setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length);
    };

    const currentItem = galleryItems[currentIndex];

    return (
        <div id="gallerySection" className="flex flex-col justify-start w-full">
            <div className="text-faint text-xs font-extrabold uppercase">Галерея товаров</div>

            <div className="w-full h-[450px] mt-6 rounded-md bg-radial from-background-secondary to-background overflow-hidden relative border border-background-tertiary">
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ y: 4, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 4, opacity: 0 }}
                            transition={{ duration: 0.15, delay: 0.15 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative m-14 mt-8">
                                {currentItem.image ? (
                                    <img
                                        src={currentItem.image}
                                        alt={`Галерея ${currentIndex}`}
                                        className="object-contain max-h-[350px] rounded-md"
                                    />
                                ) : (
                                    <currentItem.component />
                                )}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-faint text-xs text-center font-medium min-w-[300px]">
                                    {currentItem.text}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex space-x-2 absolute bottom-2 left-3 text-faint/70 text-xs">
                    {currentIndex + 1} / {galleryItems.length}
                </div>

                <div className="flex space-x-2 absolute bottom-2 right-2">
                    <button
                        onClick={goPrev}
                        aria-label="Previous"
                        className="w-8 h-8 cursor-pointer bg-background hover:bg-background-secondary/50 text-[#EEEEE4] rounded-full flex items-center justify-center border border-background-tertiary"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                        onClick={goNext}
                        aria-label="Next"
                        className="w-8 h-8 cursor-pointer bg-background hover:bg-background-secondary/50 text-[#EEEEE4] rounded-full flex items-center justify-center border border-background-tertiary"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
