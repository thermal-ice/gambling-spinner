import * as React from "react";
import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface DropDownProps {
    numBoxes: number;
    setNumBoxes: React.Dispatch<React.SetStateAction<number>>;
}

const DropDown = ({ numBoxes, setNumBoxes }: DropDownProps) => {

    const handleSelectChange = (event: SelectChangeEvent<number> ) => {
        setNumBoxes(Number(event.target.value));
    };

    return (
        <div>
            <FormControl sx={{ width: 100, marginTop: '8px' }}>
                <Select
                    labelId="num-boxes-label"
                    id="num-boxes-select"
                    value={numBoxes}
                    onChange={handleSelectChange}
                >
                    {[...Array(10).keys()].map(i => (
                        <MenuItem key={i} value={i + 1}>
                            {i + 1}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default DropDown;