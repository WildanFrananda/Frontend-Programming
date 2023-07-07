import styled from "styled-components"

const StyledTable = styled.table`
    width: 55%;
    justify-content: center;
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;
    box-shadow: 1px 2px 5px #888888;
    text-align: center;
    table-layout: fixed;

    thead {
        background-color: #118AB2;
        color: #fff;
    }

    th {
        border: 1px solid gray;
        text-align: left;
        text-align: center;
        padding: 1rem;
    }

    tbody tr {
        background-color: #07182E;
        color: #f0f0f0;
    }

    tbody tr:hover {
        background-color: #EF476F;
        cursor: pointer;
    }

    td {
        border: 1px solid gray;
        padding: 1rem;
    }

    tfoot {
        background-color: #118AB2;
        font-size: 0.9rem;
    }

    tfoot td {
        padding: 0.8rem;
        text-align: center;
        font-weight: 600;
        color: #5c5c5c;
    } 

    .button-container {
        display: flex;
        justify-content: center;
    }

    button {
        padding: 0.8rem;
        background-color: #118AB2;
        border: none;
        font-size: 0.9rem;
        text-align: center;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
    }
`

export default StyledTable