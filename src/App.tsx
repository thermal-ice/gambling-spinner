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
    const [chancesList, setChancesList] = useState<number[]>([])

    useEffect(() => {
        setChancesList(Array(numBoxes).fill(undefined))
    }, [numBoxes])

    const dataList: WheelData[] = chancesList
        .map((currChance, currIndex) => ({
            option: currIndex.toString(),
            optionSize: currChance,
            style: {backgroundColor: BACKGROUND_COLOURS[currIndex]}
        }))

    return (
        <ThemeProvider theme={BALANCED_DARK_THEME}>
            <CssBaseline/>
            <div>
                <div className="spacing">
                    <label htmlFor="numPlayers">Number of players</label>
                    <DropDown numBoxes={numBoxes} setNumBoxes={setNumBoxes}/>
                </div>
                {chancesList.length >= 1 && (
                    <div>
                        <div>
                            <SpinnerInputFields chancesList={chancesList}
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

export default App
