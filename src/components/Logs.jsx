import { Table } from "./Table";

export const Logs = () => {
  let list = [
    [
      `"info"`,
      "March 3, 2022",
      "15:04:22",
      `C:\\\\Program File\\Users\\...`,
      " ",
      "14300",
      "But I must explain to you...",
    ],
    [
      "done",
      "March 2, 2022",
      "14:04:22",
      `C:\\\\Program File\\Users\\...`,
      " ",
      "14301",
      "But I must explain to you...",
    ],
    [
      "warning",
      "March 1, 2022",
      "13:04:22",
      `C:\\\\Program File\\Users\\...`,
      " ",
      "14302",
      "But I must explain to you...",
    ],
    [
      "close",
      "March 1, 2022",
      "12:04:22",
      `C:\\Program File\\Users\\...`,
      " ",
      "14306",
      "But I must explain to you...",
    ],
  ];
  let colName = [
    "Type",
    "Date",
    "Time",
    "Location Of File",
    "Total Time",
    "Process Id",
    "message",
  ];
  let pages = [1];
  return (
    <section className="logs">
      <Table
        list={list}
        colName={colName}
        args="logs"
        itemsPerPage="4"
        totalItems="4"
        Pages={pages}
      />
    </section>
  );
};
