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
    variant?: "contained" | "outlined" | "text"
  }
  
  export const ButtonComponent = (props: ButtonComponentProps) => {
    const { startIcon, onClick, text, children, background, key, variant = "contained" } = props;
  
    return (
      <StyledButton
      key={key}
        style={{
          background: background
        }}
        variant={variant}
        startIcon={startIcon}
        onClick={() => onClick && onClick()}
      >
        {children}
        <b>{text}</b>
      </StyledButton>
    );
  };