import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {CurrencyListWrapper} from './currency-list/CurrencyList'

const currencyBreadcrumbs: Array<PageLink> = [
  {
    title: 'Currencys',
    path: '/apps/setups/payroll/currency/currencys',
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

const CurrencyPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='currencys'
          element={
            <>
              <PageTitle breadcrumbs={currencyBreadcrumbs}>All Currency</PageTitle>
              <CurrencyListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/currency/currencys' />} />
    </Routes>
  )
}

export default CurrencyPage
