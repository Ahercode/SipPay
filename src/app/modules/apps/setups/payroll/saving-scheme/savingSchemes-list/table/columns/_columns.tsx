// @ts-nocheck
import {Column} from 'react-table'
import {SavingSchemeInfoCell} from './SavingSchemeInfoCell'
// import {SavingSchemeLastLoginCell} from './SavingSchemeLastLoginCell'
// import {SavingSchemeTwoStepsCell} from './SavingSchemeTwoStepsCell'
import {SavingSchemeActionsCell} from './SavingSchemeActionsCell'
import {SavingSchemeSelectionCell} from './SavingSchemeSelectionCell'
import {SavingSchemeCustomHeader} from './SavingSchemeCustomHeader'
import {SavingSchemeSelectionHeader} from './SavingSchemeSelectionHeader'
import {SavingScheme} from '../../core/_models'

const savingSchemesColumns: ReadonlyArray<Column<SavingScheme>> = [
  {
    Header: (props) => <SavingSchemeSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SavingSchemeSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <SavingSchemeCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <SavingSchemeInfoCell savingScheme={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <SavingSchemeCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <SavingSchemeCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <SavingSchemeLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <SavingSchemeCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <SavingSchemeTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <SavingSchemeCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <SavingSchemeCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <SavingSchemeActionsCell id={props.data[props.row.index].id} />,
  },
]

export {savingSchemesColumns}
