import  styled  from "styled-components";

const StyledRegion = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .global__title {
        font-size: 36px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
    }

    .title {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 15px;
        color: #118AB2;
    }

    .subtitle {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 15px;
        color: #06D6A0;
    }

    .region__container {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`

export default StyledRegion