// @ts-nocheck
import {Column} from 'react-table'
import {LeaveInfoCell} from './LeaveInfoCell'
// import {LeaveLastLoginCell} from './LeaveLastLoginCell'
// import {LeaveTwoStepsCell} from './LeaveTwoStepsCell'
import {LeaveActionsCell} from './LeaveActionsCell'
import {LeaveSelectionCell} from './LeaveSelectionCell'
import {LeaveCustomHeader} from './LeaveCustomHeader'
import {LeaveSelectionHeader} from './LeaveSelectionHeader'
import {Leave} from '../../core/_models'

const leavesColumns: ReadonlyArray<Column<Leave>> = [
  {
    Header: (props) => <LeaveSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <LeaveSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <LeaveCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <LeaveInfoCell leave={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <LeaveCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <LeaveCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <LeaveLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeaveCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <LeaveTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <LeaveCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <LeaveCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <LeaveActionsCell id={props.data[props.row.index].id} />,
  },
]

export {leavesColumns}
