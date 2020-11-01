const todos = [{
    text: 'WebdevBootcamp',
    completed: false
}, {
    text: 'Business Name',
    completed: true
}, {
    text: 'Register with State',
    completed: false
}, {
    text: 'Upenn Classes',
    completed: false
}, {
    text: 'Workout',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

// render todos function START
// print a summary message of todos left (p element)

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch 
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = '' 
        
    const summary = document.createElement('h2')
    
     summary.textContent = `You have ${incompleteTodos.length} todos left`
     
     document.querySelector('#todos').appendChild(summary)
     // print a p for each todo above. use text value of object for text of paragraph
     
     // itterate over todos array
     filteredTodos.forEach(function (todo) {
         // create an element foreach todo
         const p = document.createElement('p')
         // set the text content for p
         p.textContent = todo.text
         // print element to screen
         document.querySelector('#todos').appendChild(p)
         console.log(p.textContent)
     })
} 

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})    

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})