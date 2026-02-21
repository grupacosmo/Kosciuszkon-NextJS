'use client';

import { type ReactElement } from 'react';
import styles from './PhotoSlider.module.scss';
import { useState, useEffect } from 'react';
import { SliderDot } from "@/app/utils/Slider/SliderDot";
import clsx from 'clsx';
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { HexagonButton } from "@/app/utils/HexagonButton/HexagonButton";

export type PhotoSliderContent = {
    slider: {
        images: string[];
        hexButton: {
            label: string;
            href: string;
            alt: string;
        };
    };
    sliderDots: {
        ariaLabel: string;
    };
    sliderButtons: {
        prev: string;
        next: string;
    };
};

type PhotoSliderProps = {
    content: PhotoSliderContent;
};

export function PhotoSlider({ content }: PhotoSliderProps): ReactElement {
    const [imageIndex, setImageIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    const { slider, sliderDots, sliderButtons } = content;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isInteracting) {
            timeout = setTimeout(() => setIsInteracting(false), 30000);
        }

        return () => clearTimeout(timeout);
    }, [isInteracting]);

    useEffect(() => {
        if (isInteracting) return;

        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % slider.images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isInteracting, slider.images.length]);

    function prevSlide() {
        setIsInteracting(true);
        setImageIndex((prev) => (prev - 1 + slider.images.length) % slider.images.length);
    }

    function nextSlide() {
        setIsInteracting(true);
        setImageIndex((prev) => (prev + 1) % slider.images.length);
    }

    return (
        <>
            <div className={styles.sliderContainer}>
                <div className={styles.imageWrapper}>
                    {slider.images.map((url, idx) => (
                        <img
                            key={idx}
                            src={url}
                            className={styles.sliderImage}
                            style={{ translate: `${-100 * imageIndex}%` }}
                            alt={`Slide ${idx + 1}`}
                        />
                    ))}

                    <button className={clsx(styles.imgSliderButton, styles.left)} onClick={prevSlide}>
                        <BiCaretLeft aria-label={sliderButtons.prev} />
                    </button>

                    <button className={clsx(styles.imgSliderButton, styles.right)} onClick={nextSlide}>
                        <BiCaretRight aria-label={sliderButtons.next} />
                    </button>

                    <div className={styles.sliderDots}>
                        {slider.images.map((_, index) => (
                            <SliderDot
                                key={index}
                                index={index}
                                isActive={index === imageIndex}
                                onClick={() => setImageIndex(index)}
                                ariaLabel={`${sliderDots.ariaLabel} ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.hexButtonWrapper}>
                <HexagonButton
                    href={slider.hexButton.href}
                    className={styles.hexagonButton}
                    label={slider.hexButton.label}
                    alt={slider.hexButton.alt}
                />
            </div>
        </>
    );
}
