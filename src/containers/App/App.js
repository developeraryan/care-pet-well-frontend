import styles from "./App.module.css";
import Test from "../../components/Test/Test";
import Data from "../../components/Data";
import Header from "../../components/shared/Header/Header";
import HomeSlider from "../../elements/HomeSlider/HomeSlider";
import { Outlet } from "react-router-dom";
import image from "../../assests/images/background/counter_bg.jpg";

function App() {
  return (
    <div className={styles.App} style={{ backgroundImage:`url(${image})` }}>
      <Header />
      
      <div className="font_face_nb">
        <Outlet />
      </div>
      {/* <HomeSlider/>
      <h1 className={styles.font_face_nb}>This is the text</h1> */}
    </div>
  );
}

export default App;
