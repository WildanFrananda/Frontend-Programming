import styled from "styled-components"

const StyledHero = styled.div`
    /* Small Screen */
    margin: 1rem;

    
    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }
    
    h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }
    
    h3 {
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p {
        color: #64748b;
        margin-bottom: 2rem;
    }
    
    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
    /*
        * Nothing TODO Here.
        * We dont change style Hero. 
        */
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        .hero__left {
            flex-basis: 40%;
        }
    }
`

export default StyledHero