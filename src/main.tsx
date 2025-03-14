import { render } from '~/runtime/jsx-runtime';
import { Todos } from './components/Todos';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Todos />
    </div>
  );
};

const root = document.getElementById('app') as HTMLDivElement;

render(root, <App />);
