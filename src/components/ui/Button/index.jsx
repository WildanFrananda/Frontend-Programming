// Import styled
import styled, {css} from "styled-components"

const Button = styled.button`
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

    // Access variant props
    background-color: ${({variant, theme}) => theme.colors[variant] || theme.colors.primary};

    // Access full props
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}

    // Access size props
    font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize["md"]};
    padding: ${({ size, theme }) => theme.padding[size || theme.padding["md"]]};
`

export default Button