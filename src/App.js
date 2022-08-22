import { Jobs } from "./components/Jobs";
// import { Logs } from "./components/Logs";
// import { Tools } from "./components/Tools";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return ( 
      <>      
          <Sidebar />
          <div className="wrapper__body">
          <Routes>
            <Route path="lengeman" element={<Jobs />} />
            {/* <Route path="tools" element={<Tools />} /> */}
            {/* <Route path="materials" element={<Materials />} /> */}
            {/* <Route path="setting" element={<Setting />} /> */}
            {/* <Route path="logs" element={<Logs />} /> */}
          </Routes>
         </div>
         </>

  );
};


