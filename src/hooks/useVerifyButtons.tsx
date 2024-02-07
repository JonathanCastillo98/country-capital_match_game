import { useEffect, useState } from "react";
import { IData } from "../utils/types.util";

// This hook is to manage the logic when users click the buttons
const useVerifyButtons = (array: string[], data: IData) => {

    // State Variables
    const [clickedButtons, setClickedButtons] = useState<string[]>([]);
    const [matchedButtons, setMatchedButtons] = useState<string[]>([]);
    const [win, setWin] = useState<boolean>(false);
    const [errorsAmount, setErrorsAmount] = useState<number>(0);
    const [errors, setErrors] = useState<string[]>([]);
    const [lose, setLose] = useState<boolean>(false);

    // UseEffects
    useEffect(() => {
        if (matchedButtons.length === array.length) {
            setWin(true);
        }
    }, [matchedButtons, array]);


    // Handler to add the clicked buttons to the array
    const handleClick = (value: string) => {
        setErrors([]);
        if (clickedButtons.length === 2 || matchedButtons.includes(value)) return;
        setClickedButtons(prevState => [...prevState, value]);
    };

    // Verify if two buttons were already clicked
    if (clickedButtons.length === 2) {
        const [firstButton, secondButton] = clickedButtons;
        const firstIsKey = data.hasOwnProperty(firstButton);
        const firstIsValue = Object.values(data).includes(firstButton);
        const secondIsKey = data.hasOwnProperty(secondButton);
        const secondIsValue = Object.values(data).includes(secondButton);

        let match = false;
        if (firstIsKey && secondIsValue) {
            match = data[firstButton] === secondButton;
        } else if (firstIsValue && secondIsKey) {
            match = data[secondButton] === firstButton;
        }

        // Verify if the buttons match each other
        if (match) {
            setMatchedButtons(prevState => [...prevState, firstButton, secondButton]);
        } else {
            if (errorsAmount === 2) setLose(true)
            setErrors(prevState => [...prevState, firstButton, secondButton]);
            setErrorsAmount(prev => prev + 1);
        }

        setClickedButtons([]);
    }

    return { win, lose, handleClick, matchedButtons, clickedButtons, errorsAmount, errors }
}

export default useVerifyButtons;