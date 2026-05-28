import { useCallback, useEffect, useState } from "react";
import type { CSCardData } from "../data/ClientsSatCardsData";


type useClientSliederProps = {
    cardsData: CSCardData[],
    slider: React.RefObject<HTMLDivElement | null>
}


export function useClientSlider({cardsData, slider}: useClientSliederProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0)

    const CARD_WIDTH = 343;
    const CARD_OFFSET = 73;

    // 343 card width + 73 gap left-right
    const SLIDE_STEP = CARD_WIDTH + CARD_OFFSET;

    const visibleCards = Math.max(
        1,
        Math.floor((containerWidth + CARD_OFFSET) / SLIDE_STEP)    // 1224 - cards container width
    )

    const maxIndex = cardsData?.length - visibleCards;  // for adaptive on difference devices
    const translateX = -currentIndex * SLIDE_STEP;

    const goToSlide = useCallback((index: number) => {
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        setCurrentIndex(index);
    }, [maxIndex,]);

    const nextSlide = useCallback(() => {
        console.log(visibleCards, containerWidth)
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide, visibleCards]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);


    useEffect(() => {
        if (!slider.current) return;

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            console.log(entry)
            setContainerWidth(entry.contentRect.width);
        });

        observer.observe(slider.current);

        return () => observer.disconnect();
    }, [slider]);

    return { nextSlide, prevSlide, translateX, currentIndex, maxIndex }
}
