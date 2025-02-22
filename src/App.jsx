import "./App.css";
import SearchBar from './component/SearchBar/SearchBar'
import SideBar from './component/SideBar/SideBar'

import DashBoard from './component/DashBoard/DashBoard';


function App() {
 

  return (
 
 <div id='main-div'>
  <SideBar/>
  <div id='combine-div'>
  <SearchBar/>
  <DashBoard/>
  </div>
 </div>
  )
}

export default App
