// @ts-nocheck
import {Column} from 'react-table'
import {NationalityInfoCell} from './NationalityInfoCell'
import {NationalityLastLoginCell} from './NationalityLastLoginCell'
import {NationalityTwoStepsCell} from './NationalityTwoStepsCell'
import {NationalityActionsCell} from './NationalityActionsCell'
import {NationalitySelectionCell} from './NationalitySelectionCell'
import {NationalityCustomHeader} from './NationalityCustomHeader'
import {NationalitySelectionHeader} from './NationalitySelectionHeader'
import {Nationality} from '../../core/_models'

const nationalityColumns: ReadonlyArray<Column<Nationality>> = [
  {
    Header: (props) => <NationalitySelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <NationalitySelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <NationalityCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <NationalityInfoCell nationality={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <NationalityCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <NationalityCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <NationalityLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <NationalityCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <NationalityTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <NationalityCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <NationalityCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <NationalityActionsCell id={props.data[props.row.index].id} />,
  },
]

export {nationalityColumns}
