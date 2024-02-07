import useShuffleArray from '../../hooks/useShuffleArray';
import useVerifyButtons from '../../hooks/useVerifyButtons';
import { IData, TUseShuffleArrayReturn, TUseVerifyButtonsReturn } from '../../utils/types.util';
import "./MatchGame.css"

interface Props {
    data: string;
}

const MatchGame = ({ data }: Props) => {

    // Manage the data / create arrays
    const parsedData: IData = JSON.parse(data);
    const countriesArr: string[] = Object.keys(parsedData);
    const capitalArr: string[] = Object.values(parsedData);
    const mixArr: string[] = [...countriesArr, ...capitalArr];

    // Hooks
    const { shuffled }: TUseShuffleArrayReturn = useShuffleArray(mixArr);
    const { win, lose, handleClick, matchedButtons, clickedButtons, errorsAmount, errors }: TUseVerifyButtonsReturn = useVerifyButtons(mixArr, parsedData)


    return (
        <>
            {win ? (
                <p className='win'>You won XD</p>
            ) :
                lose ? (
                    <p className='lose'>You lost :/</p>
                ) : (
                    <>
                        <div className='buttonWrapper'>
                            {shuffled.map((value: string, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(value)}
                                    style={{
                                        backgroundColor: matchedButtons.includes(value) ? "green" : clickedButtons.includes(value) ? "blue" : errors.includes(value) ? "red" : "white",
                                        color: matchedButtons.includes(value) ? "white" : clickedButtons.includes(value) ? "white" : errors.includes(value) ? "white" : "black",
                                        borderColor: matchedButtons.includes(value) ? "black" : clickedButtons.includes(value) ? "blue" : errors.includes(value) ? "red" : "black",
                                        cursor: matchedButtons.includes(value) ? "not-allowed" : "pointer",
                                        outline: "none",
                                    }}
                                    disabled={matchedButtons.includes(value)}
                                    className='btn'
                                >
                                    {value}
                                </button>
                            ))}
                        </div>
                        {errorsAmount !== 0 && (
                            <span>Errors: {errorsAmount}</span>
                        )}
                    </>
                )
            }
        </>
    );
}

export default MatchGame;
