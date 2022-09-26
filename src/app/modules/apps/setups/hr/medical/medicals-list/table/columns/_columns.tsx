// @ts-nocheck
import {Column} from 'react-table'
import {MedicalInfoCell} from './MedicalInfoCell'
import {MedicalLastLoginCell} from './MedicalLastLoginCell'
import {MedicalTwoStepsCell} from './MedicalTwoStepsCell'
import {MedicalActionsCell} from './MedicalActionsCell'
import {MedicalSelectionCell} from './MedicalSelectionCell'
import {MedicalCustomHeader} from './MedicalCustomHeader'
import {MedicalSelectionHeader} from './MedicalSelectionHeader'
import {Medical} from '../../core/_models'

const medicalsColumns: ReadonlyArray<Column<Medical>> = [
  {
    Header: (props) => <MedicalSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <MedicalSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <MedicalCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <MedicalInfoCell medical={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <MedicalCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <MedicalCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <MedicalLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <MedicalCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <MedicalTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <MedicalCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <MedicalCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <MedicalActionsCell id={props.data[props.row.index].id} />,
  },
]

export {medicalsColumns}
