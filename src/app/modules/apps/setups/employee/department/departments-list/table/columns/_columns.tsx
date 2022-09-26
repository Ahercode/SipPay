// @ts-nocheck
import {Column} from 'react-table'
import {DepartmentInfoCell} from './DepartmentInfoCell'
// import {DepartmentLastLoginCell} from './DepartmentLastLoginCell'
// import {DepartmentTwoStepsCell} from './DepartmentTwoStepsCell'
import {DepartmentActionsCell} from './DepartmentActionsCell'
import {DepartmentSelectionCell} from './DepartmentSelectionCell'
import {DepartmentCustomHeader} from './DepartmentCustomHeader'
import {DepartmentSelectionHeader} from './DepartmentSelectionHeader'
import {Department} from '../../core/_models'

const departmentsColumns: ReadonlyArray<Column<Department>> = [
  {
    Header: (props) => <DepartmentSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <DepartmentSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <DepartmentCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <DepartmentInfoCell department={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DepartmentCustomHeader tableProps={props} title='Reporting Division' className='min-w-125px' />,
    accessor: 'reportingDivision',
  },
  {
    Header: (props) => <DepartmentCustomHeader tableProps={props} title='Description' className='min-w-125px' />,
    accessor: 'description',
  },
  {
    Header: (props) => <DepartmentCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  // {
  //   Header: (props) => (
  //     <DepartmentCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <DepartmentLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <DepartmentCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <DepartmentTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <DepartmentCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <DepartmentCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DepartmentActionsCell id={props.data[props.row.index].id} />,
  },
]

export {departmentsColumns}
