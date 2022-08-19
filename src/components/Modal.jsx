import React, { useState } from "react";

// firts Section of the modal box where users can choose file or add job manually
const Addjob = (props) => {
  return (
    <div className="addJob">
      <button className="addJob__file">load from file</button>
      <button
        className="addJob__manually"
        onClick={() => {
          props.showSelectJob(true);
          props.hideSelf(false);
        }}
      >
        create jobs manually
      </button>
    </div>
  );
};

// Second Section of the modal box where user selects the jobs to be created
const Selectjob = (props) => {
  const jobs = [
    "Create three circles",
    "Cut the circles in the middle",
    "Load Vaccum",
  ]; //All the jobs that can be assigned
  const vaccumTypes = ["Vaccum 1", "Vaccum 2", "Vaccum 3"];
  const [newJobs, setNewJobs] = useState([jobs[0]]); //to get all the jobs selected by user in "newJobs "array
  const [vaccums, setVaccums] = useState(vaccumTypes[0]); //to get the vaccum type selected by user

  console.log(newJobs);
  console.log(vaccums);

  // This function enable to select multi job when add new job button is clicked
  const handleJobAdd = () => {
    setNewJobs([...newJobs, ""]);
  };

  // This function helps to get the user selected data from dropdown and update a state.
  const handelNewChanges = (e, index, type) => {
    const { value } = e.target;
    if (type == "job") {
      const jobs = [...newJobs];
      jobs[index] = value;
      setNewJobs(jobs);
      setVaccums("");
    } else {
      setVaccums(type);
    }
  };

  return (
    <>
      {newJobs.map((newjob, index) => (
        <div className="selectJob">
          {index < 1 && <h3> select job </h3>}
          {index > 0 && <h3> select job {index + 1}</h3>}
          <br />
          <select
            name="newJobs"
            id={`selectnewJobs${index + 1}`}
            value={newJobs[index]}
            onChange={(e) => handelNewChanges(e, index, "job")}
          >
            {jobs.map((job, index) => (
              <option key={index} value={job}>
                {job}
              </option>
            ))}
          </select>

          {/* //dependent dropdrown  */}
          {newJobs[index] == jobs[2] && (
            <div className="selectJob">
              <br />
              <h3>Vaccum Type</h3>
              <br />
              <select
                name="vaccum"
                id={`vaccum${index + 1}`}
                value={vaccums[index]}
              >
                {vaccumTypes.map((vaccum, index) => (
                  <option
                    key={index}
                    value={vaccum}
                    onClick={(e) => handelNewChanges(e, index, { vaccum })}
                  >
                    {vaccum}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* this condition will only let the user to add max 3 jobs by disabling or  hidding the add new job after user select max 3 jobs */}
          {newJobs.length - 1 === index && newJobs.length < 3 && (
            <div href="" className="selectJob__addbtn" onClick={handleJobAdd}>
              <svg className="small-svg" fill="#4A4A4A">
                <use xlinkHref="img/blackbox.svg#addbtn"></use>
              </svg>
              <span>Add new job</span>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

// Third Section of the Modal box where use can load vaccum cover and create a job
const SelectVaccum = (props) => {
  const [vaccumCovers, setVaccumCovers] = useState([""]);
  const items = ["A", "B", "C", "D", "E", "F"];

  // this function update the state and store the user selected cover into vaccumCovers array
  const handelNewChanges = (e, index) => {
    const { value } = e.target;
    const covers = [...vaccumCovers];
    covers[index] = value;

    setVaccumCovers(covers);
  };

  // Filter out the empty elements of the array
  const filterVaccumCovers = vaccumCovers.filter((e) => {
    return e !== null && e !== undefined && e !== "";
  });

  return (
    <div className="selectVaccum">
      <h3>Load Vaccum Cover</h3>

      <div className="selectVaccum__vaccum-cover">
        {items.map((item, index) => (
          <>
            <h2 key={index}>
              <span> {item}</span>
              {Array.apply(0, Array(13)).map((num, i) => (
                <input
                  key={i}
                  type="radio"
                  id={`${item}${i + 1}`}
                  name={`vaccum_cover-${item}`}
                  value={`${item}${i + 1}`}
                  onClick={(e) => handelNewChanges(e, index)}
                />
              ))}
            </h2>
          </>
        ))}
      </div>

      {/* Displays the user selected columns  */}
      <div className="selectVaccum__selectedCover">
        <h3>Selected Columns</h3>
        <br />

        {filterVaccumCovers.map((cover, index) => (
          <span>
            {filterVaccumCovers.length - 1 != index && <>{cover}, </>}
            {filterVaccumCovers.length - 1 === index && <> {cover}</>}
          </span>
        ))}
      </div>
    </div>
  );
};

const Modal = (props) => {
  const [showAddJob, setShowAddJob] = useState(true);
  const [showSelectJob, setShowSelectJob] = useState(false);
  const [showSelectVaccum, setShowSelectVaccum] = useState(false);
  return (
    <div
      className="modal"
      onClick={() => {
        setShowAddJob(true);
        setShowSelectJob(false);
        props.hideModal(false);
      }} //for closing and reseting the modal box when clicked outside the box
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {/* Preventing the close of modal box when clicked inside the box */}
        <div className="modal__title">
          <h3>Add job</h3>

          <svg
            className="big-svg"
            fill="#4A4A4A"
            onClick={() => {
              props.hideModal(false);
            }}
            // closes the modal box when clicked
          >
            <use xlinkHref="img/blackbox.svg#close"></use>
          </svg>
        </div>
        <div className="modal__body">
          {showAddJob && (
            <Addjob showSelectJob={setShowSelectJob} hideSelf={setShowAddJob} />
          )}{" "}
          {/* Shows 1st secton of modal box when true */}
          {showSelectJob && <Selectjob />}{" "}
          {/* Shows 2nd secton of modal box i.e. selecting the jobs to be created when true */}
          {showSelectVaccum && <SelectVaccum />}{" "}
          {/* Shows 3rd secton of modal box i.e. selecting the vaccum cover when the result is true */}
        </div>
        <div className="modal__btns">
          {showAddJob == false && (
            <button
              onClick={() => {
                setShowAddJob(true);
                setShowSelectJob(false);
                props.hideModal(false);
              }}
              // closes and reset the modal box
            >
              Cancel
            </button>
          )}

          {showSelectJob == true && (
            <button
              onClick={() => {
                setShowSelectJob(false);
                setShowSelectVaccum(true);
              }}
            >
              Next
            </button>
          )}
          {showSelectVaccum == true && (
            <button
              onClick={() => {
                setShowSelectJob(false);
                setShowSelectVaccum(true);
              }}
            >
              Create Job
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
