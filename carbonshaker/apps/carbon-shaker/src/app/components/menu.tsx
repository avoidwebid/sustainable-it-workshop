import styles from "../app.module.scss";
import {Outlet, useNavigate} from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.menuWrapper}>
        <div className={styles.button} onClick={() => navigate("/shaker")}>🍹 Shaker</div>
        <div className={styles.button} onClick={() => navigate("/history")}>📜 Historique</div>
        <div className={styles.button} onClick={() => navigate("/add")}>🍕 Repas</div>
        <div className={styles.button} onClick={() => navigate("/advices")}>👋 Conseil du jour</div>
        {/*<div className={styles.button} onClick={() => navigate("/cluster")}>⚠️ Cluster</div>*/}
      </div>
      <Outlet/>
    </>

  )
}

export default Menu;
