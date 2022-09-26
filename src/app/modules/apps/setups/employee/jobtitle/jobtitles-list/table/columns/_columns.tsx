// @ts-nocheck
import {Column} from 'react-table'
import {JobtitleInfoCell} from './JobtitleInfoCell'
import {JobtitleLastLoginCell} from './BankLastLoginCell'
import {BankTwoStepsCell} from './BankTwoStepsCell'
import {JobtitleActionsCell} from './JobtitleActionsCell'
import {JobtitleSelectionCell} from './JobtitleSelectionCell'
import {JobtitleCustomHeader} from './JobtitleCustomHeader'
import {JobtitleSelectionHeader} from './JobtitleSelectionHeader'
import {Jobtitle} from '../../core/_models'

const jobtitlesColumns: ReadonlyArray<Column<Jobtitle>> = [
  {
    Header: (props) => <JobtitleSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <JobtitleSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <JobtitleCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
  //   id: 'code',
  //   Cell: ({...props}) => <JobtitleInfoCell jobtitle={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <JobtitleCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    accessor: 'code',
  },
  {
    Header: (props) => <JobtitleCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <JobtitleCustomHeader tableProps={props} title='Description' className='min-w-125px' />,
    accessor: 'description',
  },
  // {
  //   Header: (props) => (
  //     <JobtitleCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <JobtitleLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <JobtitleCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <JobtitleTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <JobtitleCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <JobtitleCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <JobtitleActionsCell id={props.data[props.row.index].id} />,
  },
]

export {jobtitlesColumns}
