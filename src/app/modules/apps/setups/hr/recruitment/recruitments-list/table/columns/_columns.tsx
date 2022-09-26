// @ts-nocheck
import {Column} from 'react-table'
import {RecruitmentInfoCell} from './RecruitmentInfoCell'
// import {RecruitmentLastLoginCell} from './RecruitmentLastLoginCell'
// import {RecruitmentTwoStepsCell} from './RecruitmentTwoStepsCell'
import {RecruitmentActionsCell} from './RecruitmentActionsCell'
import {RecruitmentSelectionCell} from './RecruitmentSelectionCell'
import {RecruitmentCustomHeader} from './RecruitmentCustomHeader'
import {RecruitmentSelectionHeader} from './RecruitmentSelectionHeader'
import {Recruitment} from '../../core/_models'

const recruitmentsColumns: ReadonlyArray<Column<Recruitment>> = [
  {
    Header: (props) => <RecruitmentSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <RecruitmentSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <RecruitmentCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <RecruitmentInfoCell recruitment={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <RecruitmentCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <RecruitmentCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <RecruitmentLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <RecruitmentCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <RecruitmentTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <RecruitmentCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <RecruitmentCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <RecruitmentActionsCell id={props.data[props.row.index].id} />,
  },
]

export {recruitmentsColumns}
