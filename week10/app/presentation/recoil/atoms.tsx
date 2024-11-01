import { atom, selector } from 'recoil';
import axios from 'axios';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const fetchTodosSelector = selector({
  key: 'fetchTodosSelector',
  get: async ({ get }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
