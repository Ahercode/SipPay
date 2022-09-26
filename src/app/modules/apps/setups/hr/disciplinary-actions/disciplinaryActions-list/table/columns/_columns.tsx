// @ts-nocheck
import {Column} from 'react-table'
import {DisciplinaryActionInfoCell} from './DisciplinaryActionInfoCell'
// import {DisciplinaryActionLastLoginCell} from './DisciplinaryActionLastLoginCell'
// import {DisciplinaryActionTwoStepsCell} from './DisciplinaryActionTwoStepsCell'
import {DisciplinaryActionActionsCell} from './DisciplinaryActionActionsCell'
import {DisciplinaryActionSelectionCell} from './DisciplinaryActionSelectionCell'
import {DisciplinaryActionCustomHeader} from './DisciplinaryActionCustomHeader'
import {DisciplinaryActionSelectionHeader} from './DisciplinaryActionSelectionHeader'
import {DisciplinaryAction} from '../../core/_models'

const disciplinaryActionsColumns: ReadonlyArray<Column<DisciplinaryAction>> = [
  {
    Header: (props) => <DisciplinaryActionSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <DisciplinaryActionSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <DisciplinaryActionCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <DisciplinaryActionInfoCell disciplinaryAction={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DisciplinaryActionCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <DisciplinaryActionCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <DisciplinaryActionLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <DisciplinaryActionCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <DisciplinaryActionTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <DisciplinaryActionCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <DisciplinaryActionCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DisciplinaryActionActionsCell id={props.data[props.row.index].id} />,
  },
]

export {disciplinaryActionsColumns}
