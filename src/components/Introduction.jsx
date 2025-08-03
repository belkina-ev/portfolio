import React from "react";

const Introduction = ({ partnershipUrl, telegramUrl }) => {
    const introduction = {
        name: "Елена Белкина",
            occupation: "Партнер @ VIBE",
            description:
        "Я партнёр компании VIBE и приглашаю к сотрудничеству — в бизнес или на продукт. Если вы хотите зарабатывать или ищете качественные товары, расскажу подробнее и помогу начать.",
            socials: {
                telegramUrl: telegramUrl,
                partnershipUrl: partnershipUrl
            },
    }
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <div className="flex flex-col sm:flex-row items-center w-full">
                    <img
                        alt="avatar"
                        src="../../public/avatar.jpg"
                        className="sm:h-16 sm:w-16 w-24 h-24 rounded-full shadow-lg shadow-background-secondary mb-2 sm:mb-0"
                    />
                    <div className="flex flex-col items-center sm:items-start sm:ml-4 w-full">
                        <div className="text-primary text-3xl">{introduction.name}</div>
                        <div className="text-faint text-sm sm:-mt-[2px]">
                            {introduction.occupation}
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-5 sm:space-x-3 mt-6 sm:mt-2">
                    <button
                        aria-label="Custom Icon Link"
                        onClick={() => window.open(introduction.socials.partnershipUrl, "_blank")}
                        className="cursor-pointer"
                    >
                        <svg
                            className="h-11 w-11 p-1 sm:p-0 sm:h-5 sm:w-5 text-faint hover:text-secondary"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M22.625 2c0 15.834-8.557 30-20.625 30c12.068 0 20.625 14.167 20.625 30c0-15.833 8.557-30 20.625-30c-12.068 0-20.625-14.166-20.625-30"
                                fill="currentColor"
                            />
                            <path
                                d="M47 32c0 7.918-4.277 15-10.313 15C42.723 47 47 54.084 47 62c0-7.916 4.277-15 10.313-15C51.277 47 47 39.918 47 32z"
                                fill="currentColor"
                            />
                            <path
                                d="M51.688 2c0 7.917-4.277 15-10.313 15c6.035 0 10.313 7.084 10.313 15c0-7.916 4.277-15 10.313-15c-6.036 0-10.313-7.083-10.313-15"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    <div className="h-5 sm:h-3.5 w-[1px] bg-gradient-to-b from-zinc-900 to-zinc-900 via-zinc-800"></div>

                    <button
                        aria-label="X Social Media link"
                        onClick={() => window.open(introduction.socials.telegramUrl, "_blank")}
                        className="cursor-pointer"
                    >
                        <svg
                            className="h-11 w-11 p-1 sm:p-0 sm:h-5 sm:w-5 text-faint hover:text-secondary"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div id="aboutSection" className="flex flex-col justify-start w-full mt-16">
                <div className="text-faint text-xs font-extrabold uppercase">О себе</div>
                <div className="text-primary mt-3">{introduction.description}</div>
            </div>
        </div>
    );
};

export default Introduction;
