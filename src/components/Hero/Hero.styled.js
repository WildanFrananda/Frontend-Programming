import styled from "styled-components"

const StyledHero = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
    }

    .hero__left {
        flex-basis: 50%;
    }

    h1 {
        color: #118AB2;
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #06D6A0;
    }

    p {
        font-size: 1rem;
        margin-bottom: 2rem;
        color: #fff;
    }

    button {
        background-color: #118AB2;
        color: #fff;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
    }

    .hero__right {
        flex-basis: 50%;
        display: flex;
        justify-content: center;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`

export default StyledHero