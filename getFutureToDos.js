#!/usr/bin/env node
const getFutureToDos = async function (api) {
  const today = new Date();
  const todos = await api.fetchToDos();
  return todos.filter(function (todo) {
    return todo.due > today;
  });
}

export { getFutureToDos };
