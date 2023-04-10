import { StyledButton } from '../../styles/Button';

type ButtonComponentProps = {
    onClick?: Function,
    color?: string,
    hoverColor?: string
    size?: number,
    children?: JSX.Element,
    startIcon?: JSX.Element,
    text?: string,
    background?: string,
    key?: number,
    variant?: "contained" | "outlined" | "text",
    disabled?: boolean,
    opacity?: number
  }
  
  export const ButtonComponent = (props: ButtonComponentProps) => {
    const { startIcon, onClick, text, children, background, key, disabled=false,variant = "contained", opacity=1 } = props;
  
    return (
      <StyledButton
      key={key}
        sx={{
          background: background,
          opacity: opacity,
          ':hover': {
            opacity: 1,
          },
        
        }}
        variant={variant}
        startIcon={startIcon}
        onClick={() => onClick && onClick()}
        disabled={disabled}
      >
        {children}
        <b>{text}</b>
      </StyledButton>
    );
  };