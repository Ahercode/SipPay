import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {LoansListWrapper} from './loans-list/LoansList'

const LoansBreadcrumbs: Array<PageLink> = [
  {
    title: 'Loans',
    path: '/apps/setups/payroll/loan/loans',
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

const LoansPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='Loans'
          element={
            <>
              <PageTitle breadcrumbs={LoansBreadcrumbs}>All Loan</PageTitle>
              <LoansListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/loan/loans' />} />
    </Routes>
  )
}

export default LoansPage
