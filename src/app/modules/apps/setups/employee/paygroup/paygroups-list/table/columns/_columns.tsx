// @ts-nocheck
import {Column} from 'react-table'
import {PaygroupInfoCell} from './PaygroupInfoCell'
import {PaygroupLastLoginCell} from './PaygroupLastLoginCell'
import {PaygroupTwoStepsCell} from './PaygroupTwoStepsCell'
import {PaygroupActionsCell} from './PaygroupActionsCell'
import {PaygroupSelectionCell} from './PaygroupSelectionCell'
import {PaygroupCustomHeader} from './PaygroupCustomHeader'
import {PaygroupSelectionHeader} from './PaygroupSelectionHeader'
import {Paygroup} from '../../core/_models'

const paygroupsColumns: ReadonlyArray<Column<Paygroup>> = [
  {
    Header: (props) => <PaygroupSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <PaygroupSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <PaygroupCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <PaygroupInfoCell paygroup={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <PaygroupCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <PaygroupCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  // {
  //   Header: (props) => (
  //     <PaygroupCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <PaygroupLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <PaygroupCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <PaygroupTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <PaygroupCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <PaygroupCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <PaygroupActionsCell id={props.data[props.row.index].id} />,
  },
]

export {paygroupsColumns}
