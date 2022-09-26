import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {TaxsListWrapper} from './taxs-list/TaxsList'

const TaxsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Setup > Payroll',
    path: '/apps/setups/payroll/tax/taxs',
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

const TaxsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='taxs'
          element={
            <>
              <PageTitle breadcrumbs={TaxsBreadcrumbs}>All Tax</PageTitle>
              <TaxsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/tax/taxs' />} />
    </Routes>
  )
}

export default TaxsPage
