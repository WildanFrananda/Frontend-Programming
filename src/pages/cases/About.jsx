import React from "react"
import { CodeBlock, dracula } from "react-code-blocks"

const code = `
const Developer = {
    name: "Wildan Frananda",
    age: 23,
    major: "Computer Science",
    skill: {
        Programming Language: ["JavaScript", "PHP", "Python", "C++", "Dart", "Java", "TypeScript"],
        Framework: ["React", "Nextjs", "Vue", "Laravel"]
    }
}
`

function About() {
    return (
        <div>
            <CodeBlock
                text={code}
                language={'javascript'}
                showLineNumbers={true}
                theme={dracula}
            />
        </div>
    )
}

export default About
