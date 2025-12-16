import { useState } from "react";
import { Box } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import type { TextStats } from "../../types";

export default function CharacterCounter() {
    const [value, setValue] = useState<string>('');

    // function to set value
    function handleInputChange(userInput: string) {
        setValue(userInput);
    }

    // calculate text stats
    const characterCount = value.length;

    // get word count by taking the string and splitting it into an array, remove empty string
    const wordsArr = value.split(" ").filter(word => word !== "");
    const wordCount = wordsArr.length;

    // set a reading time value - set ceiling to round up
    const readingTime = Math.ceil(wordCount / 100);

    const textStats: TextStats = {
        characterCount,
        wordCount,
        readingTime
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
                stats={textStats}
                showReadingTime={true}
            />
            </Box>
        </>
    )
}