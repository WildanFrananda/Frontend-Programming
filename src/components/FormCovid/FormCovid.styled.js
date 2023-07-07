import styled from "styled-components"

const StyledFormCovid = styled.div`
    /* Small Screen */
    margin: 5rem 1rem;
    padding: 1rem;

    section {
        display: flex;
        flex-direction: column;
    }

    .form__left {
        display: none;
    }

    img {
        max-width: 100%;
        border-radius: 25px;
        height: 350px;
        width: auto;
    }

    h1 {
        text-align: center;
        color: #118AB2;
        font-size: 2.44rem;
        margin-bottom: 1rem;
    }

    .form__group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    label {
        margin-bottom: 1rem;
        color: #06D6A0;
    }

    select {
        outline: none;
        padding: 1rem 0.5rem;
        border-radius: 10px;
        border: 1px solid #64748b;
    }

    select:focus {
        border: 1px solid #118AB2;
    }

    input {
        outline: none;
        padding: 1rem 0.5rem;
        border-radius: 10px;
        border: 1px solid #64748b;
    }

    input:focus {
        border: 1px solid #118AB2;
    }

    button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #118AB2;
        color: #fff;
        display: block;
        margin: 0 auto;
        width: 100%;
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 5rem auto;

        section {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .form__left {
            display: block;
            flex-basis: 60%;
        }

        .form__right {
            flex-basis: 40%;
        }
    }
`

export default StyledFormCovid