// @ts-nocheck
import {Column} from 'react-table'
import {BenefitInfoCell} from './BenefitInfoCell'
// import {BenefitLastLoginCell} from './BenefitLastLoginCell'
// import {BenefitTwoStepsCell} from './BenefitTwoStepsCell'
import {BenefitActionsCell} from './BenefitActionsCell'
import {BenefitSelectionCell} from './BenefitSelectionCell'
import {BenefitCustomHeader} from './BenefitCustomHeader'
import {BenefitSelectionHeader} from './BenefitSelectionHeader'
import {Benefit} from '../../core/_models'

const benefitColumns: ReadonlyArray<Column<Benefit>> = [
  {
    Header: (props) => <BenefitSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <BenefitSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <BenefitCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <BenefitInfoCell benefit={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <BenefitCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <BenefitCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <BenefitLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <BenefitCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <BenefitTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <BenefitCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <BenefitCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <BenefitActionsCell id={props.data[props.row.index].id} />,
  },
]

export {benefitColumns}
