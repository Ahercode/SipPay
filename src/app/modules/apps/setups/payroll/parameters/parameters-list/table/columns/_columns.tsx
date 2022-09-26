// @ts-nocheck
import {Column} from 'react-table'
import {ParameterInfoCell} from './ParameterInfoCell'
// import {ParameterLastLoginCell} from './ParameterLastLoginCell'
// import {ParameterTwoStepsCell} from './ParameterTwoStepsCell'
import {ParameterActionsCell} from './ParameterActionsCell'
import {ParameterSelectionCell} from './ParameterSelectionCell'
import {ParameterCustomHeader} from './ParameterCustomHeader'
import {ParameterSelectionHeader} from './ParameterSelectionHeader'
import {Parameter} from '../../core/_models'

const parametersColumns: ReadonlyArray<Column<Parameter>> = [
  {
    Header: (props) => <ParameterSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <ParameterSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <ParameterCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <ParameterInfoCell parameter={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ParameterCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <ParameterCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <ParameterLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <ParameterCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ParameterTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <ParameterCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <ParameterCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ParameterActionsCell id={props.data[props.row.index].id} />,
  },
]

export {parametersColumns}
