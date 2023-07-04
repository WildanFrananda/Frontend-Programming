// Import module
import StyledNavbar from "./Navbar.styled"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <StyledNavbar>
            <nav>
                <div>
                    <h1>Covid ID</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Global
                            </Link>
                        </li>
                        <li>
                            <Link to="/cases/indonesia">
                                Indonesia
                            </Link>
                        </li>
                        <li>
                            <Link to="/cases/provinces">
                                Provinces
                            </Link>
                        </li>
                        <li>
                            <Link to="/cases/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar
