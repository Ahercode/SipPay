// @ts-nocheck
import {Column} from 'react-table'
import {SalaryUpgradeInfoCell} from './SalaryUpgradeInfoCell'
// import {SalaryUpgradeLastLoginCell} from './SalaryUpgradeLastLoginCell'
// import {SalaryUpgradeTwoStepsCell} from './SalaryUpgradeTwoStepsCell'
import {SalaryUpgradeActionsCell} from './SalaryUpgradeActionsCell'
import {SalaryUpgradeSelectionCell} from './SalaryUpgradeSelectionCell'
import {SalaryUpgradeCustomHeader} from './SalaryUpgradeCustomHeader'
import {SalaryUpgradeSelectionHeader} from './SalaryUpgradeSelectionHeader'
import {SalaryUpgrade} from '../../core/_models'

const salaryUpgradesColumns: ReadonlyArray<Column<SalaryUpgrade>> = [
  {
    Header: (props) => <SalaryUpgradeSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SalaryUpgradeSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <SalaryUpgradeCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <SalaryUpgradeInfoCell salaryUpgrade={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <SalaryUpgradeCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <SalaryUpgradeCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <SalaryUpgradeLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <SalaryUpgradeCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <SalaryUpgradeTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <SalaryUpgradeCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <SalaryUpgradeCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <SalaryUpgradeActionsCell id={props.data[props.row.index].id} />,
  },
]

export {salaryUpgradesColumns}
