const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const myLeadsFromStorage = localStorage.getItem("myLeads")

let myLeads = myLeadsFromStorage ? JSON.parse(myLeadsFromStorage) : [];

inputBtn.addEventListener("click", function () {
    const inputText = inputEl.value
    myLeads.push(inputText)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    addListItemToHTML(inputText);
})

function addListItemToHTML(inputText) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.textContent = inputText
    a.setAttribute('href', `//${inputText}`)
    a.setAttribute("target", "_blank")
    li.appendChild(a);
    ulEl.append(li)
    inputEl.value = ""
}

function printListFromLocalStorage() {
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

printListFromLocalStorage()
