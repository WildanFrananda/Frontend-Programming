import StyledContainer from "./Container.styled"

function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container