// @ts-nocheck
import {Column} from 'react-table'
import {UnitInfoCell} from './UnitInfoCell'
// import {UnitLastLoginCell} from './UnitLastLoginCell'
// import {UnitTwoStepsCell} from './UnitTwoStepsCell'
import {UnitActionsCell} from './UnitActionsCell'
import {UnitSelectionCell} from './UnitSelectionCell'
import {UnitCustomHeader} from './UnitCustomHeader'
import {UnitSelectionHeader} from './UnitSelectionHeader'
import {Unit} from '../../core/_models'

const unitsColumns: ReadonlyArray<Column<Unit>> = [
  {
    Header: (props) => <UnitSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UnitSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UnitCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <UnitInfoCell unit={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UnitCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <UnitCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <UnitLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <UnitCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <UnitTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <UnitCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <UnitCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UnitActionsCell id={props.data[props.row.index].id} />,
  },
]

export {unitsColumns}
