import React from "react";

const ProductsTags = () => {
    const tags = [
        { text: "Кератин-шампунь" },
        { text: "Бальзам-маска" },
        { text: "Крем" },
        { text: "Спорт-пит" },
        { text: "Гель 2в1 для мужчин" },
        { text: "Фитнес-гель" },
        { text: "Патчи для глаз" },
        { text: "Загар-молочко" },
        { text: "Детские витамины" },
        { text: "Премиум наборы для дома" },
    ];

    return (
        <div id="productTagsSection" className="flex flex-col justify-start w-full">
            <div className="text-faint text-xs font-extrabold uppercase">Продукты</div>
            <div className="flex flex-wrap mt-4 gap-1.5">
                {tags.map((product, idxx) => (
                    <div
                        key={idxx}
                        className="flex items-center gap-[5px] py-1 px-1.5 text-tertiary font-medium text-xs
                        bg-background-tertiary rounded-md border border-background-secondary"
                    >
                        {product.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsTags;
