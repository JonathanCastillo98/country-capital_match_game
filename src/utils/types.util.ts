export interface IData {
    [key: string]: string;
}

export type TUseVerifyButtonsReturn = {
    win: boolean;
    lose: boolean;
    handleClick: (value: string) => void;
    matchedButtons: string[];
    clickedButtons: string[];
    errorsAmount: number;
    errors: string[];
};

export type TUseShuffleArrayReturn = {
    shuffled: string[];
};