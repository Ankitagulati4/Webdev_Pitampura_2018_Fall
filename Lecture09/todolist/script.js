$(() => {
  let savedTodos = []
  if (localStorage['todolist']) {
    savedTodos = JSON.parse(localStorage['todolist'])
  }

  function createTodoItem(task, done) {
    return $(`
      <div class="row p-2">
        <input type="checkbox" class="col m-2">
        <div class="col-6  m-2">${task}</div>
        <button class="btn btn-info btn-up col  m-2">
          <i class="fas fa-arrow-up"></i>
        </button>
        <button class="btn btn-info btn-down col  m-2">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="btn btn-danger col  m-2">
          <i class="far fa-times-circle"></i>
        </button>
      </div>
    `)
  }

  $('#btnAddTask').click(() => {
    $('#divTodos').append(
      createTodoItem($('#inpNewTask').val(), false)
    )
  })

})
