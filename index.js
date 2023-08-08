const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = ["www.awesomeleads.com", "www.awesomeleads2.com", "www.awesomeleads3.com"]

function renderLeads() {
    let listItems = ""
    myLeads.forEach(lead => listItems += `
                                        <li>
                                            <a target='_blank' href='//${lead}'>
                                                ${lead}
                                            </a>
                                        </li>
                                        `
    )
    ulEl.innerHTML = listItems
}

renderLeads()

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    const li = document.createElement("li")
    li.textContent = inputEl.value
    ulEl.append(li)
    inputEl.value = ""
})


