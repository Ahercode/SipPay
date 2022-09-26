import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {SalaryUpgradesListWrapper} from './salaryUpgrades-list/SalaryUpgradesList'

const salaryUpgradesBreadcrumbs: Array<PageLink> = [
  {
    title: 'SalaryUpgrades',
    path: '/apps/setups/employee/salary-upgrade/salaryUpgrades',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const SalaryUpgradesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='salaryUpgrades'
          element={
            <>
              <PageTitle breadcrumbs={salaryUpgradesBreadcrumbs}>All Salary Upgrade</PageTitle>
              <SalaryUpgradesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/salary-upgrade/salaryUpgrades' />} />
    </Routes>
  )
}

export default SalaryUpgradesPage
