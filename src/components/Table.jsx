export const Table = (props) => {
  if (props.list.length > 0) {
    return (
      <table className="table">
        <thead className="table__head">
          <tr>
            {props.colName.map((header, index) => [
              header != "SN" && (
                <th key={index}>
                  <span class="table__head--filter">
                    {header}
                    <svg class="tiny-svg" fill="red">
                      <use xlinkHref="img/blackbox.svg#tiny-filter"></use>
                    </svg>
                  </span>
                </th>
              ),
              header === "SN" && <th key={index}>{header}</th>,
            ])}
          </tr>
        </thead>
        <tbody className="paragraph">
          <List list={props.list} />
        </tbody>
      </table>
    );
  }
  return <section className={props.args}>No Data found!!</section>;
};
export default Table;

const List = (props) => {
  return (
    <>
      {props.list.map((obj, index) => (
        <tr key={index}>
          {obj.map((value, index2) => [
            index2 != 1 && <td>{value}</td>,
            index2 == 1 && (
              <td>
                <img src={value} width="16" />
              </td>
            ),
          ])}
        </tr>
      ))}
    </>
  );
};
