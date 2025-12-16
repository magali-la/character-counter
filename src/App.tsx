import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./styles/theme";
import CharacterCounter from "./components/CharacterComponent/CharacterCounter";

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{textAlign: 'center'}}>
          <h1>Word Counter</h1>
        </Box>
        <CharacterCounter/>
      </ThemeProvider>
    </>
  )
}

export default App
