import * as React from "react";
import "./SpinnerInputFields.css"
import {Box, Stack, TextField, Typography} from "@mui/material";

interface SpinnerInputFieldsProps {
    chancesList: number[],
    updateChancesList: React.Dispatch<React.SetStateAction<number[]>>;
}

const SpinnerInputFields = ({chancesList, updateChancesList}: SpinnerInputFieldsProps) => {


    const handleChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            const newValues = [...chancesList];
            newValues[index] = Number(newValue);
            updateChancesList(newValues);
        }
    };

    return (
        <div className="container">

            <Box>
                {chancesList.map((value, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={2} mb={0.5}>
                        <Typography variant="body1">{`Player ${index + 1}:`}</Typography>
                        <TextField
                            value={value}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Number of chips"
                            variant="outlined"
                            sx={{width: 150}}
                        />
                    </Stack>
                ))}
            </Box>
        </div>


    );
}

export default SpinnerInputFields;