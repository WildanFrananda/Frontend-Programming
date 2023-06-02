// Import styled
import styled, {css} from "styled-components"

const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 0.4rem;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));

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

    &:active {
        scale: 0.92;
    }

    &:hover {
        background: rgb(2,29,78);
        background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
        color: rgb(4, 4, 38);
    }
`

export default Button