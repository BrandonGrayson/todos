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
    searchText: ''
}

// render todos function START
// print a summary message of todos left (p element)

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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
// ENDS

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('button was clicked!')
})

document.querySelector('#remove-note').addEventListener('click', function(e) {
    console.log('Remove note!')
})

// listen for changes / print new todo text to screen / as it actually changes

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})    
    
