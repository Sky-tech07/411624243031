console.log("Hi");
function example(){
    console.log("logged")  
}

const input = document.getElementById("input");
const output = document.getElementById("inputField")
input.addEventListener("input", () => {
    output.textContent = input.value
})

const second = document.createElement("p")
second.textContent = "New paragraph"
document.body.appendChild(second)

second.remove()