const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = ["one", "two", "three"]

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    myLeads.forEach(record => ulEl.innerHTML += "<li>" + record + "</li>")
})


