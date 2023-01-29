// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, Routes} from "react-router-dom";
import Menu from "./components/menu";
import History from "./pages/history";
import Meal from "./pages/meal";
import Shaker from "./pages/shaker";

import styles from './app.module.scss';
import {Suspense, lazy} from "react";
import Advices from "./pages/advices";

const UniversalShaker = lazy(() => import('./pages/universal-shaker'))

export function App() {
  return (
    <>
      <div className={styles.title}>🍹 Carbon Shaker</div>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path={"/"} element={<Menu />}>
            {
              !('BarcodeDetector' in window) ?
                <Route path={"shaker"} element={<UniversalShaker/>} /> :
                <Route path={"shaker"} element={<Shaker/>} />
            }
            <Route path={"history"} element={<History />}/>
            <Route path={"add"} element={<Meal />} />
            <Route path={"advices"} element={<Advices />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
