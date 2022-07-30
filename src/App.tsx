import QuestionArea from "./components/QuestionArea";
import { Provider } from "react-redux";
import { store } from "./store/Index";
import styles from "./App.module.css";
function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <QuestionArea />
      </div>
    </Provider>
  );
}

export default App;
