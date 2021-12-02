export interface StyledInput {
    readonly padding?: string;
    readonly bgColor?: string;
}

export interface Input extends React.InputHTMLAttributes<HTMLInputElement>, StyledInput {}
