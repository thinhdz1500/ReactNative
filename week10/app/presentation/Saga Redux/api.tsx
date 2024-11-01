export const fetchTodos = () => {
    return fetch('https://66ff350c2b9aac9c997e843e.mockapi.io/note')
      .then(response => response.json());
  };
export const deleteTodoApi = (id) => {
  return fetch(`https://66ff350c2b9aac9c997e843e.mockapi.io/note/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete');
    }
  });
};
