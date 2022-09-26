// @ts-nocheck
import {Column} from 'react-table'
import {CategoryInfoCell} from './CategoryInfoCell'
// import {CategoryLastLoginCell} from './CategoryLastLoginCell'
// import {CategoryTwoStepsCell} from './CategoryTwoStepsCell'
import {CategoryActionsCell} from './CategoryActionsCell'
import {CategorySelectionCell} from './CategorySelectionCell'
import {CategoryCustomHeader} from './CategoryCustomHeader'
import {CategorySelectionHeader} from './CategorySelectionHeader'
import {Category} from '../../core/_models'

const categoryColumns: ReadonlyArray<Column<Category>> = [
  {
    Header: (props) => <CategorySelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <CategorySelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CategoryCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <CategoryInfoCell category={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <CategoryCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  // {
  //   Header: (props) => (
  //     <CategoryCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <CategoryLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <CategoryCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <CategoryTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <CategoryCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <CategoryCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <CategoryActionsCell id={props.data[props.row.index].id} />,
  },
]

export {categoryColumns}
