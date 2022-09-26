// @ts-nocheck
import {Column} from 'react-table'
import {DivisionInfoCell} from './DivisionInfoCell'
// import {DivisionLastLoginCell} from './DivisionLastLoginCell'
// import {DivisionTwoStepsCell} from './DivisionTwoStepsCell'
import {DivisionActionsCell} from './DivisionActionsCell'
import {DivisionSelectionCell} from './DivisionSelectionCell'
import {DivisionCustomHeader} from './DivisionCustomHeader'
import {DivisionSelectionHeader} from './DivisionSelectionHeader'
import {Division} from '../../core/_models'

const divisionsColumns: ReadonlyArray<Column<Division>> = [
  {
    Header: (props) => <DivisionSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <DivisionSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <DivisionCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <DivisionInfoCell division={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DivisionCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <DivisionCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <DivisionLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <DivisionCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <DivisionTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <DivisionCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <DivisionCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DivisionActionsCell id={props.data[props.row.index].id} />,
  },
]

export {divisionsColumns}
