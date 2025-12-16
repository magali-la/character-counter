import { useState } from "react";
import { Box } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";

export default function CharacterCounter() {
    const [value, setValue] = useState<string>('');

    // function to set value
    function handleInputChange(userInput: string) {
    setValue(userInput);
    }
    
    return (
        <>
            {/* Text Field */}
            <Box sx={{ mx: 'auto', width:'60vw'}}>
            <TextInput
                initialValue={value}
                onTextChange={handleInputChange}
                placeholder="Start writing about anything"
            />
            </Box>
            {/* stats display section */}
            <Box sx={{ width: '60vw', mx: 'auto', my: '2rem'}}>
            <StatsDisplay
                showReadingTime={true}
            />
            </Box>
        </>
    )
}