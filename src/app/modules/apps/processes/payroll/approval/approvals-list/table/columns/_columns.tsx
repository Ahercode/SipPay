// @ts-nocheck
import {Column} from 'react-table'
import {ApprovalInfoCell} from './ApprovalInfoCell'
import {ApprovalLastLoginCell} from './ApprovalLastLoginCell'
import {ApprovalTwoStepsCell} from './ApprovalTwoStepsCell'
import {ApprovalActionsCell} from './ApprovalActionsCell'
import {ApprovalSelectionCell} from './ApprovalSelectionCell'
import {ApprovalCustomHeader} from './ApprovalCustomHeader'
import {ApprovalSelectionHeader} from './ApprovalSelectionHeader'
import {Approval} from '../../core/_models'

const approvalsColumns: ReadonlyArray<Column<Approval>> = [
  {
    Header: (props) => <ApprovalSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <ApprovalSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <ApprovalCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <ApprovalInfoCell Approval={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ApprovalCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <ApprovalCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <ApprovalLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <ApprovalCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ApprovalTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <ApprovalCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <ApprovalCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ApprovalActionsCell id={props.data[props.row.index].id} />,
  },
]

export {approvalsColumns}
