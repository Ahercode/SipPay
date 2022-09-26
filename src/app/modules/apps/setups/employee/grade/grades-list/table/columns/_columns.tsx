// @ts-nocheck
import {Column} from 'react-table'
import {GradeInfoCell} from './GradeInfoCell'
// import {GradeLastLoginCell} from './GradeLastLoginCell'
// import {GradeTwoStepsCell} from './GradeTwoStepsCell'
import {GradeActionsCell} from './GradeActionsCell'
import {GradeSelectionCell} from './GradeSelectionCell'
import {GradeCustomHeader} from './GradeCustomHeader'
import {GradeSelectionHeader} from './GradeSelectionHeader'
import {Grade} from '../../core/_models'

const gradesColumns: ReadonlyArray<Column<Grade>> = [
  {
    Header: (props) => <GradeSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <GradeSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <GradeInfoCell grade={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Decription' className='min-w-125px' />,
    accessor: 'desrciption',
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Paygroup' className='min-w-125px' />,
    accessor: 'paygroup',
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  
  
  {
    Header: (props) => (
      <GradeCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <GradeActionsCell id={props.data[props.row.index].id} />,
  },
]

export {gradesColumns}
