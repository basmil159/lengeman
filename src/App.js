import { Jobs } from './components/Jobs'
// import { Logs } from "./components/Logs";
// import { Tools } from "./components/Tools";
import { Sidebar } from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Sidebar />
      <div className='wrapper__body'>
        <Routes>
          <Route path='/lengeman/' element={<Jobs />} />
          <Route path='/lengeman/tools' element={<Tools />} />
          <Route path='/lengeman/boards' element={<Materials />} />
          <Route path='/lengeman/configure' element={<Setting />} />
          <Route path='/lengeman/logs' element={<Logs />} />
        </Routes>
      </div>
    </>
  )
}

let Tools, Logs, Setting, Materials
Tools =
  Logs =
  Setting =
  Materials =
    () => {
      return (
        <h1 Style='margin: auto;  color: red; height:100%; width: fit-content;'>
          Page comming soon
        </h1>
      )
    }
