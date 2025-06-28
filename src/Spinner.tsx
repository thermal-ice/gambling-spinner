import  { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import {WheelData} from "react-custom-roulette/dist/components/Wheel/types";

interface SpinnerArgs {
    wheelDataList: WheelData[];
}
const Spinner = ({wheelDataList}: SpinnerArgs) => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [currentWinnerIndex, setCurrentWinnerIndexDisplay] = useState(-1)

    const filteredWheelDataList = wheelDataList.map( wheelData => wheelData.optionSize === undefined? 0 : wheelData.optionSize)


    // change not filled values to be 1 instead of 0.
    const chancesList = filteredWheelDataList.map(currChance => currChance === 0 ? 1 : currChance)

    const numEntriesTotal = getNumberOfEntries(chancesList)


    const handleSpinClick = () => {
        if (!mustSpin) {
            const winningNum = getRandomNumberInRange(numEntriesTotal)
            const winningIndex =  getIndexOfWinningNumber(winningNum, chancesList)

            setPrizeNumber(winningIndex !== -1? winningIndex : prizeNumber);
            setMustSpin(true);
        }
    }

    return (
        <>
            <div>
                {currentWinnerIndex === -1 ? <p><strong>Spin for a winner</strong></p> : <p>Current winner is: <strong>{wheelDataList[currentWinnerIndex].option}</strong> </p>}
            </div>

            <p>Total number of entries is: {getNumberOfEntries(filteredWheelDataList)}</p>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={wheelDataList}
                radiusLineWidth={0}
                outerBorderWidth={3}

                onStopSpinning={() => {
                    setMustSpin(false);
                    setCurrentWinnerIndexDisplay(prizeNumber)
                }}

            />
            <button onClick={handleSpinClick}>SPIN</button>

            <div>

            </div>
        </>
    )
}

// gets number from 1 to maxNumInclusive
const getRandomNumberInRange = (maxNumInclusive: number) =>{
    return Math.floor(Math.random() * maxNumInclusive) + 1
}

const getIndexOfWinningNumber = (winningNum: number, chancesList: number[])=> {
    let currSum = 0
    for (let i=0;i<chancesList.length;i++) {
        currSum += chancesList[i]
        if (winningNum <= currSum) {
            return i
        }

    }

    return -1
}

const getNumberOfEntries = (entriesArr: number[]) =>{
    return entriesArr.reduce((sum: number, num:number) => sum + num, 0)
}

export default Spinner;