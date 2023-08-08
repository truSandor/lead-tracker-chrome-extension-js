const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const myLeadsFromStorage = localStorage.getItem("myLeads")

let myLeads = myLeadsFromStorage ? JSON.parse(myLeadsFromStorage) : []

inputBtn.addEventListener("click", function () {
    if (!inputEl.value) return
    const url = "https://" + inputEl.value
    addUrlToList(url);
})

tabBtn.addEventListener("click", function (){
    let url = ""
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        url = tabs[0].url
        addUrlToList(url)
    })

})

deleteBtn.addEventListener("dblclick", function () {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

function addUrlToList(url) {
    myLeads.push(url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    addUrlToHtml(url)
}

function addUrlToHtml(inputText) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.textContent = inputText
    a.setAttribute("href", inputText)
    a.setAttribute("target", "_blank")
    li.appendChild(a)
    ulEl.append(li)
    inputEl.value = ""
}

function render(leads) {
    let listItems = ""
    leads.forEach(lead => listItems += `
                                        <li>
                                            <a target='_blank' href='${lead}'>
                                                ${lead}
                                            </a>
                                        </li>
                                        `
    )
    ulEl.innerHTML = listItems
}

render(myLeads)
