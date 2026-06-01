import { useCallback, useEffect, useRef, useState } from "react";

type ourTeamProps = {
    swiperRef: React.RefObject<HTMLDivElement | null>
}

export function useOurTeam ({swiperRef}: ourTeamProps) {

    const [activeIndex, setActiveIndex] = useState(3)

    const xDownRef = useRef<number | null>(null);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % 7);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + 7) % 7);
    }, []);

    const getPosition = (index: number) => {
        let diff = index - activeIndex;

        if (diff > 3) {
            diff -= 7;
        }

        if (diff < -3) {
            diff += 7;
        }

        return diff;
    }

    const xMap: Record<number, number> = {
        0: 0,

        1: 180,
        2: 320,
        3: 420,

        [-1]: -180,
        [-2]: -320,
        [-3]: -420,
    }

    const scaleMap: Record<number, number> = {
        0: 1,
        1: 0.7,
        2: 0.5,
        3: 0.4,
    }

    const zIndexMap: Record<number, number> = {
        0: 10,
        1: 9,
        2: 8,
        3: 7,
    }


    const handleTouchStart = useCallback((event: TouchEvent) => {
        xDownRef.current = event.touches[0].clientX;
    }, [])

    const handleTouchMove = useCallback((event: TouchEvent) => {
            if (xDownRef.current === null) {
                return;
            }

            const currentX = event.touches[0].clientX;

            const delta = xDownRef.current - currentX;

            if (Math.abs(delta) < 50) {
                return;
            }

            if (xDownRef.current > currentX) {
                nextSlide();
            } else {
                prevSlide();
            }

            xDownRef.current = null;
    }, [nextSlide, prevSlide]);


    useEffect(() => {

        if (!swiperRef.current) {
            return;
        }

        const element = swiperRef.current;

        element.addEventListener("touchstart", handleTouchStart);
        element.addEventListener("touchmove", handleTouchMove);

        return () => {
            element.removeEventListener("touchstart", handleTouchStart);
            element.removeEventListener("touchmove", handleTouchMove);
        }
    }, [handleTouchStart, handleTouchMove, swiperRef])


    return {
        activeIndex,
        nextSlide,
        prevSlide,
        getPosition,
        xMap,
        scaleMap,
        zIndexMap,
    }
}