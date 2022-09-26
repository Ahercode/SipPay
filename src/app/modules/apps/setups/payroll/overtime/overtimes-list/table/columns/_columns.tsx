// @ts-nocheck
import {Column} from 'react-table'
import {OvertimeInfoCell} from './OvertimeInfoCell'
// import {OvertimeLastLoginCell} from './OvertimeLastLoginCell'
// import {OvertimeTwoStepsCell} from './OvertimeTwoStepsCell'
import {OvertimeActionsCell} from './OvertimeActionsCell'
import {OvertimeSelectionCell} from './OvertimeSelectionCell'
import {OvertimeCustomHeader} from './OvertimeCustomHeader'
import {OvertimeSelectionHeader} from './OvertimeSelectionHeader'
import {Overtime} from '../../core/_models'

const overtimesColumns: ReadonlyArray<Column<Overtime>> = [
  {
    Header: (props) => <OvertimeSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <OvertimeSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <OvertimeCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <OvertimeInfoCell overtime={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <OvertimeCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <OvertimeCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <OvertimeLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <OvertimeCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <OvertimeTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <OvertimeCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <OvertimeCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <OvertimeActionsCell id={props.data[props.row.index].id} />,
  },
]

export {overtimesColumns}
