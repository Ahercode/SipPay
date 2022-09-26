// @ts-nocheck
import {Column} from 'react-table'
import {AuditInfoCell} from './AuditInfoCell'
// import {AuditLastLoginCell} from './AuditLastLoginCell'
// import {AuditTwoStepsCell} from './AuditTwoStepsCell'
import {AuditActionsCell} from './AuditActionsCell'
import {AuditSelectionCell} from './AuditSelectionCell'
import {AuditCustomHeader} from './AuditCustomHeader'
import {AuditSelectionHeader} from './AuditSelectionHeader'
import {Audit} from '../../core/_models'

const auditsColumns: ReadonlyArray<Column<Audit>> = [
  {
    Header: (props) => <AuditSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <AuditSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <AuditCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <AuditInfoCell audit={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <AuditCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <AuditCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <AuditLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <AuditCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <AuditTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <AuditCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <AuditCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <AuditActionsCell id={props.data[props.row.index].id} />,
  },
]

export {auditsColumns}
