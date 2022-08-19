import { Jobs } from "./components/Jobs";
// import { Logs } from "./components/Logs";
// import { Tools } from "./components/Tools";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
      <div className="wrapper">      
          <Sidebar />
          <div className="wrapper__body" style={{position:"relative", padding:"1.5rem", left: "11.5rem", width: "calc(100vw - 14rem)"}} >
          <Routes>
            <Route path="/" element={<Jobs />} />
            {/* <Route path="tools" element={<Tools />} /> */}
            {/* <Route path="materials" element={<Materials />} /> */}
            {/* <Route path="setting" element={<Setting />} /> */}
            {/* <Route path="logs" element={<Logs />} /> */}
          </Routes>
         </div>
         </div>

  );
};


