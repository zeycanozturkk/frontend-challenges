import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Challenges from "./components/Challenges";
import ChallengesDetail from "./components/ChallengesDetail";


function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="sm:px-16 px-6  flex justify-center items-center">
          <div className=" xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/challenges" element={<Challenges />}></Route>
        <Route path="/detail/:id" element={<ChallengesDetail />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
