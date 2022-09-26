// @ts-nocheck
import {Column} from 'react-table'
import {ConfigInfoCell} from './ConfigInfoCell'
// import {ConfigLastLoginCell} from './ConfigLastLoginCell'
// import {ConfigTwoStepsCell} from './ConfigTwoStepsCell'
import {ConfigActionsCell} from './ConfigActionsCell'
import {ConfigSelectionCell} from './ConfigSelectionCell'
import {ConfigCustomHeader} from './ConfigCustomHeader'
import {ConfigSelectionHeader} from './ConfigSelectionHeader'
import {Config} from '../../core/_models'

const configsColumns: ReadonlyArray<Column<Config>> = [
  {
    Header: (props) => <ConfigSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <ConfigSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <ConfigCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <ConfigInfoCell config={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ConfigCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <ConfigCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <ConfigLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <ConfigCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ConfigTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <ConfigCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <ConfigCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ConfigActionsCell id={props.data[props.row.index].id} />,
  },
]

export {configsColumns}
