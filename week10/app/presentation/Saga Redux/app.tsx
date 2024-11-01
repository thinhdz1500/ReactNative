import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest } from './actions';
import store from './store';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
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
  <Provider store={store}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TodoList />
    </View>
  </Provider>
);

export default App;
