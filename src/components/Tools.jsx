import React, { useState } from "react";
import Pagination from "./Pagination";
import { Table } from "./Table";

// Active tool Components
const ActiveTool = (props) => {
  return(
    <Table list={props.list} colName={props.colName} />
    );
};

// In-active tool Components
const InactiveTool = (props) => {
  return(
    <Table list={props.list} colName={props.colName} />
    );
}; 




export const Tools = () => {

  // active tools list
  let Activelist = [
    ["1", "img/info.png", "cutter M10", "140.000", "14.000"],
    ["2", "img/done.png", "drill Ak23", "130.030", "10.000"],
    ["3", "img/close.png", "Knife M10", "150.040", "11.000"],
    ["4", "img/info.png", "Jammer M10", "140.020", "12.000"],
    ["5", "img/warning.png", "pistol tr0", "142.000", "13.000"],
    ["6", "img/admin.png", "Jammer Z15", "540.560", "14.000"],
    ["7", "img/user.png", "Drill M10", "350.078", "15.000"],
    ["8", "img/info.png", "cutter M10", "140.000", "14.000"],
    ["9", "img/done.png", "drill Ak23", "130.030", "10.000"],
    ["10", "img/close.png", "Knife M10", "150.040", "11.000"],
    ["11", "img/info.png", "Jammer M10", "140.020", "12.000"],
    ["12", "img/warning.png", "pistol tr0", "142.000", "13.000"],
    ["13", "img/admin.png", "Jammer Z15", "540.560", "14.000"],
    ["14", "img/user.png", "Drill M10", "350.078", "15.000"],
    ["15", "img/close.png", "Knife M10", "150.040", "11.000"],
    ["16", "img/info.png", "Jammer M10", "140.020", "12.000"],
    ["17", "img/warning.png", "pistol tr0", "142.000", "13.000"],
    ["18", "img/admin.png", "Jammer Z15", "540.560", "14.000"],
    ["19", "img/user.png", "Drill M10", "350.078", "15.000"],
  ];

  // inactive tools list
  let Inactivelist = [
    ["1", "img/info.png", "cutter M10", "140.000", "14.000"],
    ["2", "img/done.png", "drill Ak23", "130.030", "10.000"],
    ["3", "img/close.png", "Knife M10", "150.040", "11.000"],
    ["4", "img/info.png", "Jammer M10", "140.020", "12.000"],
    ["18", "img/admin.png", "Jammer Z15", "540.560", "14.000"],
    ["19", "img/user.png", "Drill M10", "350.078", "15.000"],
  ];

  // Column name for tools table  list
  let colName = ["SN", "Type", "Tool Name", "Length", "Diameter"];

  // This state is for controlling the paginations  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const [showActiveTools, setShowActiveTools] = useState(true);//to load the specific table list in a button click i.e active/inactive
  const [selectList,setShowSelectList] = useState(Activelist); //to select the specific list to load in a button click i.e active/inactive


console.log(selectList);
  // getting exact number of pages required
  let totalItems = selectList.length;
  let pages = totalItems / itemsPerPage;
  if (totalItems % itemsPerPage !== 0 && pages > 1) {
    pages = Math.trunc(pages + 1);
  }
  // getting current posts 
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemindex = lastItemIndex - itemsPerPage;
  const currentItems = selectList.slice(firstItemindex, lastItemIndex);
  // getting exact number of items for last page
  const pageItem = currentItems.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <section className="tools">
      <div className="tools__topbar">
        
        <input type="text" className="search-tool" placeholder="🔍" /> {/* Search box*/}

        {/* Active - InActive tool button */}
      <div className="tools__btn">
        <span className={showActiveTools ? 'tools__btn--active show' : 'tools__btn--active'} onClick={()=>{
          setShowActiveTools(true);
          setShowSelectList(Activelist);
        }}>
          Active 
        </span>
        <span className={!showActiveTools ? 'tools__btn--inactive show' : 'tools__btn--inactive'}  onClick={()=>{
          setShowActiveTools(false);
          setShowSelectList(Inactivelist);
        }}>
        Inactive
        </span>
      </div>
      </div>
      
      {showActiveTools && (<ActiveTool list={currentItems} colName={colName} />)} {/* Loads when clicked Active Button  */}
      {!showActiveTools && ( <InactiveTool list={currentItems} colName={colName} />) } {/* Loads when clicked In-active Button  */}
      
      {/* Pagination Section for both Active and in active table  */}
      {pages > 1 && (
      <Pagination
      lastItem={firstItemindex + pageItem}
      firstItem={firstItemindex}
      totalItems={totalItems}
      Pages={pages}
      paginate={paginate}
      />
      )}
    </section>
  );
};


