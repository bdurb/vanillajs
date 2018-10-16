
const todos = [{
  text: 'do stuff',
  completed: false
}, {
  text: 'do other stuff',
  completed: true
}, {
  text: 'do fings',
  completed: true
}, {
  text: 'do other fings',
  completed: true
}, {
  text: 'do other stuff n fings',
  completed: false
}]

const needTodo = todos.filter(todo => {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${needTodo.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(todo => {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})

document.querySelector('#add-todo').addEventListener('click', () => {
  
})