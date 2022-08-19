const Pagination = (props) => {
  return (
    <div className="pagination">
      <span>
        Showing {props.firstItem + 1}-{props.lastItem} of {props.totalItems}{" "}
        items
      </span>
      <div className="pagination__no">
        {[...Array(props.Pages)].map((pgNo, i) => (
          <label for={i + 1}>
            <input
              type="radio"
              id={i + 1}
              name="page"
              style={{ display: "none" }}
            />
            <span
              onClick={() => props.paginate(i + 1)}
              className="pagination__no--btn"
              key={i + 1}
            >
              {i + 1}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
