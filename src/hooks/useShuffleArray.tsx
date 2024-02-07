import { useEffect, useState } from "react";

// This hook is to randomize the order of the buttons
const useShuffleArray = (array: string[]) => {
    const [shuffled, setShuffled] = useState<any>([]);

    useEffect(() => {
        setShuffled(shuffleArray(array));
    }, []);

    const shuffleArray = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return { shuffled }
}

export default useShuffleArray;