// @ts-nocheck
import {Column} from 'react-table'
import {PeriodInfoCell} from './PeriodInfoCell'
// import {PeriodLastLoginCell} from './PeriodLastLoginCell'
// import {PeriodTwoStepsCell} from './PeriodTwoStepsCell'
import {PeriodActionsCell} from './PeriodActionsCell'
import {PeriodSelectionCell} from './PeriodSelectionCell'
import {PeriodCustomHeader} from './PeriodCustomHeader'
import {PeriodSelectionHeader} from './PeriodSelectionHeader'
import {Period} from '../../core/_models'

const periodsColumns: ReadonlyArray<Column<Period>> = [
  {
    Header: (props) => <PeriodSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <PeriodSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <PeriodCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <PeriodInfoCell period={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <PeriodCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <PeriodCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <PeriodLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <PeriodCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <PeriodTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <PeriodCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <PeriodCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <PeriodActionsCell id={props.data[props.row.index].id} />,
  },
]

export {periodsColumns}
