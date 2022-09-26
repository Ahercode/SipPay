// @ts-nocheck
import {Column} from 'react-table'
import {TaxInfoCell} from './TaxInfoCell'
// import {TaxLastLoginCell} from './TaxLastLoginCell'
// import {TaxTwoStepsCell} from './TaxTwoStepsCell'
import {TaxActionsCell} from './TaxActionsCell'
import {TaxSelectionCell} from './TaxSelectionCell'
import {TaxCustomHeader} from './TaxCustomHeader'
import {TaxSelectionHeader} from './TaxSelectionHeader'
import {Tax} from '../../core/_models'

const taxsColumns: ReadonlyArray<Column<Tax>> = [
  // {
  //   Header: (props) => <TaxSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <TaxSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <TaxCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <TaxInfoCell tax={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <TaxCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  // {
  //   Header: (props) => (
  //     <TaxCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <TaxLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <TaxCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <TaxTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <TaxCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <TaxCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <TaxActionsCell id={props.data[props.row.index].id} />,
  },
]

export {taxsColumns}
