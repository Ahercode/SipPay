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
  // {
  //   Header: (props) => <DivisionSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <DivisionSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <DivisionCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <DivisionInfoCell division={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DivisionCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => (
      <DivisionCustomHeader tableProps={props} title='status' className='min-w-125px' />
    ),
    accessor: 'status',
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
