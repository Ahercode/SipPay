// @ts-nocheck
import {Column} from 'react-table'
import {DeductionInfoCell} from './DeductionInfoCell'
import {DeductionLastLoginCell} from './DeductionLastLoginCell'
import {DeductionTwoStepsCell} from './DeductionTwoStepsCell'
import {DeductionActionsCell} from './DeductionActionsCell'
import {DeductionSelectionCell} from './DeductionSelectionCell'
import {DeductionCustomHeader} from './DeductionCustomHeader'
import {DeductionSelectionHeader} from './DeductionSelectionHeader'
import {Deduction} from '../../core/_models'

const deductionsColumns: ReadonlyArray<Column<Deduction>> = [
  {
    Header: (props) => <DeductionSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <DeductionSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <DeductionCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <DeductionInfoCell deduction={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DeductionCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <DeductionCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <DeductionLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <DeductionCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <DeductionTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <DeductionCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <DeductionCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DeductionActionsCell id={props.data[props.row.index].id} />,
  },
]

export {deductionsColumns}
