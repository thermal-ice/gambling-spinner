import {useEffect, useState} from 'react'
import {CssBaseline, ThemeProvider} from "@mui/material";

import './App.css'
import Spinner from "./Spinner.tsx";
import SpinnerInputFields from "./SpinnerInputFields.tsx";
import {WheelData} from "react-custom-roulette/dist/components/Wheel/types";
import {BACKGROUND_COLOURS, BALANCED_DARK_THEME} from "./Constants.ts";
import DropDown from "./Dropdown.tsx";


function App() {
    const [numBoxes, setNumBoxes] = useState(1)
    const [namesList, setNamesList] = useState<string[]>([])
    const [chancesList, setChancesList] = useState<number[]>([])

    const handleNumBoxesChange = <T, >(prev: T[]): T[] => {
        const diff = numBoxes - prev.length

        if (diff == 0) {
            return prev
        }
        // Increase: keep existing values, append undefines
        if (diff > 0) {
            return [...prev, ...Array(diff).fill(undefined)]
        } else {
            // Decrease: truncate the list
            return prev.slice(0, numBoxes)
        }
    }

    useEffect(() => {
        setChancesList(handleNumBoxesChange)
    }, [numBoxes])

    useEffect(() => {
        setNamesList(handleNumBoxesChange)
    }, [numBoxes])

    const dataList: WheelData[] = chancesList
        .map((currChance, currIndex) => ({
            option: getPlayerName(namesList, currIndex),
            optionSize: currChance,
            style: {backgroundColor: BACKGROUND_COLOURS[currIndex]}
        }))

    return (
        <ThemeProvider theme={BALANCED_DARK_THEME}>
            <CssBaseline/>
            <div>
                <div className="spacing">
                    <label htmlFor="numPlayers" className="label-spacing">Number of players</label>
                    <DropDown numBoxes={numBoxes} setNumBoxes={setNumBoxes}/>
                </div>
                {chancesList.length >= 1 && (
                    <div>
                        <div>
                            <SpinnerInputFields chancesList={chancesList}
                                                namesList={namesList}
                                                updateNamesList={setNamesList}
                                                updateChancesList={setChancesList}></SpinnerInputFields>
                        </div>

                        <div>
                            <Spinner wheelDataList={dataList}/>
                        </div>
                    </div>
                )
                }
            </div>
        </ThemeProvider>
    )
}

const getPlayerName = (namesList: string[], currIndex: number): string => {
    const currVal = namesList[currIndex]
    if (currVal == null || currVal.length == 0) {
        return `Player ${currIndex}`
    }
    return currVal
}


export default App
