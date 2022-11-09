import Modal from './Modal'
import React, { useState } from 'react'

function jobTitles(args) {
  if (args === 'To-Do') return 'job__status--to-do'
  if (args === 'In Progress') return 'job__status--progress'
  if (args === 'Done') return 'job__status--done'
}

function jobLists(args) {
  if (args === 'To-Do') return 'job__status-list--to-do'
  if (args === 'In Progress') return 'job__status-list--progress'
  if (args === 'Done') return 'job__status-list--done'
}

const todoJobs = [
  ['Job#1', 'Not initialised'],
  ['Job#2', 'Initalised'],
  ['Job#3', 'Underway'],
  ['Job#4', 'Not initialised'],
  ['Job#5', 'Initalised'],
  ['Job#6', 'Underway'],
]

const inProgJobs = [
  ['Job#1', '55% completed'],
  ['Job#2', '75% completed'],
  ['Job#3', '85% completed'],
]
const doneJobs = [
  ['Job#1', 'Feb 22, 2022'],
  ['Job#2', 'Feb 23, 2020'],
  ['Job#3', 'Feb 02, 2019'],
]

/**
 * @Job component receives title, icon and jobDetails props
 * @title  - title of each job card,
 * @icon - if icon=true, we display the arrow icons in TODO card section, refer JobField
 *    --> if icon=true, we return JObField component optimized for TODO
 *    --> else return JobField for In-progress and done
 * @jobDetails - is an array containing array.
 */

const JobField = (props) => {
  return (
    <div className='job__status-list job__status-list--add'>
      {/* props.icon passes from Job component inside Jobs to JobFields, refer top comment for more detail */}
      {props.icon ? (
        <svg
          className='big-svg job__status-list--priority'
          fill={props.fill}
          style={{ transform: props.rotate }}
        >
          <title>{props.priority} Priority</title>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + `/img/blackbox.svg#arrow-up-red`
            }
          ></use>
        </svg>
      ) : null}

      <div className='job__status-list--text'>
        <h2> {props.jobDetails[0]} </h2>
        <p> {props.jobDetails[1]}</p>
      </div>
      <div className='job__status-list--delete-info'>
        <svg className='small-svg job__status-list--delete'>
          <use
            xlinkHref={process.env.PUBLIC_URL + `/img/blackbox.svg#delete`}
          ></use>
        </svg>
        <svg className='small-svg job__status-list--info'>
          <use
            xlinkHref={process.env.PUBLIC_URL + `/img/blackbox.svg#error`}
          ></use>
        </svg>
      </div>
    </div>
  )
}

const Job = (props) => {
  return (
    <div className={`job ${props.title}`}>
      <div className='job__status'>
        <h3 className={jobTitles(props.title)}>{props.title}</h3>
        <svg className='small-svg'>
          <use xlinkHref='img/blackbox.svg#filter_list'></use>
        </svg>
      </div>
      <div className={jobLists(props.title)}>
        {props.icon ? (
          <>
            {/**
             * props.jobDetails is a 2d array, so every index has another array
             * example, for TODO card,
             * {props.jobDetails} = [['Job#1', 'Not initialized'],['Job#2', 'Initialized'],['Job#3', 'Underway']]
             * {props.jobDetails[0]} = ['Job#1', 'Not initialized'],
             * {props.jobDetails[1]} = ['Job#2', 'Initialized'] and so on
             * this individual index values of {props.jobDetails} are passed to JobField Component as props
             * along with fill and icon
             */}

            <JobField
              jobDetails={props.jobDetails[0]}
              icon={props.icon}
              priority='High'
              fill='#D80027'
            />
            <JobField
              jobDetails={props.jobDetails[1]}
              icon={props.icon}
              priority='Medium'
              fill='#FB7925'
            />
            <JobField
              jobDetails={props.jobDetails[2]}
              icon={props.icon}
              priority='Low'
              fill='#686868'
              rotate='rotate(180deg'
            />
            <JobField
              jobDetails={props.jobDetails[3]}
              icon={props.icon}
              priority='Low'
              fill='#686868'
              rotate='rotate(180deg'
            />
            <JobField
              jobDetails={props.jobDetails[4]}
              icon={props.icon}
              priority='Low'
              fill='#686868'
              rotate='rotate(180deg'
            />
            <JobField
              jobDetails={props.jobDetails[5]}
              icon={props.icon}
              priority='Low'
              fill='#686868'
              rotate='rotate(180deg'
            />
          </>
        ) : (
          <>
            <JobField jobDetails={props.jobDetails[0]} />
            <JobField jobDetails={props.jobDetails[1]} />
            <JobField jobDetails={props.jobDetails[2]} />
          </>
        )}
      </div>
    </div>
  )
}

export const Jobs = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div
        classname='job__topbar'
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div className='job__status-add'>
          <button className='job__status-add--btn'>View BTLX Files</button>
        </div>
        <div className='job__status-add'>
          <button
            className='job__status-add--btn'
            onClick={() => {
              setOpenModal(true) //opens modal box on click by setting openModel to true
            }}
          >
            Add Job
          </button>
          {openModal && <Modal hideModal={setOpenModal} />}
          {/* opens modal box if openModel is set true  */}
        </div>
      </div>
      <section className='jobs'>
        <Job title='To-Do' icon={true} jobDetails={todoJobs} />
        <Job title='In Progress' jobDetails={inProgJobs} />
        <Job title='Done' jobDetails={doneJobs} />
      </section>
    </>
  )
}
