import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Загрузка...</p>} persistor={persistor}>
        <TaskList />
      </PersistGate>
    </Provider>
  );
};

export default App;