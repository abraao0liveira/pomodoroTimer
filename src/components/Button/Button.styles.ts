import styled, { css } from 'styled-components';

 export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'blue',
    danger: 'red',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 40px;

    ${props => {
        return(
            css`
                background-color: ${ButtonVariants[props.variant]}
            `
        )
    }}
`
