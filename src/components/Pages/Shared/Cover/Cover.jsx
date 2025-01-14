import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (

        <Parallax
            blur={{ min: -100, max: 100 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div
                className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60  max-w-screen-xl mx-auto flex justify-center items-center max-h-72">

                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">
                                {subTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;