import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {DeductionsListWrapper} from './deductions-list/DeductionsList'

const DeductionsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Deductions',
    path: '/apps/setups/payroll/deduction/deductions',
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

const DeductionsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='deductions'
          element={
            <>
              <PageTitle breadcrumbs={DeductionsBreadcrumbs}>All Deduction</PageTitle>
              <DeductionsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/deduction/deductions' />} />
    </Routes>
  )
}

export default DeductionsPage
