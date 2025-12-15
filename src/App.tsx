import { CssBaseline, TextField } from "@mui/material"
import { useState } from "react"

function App() {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <CssBaseline />
      <p>Test</p>
      <TextField 
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  )
}

export default App
