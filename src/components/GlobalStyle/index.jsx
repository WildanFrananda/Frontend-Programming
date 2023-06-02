import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body.dark-mode {
    background-color: #111;
    color: #eee;
    }

    body.dark-mode a {
        color: #111;
    }

    body.dark-mode button {
        background-color: #eee;
        color: #111;
    }

    body.light-mode {
        background-color: #eee;
        color: #111;
    }

    body.light-mode a {
        color: #111;
    }

    body.light-mode button {
        background-color: #111;
        color: #eee;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    a {
        text-decoration: none;
    }
`
export default GlobalStyle