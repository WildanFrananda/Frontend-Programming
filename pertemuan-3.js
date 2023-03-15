const names = ["Michael", "Hannah", "Jonas"]

names
    .forEach(function(name) {
        console.log(`Name: ${name}`)
    })

const formattingName = names.map(function(name) {
        return `Mr/Mrs. ${name}`
    })

console.log(formattingName)