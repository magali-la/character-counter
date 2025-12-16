import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { useState } from "react"
import TextInput from "./components/TextInput/TextInput"
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";
import { theme } from "./styles/theme";

function App() {
  const [value, setValue] = useState<string>('');

  // function to set value
  function handleInputChange(userInput: string) {
    setValue(userInput);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{textAlign: 'center'}}>
          <h1>Word Counter</h1>
        </Box>
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
      </ThemeProvider>
    </>
  )
}

export default App
