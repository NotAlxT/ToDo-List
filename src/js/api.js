async function getAllToDos() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/alex', {
      method: "post",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }})
    
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alex', {
      method: "get",
      //body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    console.log(data);
    return data.map((toDoInfo)=>{
        return toDoInfo.label
    })
}
function updatetodos () {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/alex', {
      method: "put",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }})
    
}

export {getAllToDos, updatetodos}