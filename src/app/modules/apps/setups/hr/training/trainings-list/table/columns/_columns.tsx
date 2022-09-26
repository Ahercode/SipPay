// @ts-nocheck
import {Column} from 'react-table'
import {TrainingInfoCell} from './TrainingInfoCell'
// import {TrainingLastLoginCell} from './TrainingLastLoginCell'
// import {TrainingTwoStepsCell} from './TrainingTwoStepsCell'
import {TrainingActionsCell} from './TrainingActionsCell'
import {TrainingSelectionCell} from './TrainingSelectionCell'
import {TrainingCustomHeader} from './TrainingCustomHeader'
import {TrainingSelectionHeader} from './TrainingSelectionHeader'
import {Training} from '../../core/_models'

const trainingsColumns: ReadonlyArray<Column<Training>> = [
  {
    Header: (props) => <TrainingSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <TrainingSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <TrainingCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <TrainingInfoCell training={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <TrainingCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <TrainingCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <TrainingLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <TrainingCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <TrainingTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <TrainingCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <TrainingCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <TrainingActionsCell id={props.data[props.row.index].id} />,
  },
]

export {trainingsColumns}
