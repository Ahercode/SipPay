// @ts-nocheck
import {Column} from 'react-table'
import {BankInfoCell} from './BankInfoCell'
import {BankLastLoginCell} from './BankLastLoginCell'
import {BankTwoStepsCell} from './BankTwoStepsCell'
import {BankActionsCell} from './BankActionsCell'
import {BankSelectionCell} from './BankSelectionCell'
import {BankCustomHeader} from './BankCustomHeader'
import {BankSelectionHeader} from './BankSelectionHeader'
import {Bank} from '../../core/_models'

const banksColumns: ReadonlyArray<Column<Bank>> = [
  {
    Header: (props) => <BankSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <BankSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <BankCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <BankInfoCell bank={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <BankCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <BankCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <BankLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <BankCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <BankTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <BankCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <BankCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <BankActionsCell id={props.data[props.row.index].id} />,
  },
]

export {banksColumns}
