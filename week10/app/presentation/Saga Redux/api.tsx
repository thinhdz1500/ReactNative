export const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json());
  };
  