// @ts-nocheck
import {Column} from 'react-table'
import {LoanInfoCell} from './LoanInfoCell'
// import {LoanLastLoginCell} from './LoanLastLoginCell'
// import {LoanTwoStepsCell} from './LoanTwoStepsCell'
import {LoanActionsCell} from './LoanActionsCell'
import {LoanSelectionCell} from './LoanSelectionCell'
import {LoanCustomHeader} from './LoanCustomHeader'
import {LoanSelectionHeader} from './LoanSelectionHeader'
import {Loan} from '../../core/_models'

const loansColumns: ReadonlyArray<Column<Loan>> = [
  {
    Header: (props) => <LoanSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <LoanSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <LoanCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <LoanInfoCell loan={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <LoanCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <LoanCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <LoanLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <LoanCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <LoanTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <LoanCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <LoanCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <LoanActionsCell id={props.data[props.row.index].id} />,
  },
]

export {loansColumns}
