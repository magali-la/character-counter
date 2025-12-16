// create a type interface for props for textInput
export interface TextInputProps {
    // prop for controlled component, update state for input text
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}

// create an interface for the text stats
export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number;
}

// create an interface for the props for stats display
export interface StatsDisplayProps {
    // reference interface to define stats object
    stats?: TextStats;
    showReadingTime?: boolean;
}