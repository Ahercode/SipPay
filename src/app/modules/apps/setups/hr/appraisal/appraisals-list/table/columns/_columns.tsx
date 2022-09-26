// @ts-nocheck
import {Column} from 'react-table'
import {AppraisalInfoCell} from './AppraisalInfoCell'
import {AppraisalLastLoginCell} from './AppraisalLastLoginCell'
import {AppraisalTwoStepsCell} from './AppraisalTwoStepsCell'
import {AppraisalActionsCell} from './AppraisalActionsCell'
import {AppraisalSelectionCell} from './AppraisalSelectionCell'
import {AppraisalCustomHeader} from './AppraisalCustomHeader'
import {AppraisalSelectionHeader} from './AppraisalSelectionHeader'
import {Appraisal} from '../../core/_models'

const appraisalsColumns: ReadonlyArray<Column<Appraisal>> = [
  {
    Header: (props) => <AppraisalSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <AppraisalSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <AppraisalCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <AppraisalInfoCell appraisal={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <AppraisalCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <AppraisalCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <AppraisalLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <AppraisalCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <AppraisalTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <AppraisalCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <AppraisalCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <AppraisalActionsCell id={props.data[props.row.index].id} />,
  },
]

export {appraisalsColumns}
