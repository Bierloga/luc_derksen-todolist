const button = document.getElementById("submit-button")
const inputField = document.getElementById("input-field")
const taskList = document.getElementById("tasklist")

async function updateList() {
    taskList.innerHTML = ""
    const data = await getAllTasks()
    data.forEach(function (item) {

        const listItem = document.createElement("li")
        listItem.classList.add("listItem")
        listItem.innerHTML = item.description
        const trashButton = document.createElement("button")
        const trashCan = document.createElement("img")
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox")
        trashCan.setAttribute("src", "trash-solid.svg")
        trashCan.classList.add("trashcan")
        trashButton.setAttribute("id", item._id)
        trashButton.appendChild(trashCan)
        trashButton.classList.add("trash-button")
        const listItemContainer = document.createElement("div")
        listItemContainer.classList.add("item-container")
        listItemContainer.appendChild(checkBox)
        listItemContainer.appendChild(listItem)
        listItemContainer.appendChild(trashButton)
        taskList.appendChild(listItemContainer)
        trashButton.addEventListener("click", async function () {
            const id = trashButton.id
            await deleteTasks(id)
            updateList()
        })
        checkBox.addEventListener("change", async function () {
            listItem.classList.toggle("cross-out")
            const id = trashButton.id
            const data = await getTask(id)
            console.log(data.done)
            switch (data.done) {
                case true:
                    updateTasksNotDone(id)
                    break
                case false:
                    updateTasksDone(id)
                    break
                default:
                    break
            }
        })
    }
    )
}

button.addEventListener("click", async function () {
    const inputValue = inputField.value
    const data = await postTask(inputValue)
    inputField.value = ""
    updateList()
})