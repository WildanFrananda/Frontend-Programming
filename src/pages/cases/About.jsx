import React, { Component } from "react"
import { CodeBlock, pojoaque } from "react-code-blocks"

class About extends Component {
    render() {
        const java = 
`public interface Developer extends Life {
    String name;
    int age;
    String major;
    Skill skill;
}

public class Skill {
    String[] programmingLanguage;
    String[] framework;
}

public class Main {
    public static void main(String[] args) {
        Developer developer = new Developer();
        developer.name = "Wildan Frananda";
        developer.age = 23;
        developer.major = "Computer Science";
        
        Skill skill = new Skill();
        skill.programmingLanguage = new String[]{"JavaScript", "PHP", "Python", "C++", "Dart", "Java", "TypeScript"};
        skill.framework = new String[]{"React", "Express", "Nextjs", "Vue", "Laravel"};
        
        developer.skill = skill;
        
        System.out.println("Name: " + developer.name);
        System.out.println("Age: " + developer.age + " years old");
        System.out.println("Major: " + developer.major);
        System.out.println("Fullstack Developer");

        System.exit(0);
    }
}`

        return (
            <div>
                <CodeBlock
                    text={java}
                    language={"java"}
                    showLineNumbers={true}
                    theme={pojoaque}
                />
            </div>
        )
    }
}

export default About
