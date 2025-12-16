import { Box, Grid } from "@mui/material";
import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({stats: {characterCount, wordCount, readingTime}, showReadingTime }: StatsDisplayProps) {
    // set style for min and max word
    const wordCountStyle = wordCount < 25 || wordCount > 500 ? 'red' : 'green'

    return (
        <Box sx={{border: '2px red[600]'}}>
            <Grid container sx={{border: '2px solid gray', borderRadius: '6px'}}>
                {/* character count */}
                <Grid size={4} sx={{padding: '1rem', borderRight: '2px solid black'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}} aria-label="Character count section">
                        <p>Char Count</p>
                        <p>{characterCount}</p>
                    </Box>
                </Grid>
                {/* word count */}
                <Grid size={4} sx={{padding: '1rem', borderRight: '2px solid black'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}} aria-label="Word count section">
                        <p>Word Count</p>
                        <p style={{color: wordCountStyle}}>{wordCount}</p>
                        <p>Min: 25 | Max: 100</p>
                    </Box>
                </Grid>
                {/* reading time */}
                <Grid size={4} sx={{padding: '1rem'}} aria-label="Reading time section">
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}}>
                        <p>Reading Time</p>
                        {showReadingTime && (
                            <p>
                                {readingTime}
                                <span> {readingTime <= 1 ? 'min': 'mins'}</span></p>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}