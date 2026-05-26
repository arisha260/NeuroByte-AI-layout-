import { useCallback, useEffect, useState } from "react";
import type { CSCardData } from "../data/ClientsSatCardsData";


type useClientSliederProps = {
    cardsData: CSCardData[],
    slider: React.RefObject<HTMLDivElement | null>
}


export function useClientSlider({cardsData, slider}: useClientSliederProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0)

    const slideWidth = 416;   // 343 card width + 73 gap left-right
    const visibleCards = Math.max(
        1,
        Math.floor(containerWidth / slideWidth)    // 1224 - cards container width
    )

    const maxIndex = cardsData?.length - visibleCards;  // for adaptive on difference devices
    const translateX = -currentIndex * slideWidth;

    const goToSlide = useCallback((index: number) => {
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        setCurrentIndex(index);
    }, [maxIndex,]);

    const nextSlide = useCallback(() => {
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);


    // const updateWidth = useCallback(() => {
    //     if (slider.current) {
    //         setContainerWidth(slider.current.clientWidth);
    //     }
    // }, [slider]);

    // useEffect(() => {
    //     updateWidth();

    //     window.addEventListener('resize', updateWidth);

    //     return () => {
    //         window.removeEventListener('resize', updateWidth);
    //     }
    // }, [updateWidth])

    return { nextSlide, prevSlide, translateX, currentIndex, maxIndex }
}
