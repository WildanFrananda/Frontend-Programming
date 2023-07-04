import styled from "styled-components"

const StyledFooter = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;

    footer {
        background-color:#118AB2;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        width: 100%;
    }

    h1 {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h3 {
        color: #fff;
        font-size: 1rem;
        margin: 0;
    }

    @media (min-width: 768px) {
        .footer {
            flex-direction: column;
        }
    }

    @media (min-width: 992px) {
        .footer {
            flex-direction: row;
        }
    }
`

export default StyledFooter