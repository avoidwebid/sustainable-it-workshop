// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, Routes} from "react-router-dom";
import Menu from "./components/menu";
import History from "./pages/history";
import Meal from "./pages/meal";
import Shaker from "./pages/shaker";

import styles from './app.module.scss';
import Advices from "./pages/advices";
import Cluster from "./pages/cluster";

export function App() {
  return (
    <>
      <div className={styles.title}>🍹 Carbon Shaker</div>
        <Routes>
          <Route path={"/"} element={<Menu />}>
            <Route path={"shaker"} element={<Shaker/>} />
            <Route path={"history"} element={<History />}/>
            <Route path={"add"} element={<Meal />} />
            <Route path={"advices"} element={<Advices />} />
            {/*<Route path={"cluster"} element={<Cluster />} />*/}
          </Route>
        </Routes>
    </>
  );
}

export default App;
