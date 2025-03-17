import {useEffect, useState} from 'react'

import './App.css'
import Spinner from "./Spinner.tsx";
import SpinnerInputFields from "./SpinnerInputFields.tsx";
import {WheelData} from "react-custom-roulette/dist/components/Wheel/types";
import BACKGROUND_COLOURS from "./Constants.ts";
import DropDown from "./Dropdown.tsx";

function App() {
    const [numBoxes, setNumBoxes] = useState(1)
    const [chancesList, setChancesList] = useState<number[]>([])

    useEffect(() =>{
        setChancesList(Array(numBoxes).fill(undefined))
    }, [numBoxes])

    const dataList: WheelData[] = chancesList
        .map((currChance, currIndex) =>({
            option: currIndex.toString(),
            optionSize: currChance,
            style: {backgroundColor: BACKGROUND_COLOURS[currIndex]}
    }))

  return (
    <>
        <div className="spacing">
            <label htmlFor="numPlayers">Number of players</label>
            <DropDown numBoxes={numBoxes} setNumBoxes={setNumBoxes}/>
        </div>
        {chancesList.length >=1 &&(
            <>
                <div>
                    <SpinnerInputFields chancesList={chancesList} updateChancesList={setChancesList}></SpinnerInputFields>
                </div>

                <div>
                    <Spinner wheelDataList={dataList}/>
                </div>
            </>
            )
        }

    </>
  )
}

export default App
