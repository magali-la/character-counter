// create a type interface for props for textInput
export interface TextInputProps {
    // prop for controlled component, update state for input text
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}