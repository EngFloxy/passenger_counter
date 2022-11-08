let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}


function save(){
  let countStr = count + " - "  
  saveEl.textContent +=  countStr
  countEl.textContent = 0
}



let welcomeEl = document.getElementById("welcome-el")

let name = "Florence"

let greeting = "Welcome back, "

let message = greeting + name

welcomeEl.textContent = message

welcomeEl.textContent = welcomeEl.textContent + "👋"