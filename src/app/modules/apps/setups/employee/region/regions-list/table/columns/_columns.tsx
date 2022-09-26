// @ts-nocheck
import {Column} from 'react-table'
import {RegionInfoCell} from './RegionInfoCell'
import {RegionLastLoginCell} from './RegionLastLoginCell'
import {RegionTwoStepsCell} from './RegionTwoStepsCell'
import {RegionActionsCell} from './RegionActionsCell'
import {RegionSelectionCell} from './RegionSelectionCell'
import {RegionCustomHeader} from './RegionCustomHeader'
import {RegionSelectionHeader} from './RegionSelectionHeader'
import {Region} from '../../core/_models'

const regionsColumns: ReadonlyArray<Column<Region>> = [
  {
    Header: (props) => <RegionSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <RegionSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <RegionCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <RegionInfoCell region={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <RegionCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <RegionCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <RegionLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <RegionCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <RegionTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <RegionCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <RegionCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <RegionActionsCell id={props.data[props.row.index].id} />,
  },
]

export {regionsColumns}
