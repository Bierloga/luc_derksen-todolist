async function postTask(task) {
    const data = { description: task, done: false }
    const res = await fetch("http://localhost:3000/", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json", } })
}

async function getAllTasks() {
    const res = await fetch("http://localhost:3000/", { method: "GET", headers: { "Content-Type": "application/json" } })
    const data = await res.json()
    return data
}

async function getTask(id) {
    const url = `http://localhost:3000/${id}`
    const res = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json"}})
    const data = await res.json()
    return data
}

async function deleteTasks(id) {
    const url = `http://localhost:3000/${id}`
    const res = await fetch(url, { method: "DELETE" })
}

async function updateTasksDone(id) {
    const url = `http://localhost:3000/${id}`
    const data = { done: true }
    const res = await fetch(url, { method: "PUT", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
}

async function updateTasksNotDone(id) {
    const url = `http://localhost:3000/${id}`
    const data = { done: false }
    const res = await fetch(url, { method: "PUT", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
}