import * as React from "react";
import "./SpinnerInputFields.css"
import {Box, Stack, TextField, Typography} from "@mui/material";

const MAX_NAME_LENGTH = 9;

interface SpinnerInputFieldsProps {
    chancesList: number[],
    namesList: string[],
    updateNamesList: React.Dispatch<React.SetStateAction<string[]>>,
    updateChancesList: React.Dispatch<React.SetStateAction<number[]>>;
}

const SpinnerInputFields = ({chancesList, namesList, updateNamesList, updateChancesList}: SpinnerInputFieldsProps) => {

    const handleNamesChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newName = e.target.value;
        if (newName.length <= MAX_NAME_LENGTH){
            const newNames = [...namesList];
            newNames[index] = newName;
            updateNamesList(newNames);
        }
    };

    const handleChancesChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            const newValues = [...chancesList];
            newValues[index] = Number(newValue);
            updateChancesList(newValues);
        }
    };



    return (
        <div className="container">
            <Box display="flex" gap={0.5}>

            <Box mb={4} ml={1}>
                <Typography>Player Names</Typography>
                {namesList.map((name, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={2} mb={0.5}>
                        <TextField
                            value={name}
                            onChange={(e) => handleNamesChange(index, e)}
                            placeholder={`Player ${index}`}
                            variant="outlined"
                            sx={{ maxWidth: 200, minWidth:75 }}
                        />
                    </Stack>
                ))}
            </Box>

            <Box mr={1}>
                <Typography >Chip Counts</Typography>
                {chancesList.map((chips, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={2} mb={0.5}>
                        <TextField
                            value={chips}
                            onChange={(e) => handleChancesChange(index, e)}
                            placeholder="Number of chips"
                            variant="outlined"
                            sx={{ maxWidth: 200, minWidth:75 }}
                        />
                    </Stack>
                ))}
            </Box>
            </Box>
        </div>
    );
}


export default SpinnerInputFields;