// @ts-nocheck
import {Column} from 'react-table'
import {NotchInfoCell} from './NotchInfoCell'
// import {NotchLastLoginCell} from './NotchLastLoginCell'
// import {NotchTwoStepsCell} from './NotchTwoStepsCell'
import {NotchActionsCell} from './NotchActionsCell'
import {NotchSelectionCell} from './NotchSelectionCell'
import {NotchCustomHeader} from './NotchCustomHeader'
import {NotchSelectionHeader} from './NotchSelectionHeader'
import {Notch} from '../../core/_models'

const NotchsColumns: ReadonlyArray<Column<Notch>> = [
  {
    Header: (props) => <NotchSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <NotchSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <NotchCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <NotchInfoCell notch={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <NotchCustomHeader tableProps={props} title='Salary Grade' className='min-w-125px' />,
    accessor: 'salaryGrade',
  },
  {
    Header: (props) => <NotchCustomHeader tableProps={props} title='Annual' className='min-w-125px' />,
    accessor: 'annual',
  },
  {
    Header: (props) => <NotchCustomHeader tableProps={props} title='Monthly' className='min-w-125px' />,
    accessor: 'monthly',
  },
  {
    Header: (props) => <NotchCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  // {
  //   Header: (props) => (
  //     <NotchCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <NotchLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <NotchCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <NotchTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <NotchCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <NotchCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <NotchActionsCell id={props.data[props.row.index].id} />,
  },
]

export {NotchsColumns}
