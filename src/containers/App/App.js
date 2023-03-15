import styles from './App.module.css';
import Test from '../../components/Test/Test';
import Data from '../../components/Data';

function App() {

  return (
    <div className={styles.App}>
      <Data/>
      <Test/>
    </div>
  );
}

export default App;
