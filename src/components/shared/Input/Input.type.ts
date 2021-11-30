export interface StyledInput {
    readonly padding?: string;
}

export interface Input extends React.InputHTMLAttributes<HTMLInputElement>, StyledInput {}
