import { CreatePost } from './CreateForm/CreatePost';

import { Homepage } from './pages/Homepage';
import { Todos } from './pages/Todos';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Homepage />
      <CreatePost />

      <Todos />
    </div>
  );
};
