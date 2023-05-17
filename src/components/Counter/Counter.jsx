import { useEffect, useState } from "react"

function Counter() {
    const [result, setResult] = useState(0)

    function handleClick() {
        setResult(result + 1)
    }

    function manipulateDOM() {
        console.log("Lifecycle: Component mounted")

        // Changes document title every changes on state
        document.title = `Result: ${result}`
    }

    useEffect(manipulateDOM, [result])

    console.log("Lifecycle: Component Rendered")

    return (
            <div>
                <p>Result: {result} </p>
                <button onClick={handleClick}>Add</button>
            </div>
    )
}

export default Counter