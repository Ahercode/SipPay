// @ts-nocheck
import {Column} from 'react-table'
import {ApprovalLevelInfoCell} from './ApprovalLevelInfoCell'
// import {ApprovalLevelLastLoginCell} from './ApprovalLevelLastLoginCell'
// import {ApprovalLevelTwoStepsCell} from './ApprovalLevelTwoStepsCell'
import {ApprovalLevelActionsCell} from './ApprovalLevelActionsCell'
import {ApprovalLevelSelectionCell} from './ApprovalLevelSelectionCell'
import {ApprovalLevelCustomHeader} from './ApprovalLevelCustomHeader'
import {ApprovalLevelSelectionHeader} from './ApprovalLevelSelectionHeader'
import {ApprovalLevel} from '../../core/_models'

const approvalLevelsColumns: ReadonlyArray<Column<ApprovalLevel>> = [
  // {
  //   Header: (props) => <ApprovalLevelSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <ApprovalLevelSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <ApprovalLevelCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <ApprovalLevelInfoCell approvalLevel={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ApprovalLevelCustomHeader tableProps={props} title='Level' className='min-w-125px' />,
    accessor: 'level',
  },
  // {
  //   Header: (props) => (
  //     <ApprovalLevelCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <ApprovalLevelLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <ApprovalLevelCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ApprovalLevelTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <ApprovalLevelCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <ApprovalLevelCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ApprovalLevelActionsCell id={props.data[props.row.index].id} />,
  },
]

export {approvalLevelsColumns}
