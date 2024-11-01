// App.js
import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil';
import { fetchTodosSelector, todoListState } from './atoms';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

const TodoList = () => {
  const todosLoadable = useRecoilValueLoadable(fetchTodosSelector);
  const [todos, setTodos] = useRecoilState(todoListState);

  useEffect(() => {
    if (todosLoadable.state === 'hasValue') {
      setTodos(todosLoadable.contents);
    }
  }, [todosLoadable, setTodos]);

  if (todosLoadable.state === 'loading') {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (todosLoadable.state === 'hasError') {
    return <Text>Error: {todosLoadable.contents}</Text>;
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};

const App = () => (
  <RecoilRoot>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TodoList />
    </View>
  </RecoilRoot>
);

export default App;
