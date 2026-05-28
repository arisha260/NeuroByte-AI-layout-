import { useState } from "react";



export function useOurTeam () {

    const [activeIndex, setActiveIndex] = useState(3)

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % 7)
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + 7) % 7)
    }

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