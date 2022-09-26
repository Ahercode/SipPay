import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {PeriodsListWrapper} from './periods-list/PeriodsList'

const PeriodsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Periods',
    path: '/apps/setups/payroll/period/periods',
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

const PeriodsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='periods'
          element={
            <>
              <PageTitle breadcrumbs={PeriodsBreadcrumbs}>All Period</PageTitle>
              <PeriodsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/period/periods' />} />
    </Routes>
  )
}

export default PeriodsPage
