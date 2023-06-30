import { Header } from './components/header/header';
import './styles/global.css';
import styles from './App.module.css';

import { Sidebar } from './components/sidebar/sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}

export default App;
