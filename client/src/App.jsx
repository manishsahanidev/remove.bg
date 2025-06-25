import { Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import { Menubar } from "./components/Menubar";

const App = () => {
  return (
    <div className="">
      <Menubar />
        <Outlet/>
      <Footer />
    </div>
  );
};

export default App;
