import { TextField } from "@mui/material"
import type {TextInputProps } from "../../types"

export default function TextInput({ initialValue, placeholder, onTextChange}: TextInputProps) {

    return (
        <TextField
            value={initialValue}
            onChange={(event) => onTextChange(event.target.value)}
            multiline={true}
            minRows={8}
            maxRows={10}
            fullWidth
            placeholder={placeholder}
        />
    )
}