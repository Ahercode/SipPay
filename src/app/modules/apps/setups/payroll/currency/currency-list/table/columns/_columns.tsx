// @ts-nocheck
import {Column} from 'react-table'
import {CurrencyInfoCell} from './CurrencyInfoCell'
// import {CurrencyLastLoginCell} from './CurrencyLastLoginCell'
// import {CurrencyTwoStepsCell} from './CurrencyTwoStepsCell'
import {CurrencyActionsCell} from './CurrencyActionsCell'
import {CurrencySelectionCell} from './CurrencySelectionCell'
import {CurrencyCustomHeader} from './CurrencyCustomHeader'
import {CurrencySelectionHeader} from './CurrencySelectionHeader'
import {Currency} from '../../core/_models'

const currencyColumns: ReadonlyArray<Column<Currency>> = [
  {
    Header: (props) => <CurrencySelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <CurrencySelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CurrencyCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <CurrencyInfoCell currency={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <CurrencyCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <CurrencyCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <CurrencyLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <CurrencyCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <CurrencyTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <CurrencyCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <CurrencyCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <CurrencyActionsCell id={props.data[props.row.index].id} />,
  },
]

export {currencyColumns}
