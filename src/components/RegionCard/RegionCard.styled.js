import styled from "styled-components"

const StyledRegionCard = styled.div`
    .card {
        width: 300px;
        background: #07182E;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin-left: 15px;
        place-content: center;
        place-items: center;
        overflow: hidden;
        border-radius: 20px;
    }

    .card h3 {
        z-index: 1;
        color: white;
        font-size: 2em;
    }

    .region__left {
        
    }

    .card__value {
        font-size: 1rem;
        margin-top: auto;
        text-align: center;
        word-wrap: break-word;
    }
`

export default StyledRegionCard