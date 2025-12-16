import { Box, Grid } from "@mui/material";
import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({ showReadingTime }: StatsDisplayProps) {

    return (
        <Box sx={{border: '2px red[600]'}}>
            <Grid container sx={{border: '2px solid gray', borderRadius: '6px'}}>
                {/* character count */}
                <Grid size={4} sx={{padding: '1rem', borderRight: '2px solid black'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}} aria-label="Character count section">
                        <p>Char Count</p>
                        <p>NUMBER</p>
                    </Box>
                </Grid>
                {/* word count */}
                <Grid size={4} sx={{padding: '1rem', borderRight: '2px solid black'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}} aria-label="Word count section">
                        <p>Word Count</p>
                        <p>NUMBER</p>
                        <p>Min: 25 | Max: 100</p>
                    </Box>
                </Grid>
                {/* reading time */}
                <Grid size={4} sx={{padding: '1rem'}} aria-label="Reading time section">
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}}>
                        <p>Reading Time</p>
                        {showReadingTime && (
                            <p>NUMBER</p>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}