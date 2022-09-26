import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {BanksListWrapper} from './banks-list/BanksList'

const banksBreadcrumbs: Array<PageLink> = [
  {
    title: 'Banks',
    path: '/apps/bank/banks',
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

const BanksPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='banks'
          element={
            <>
              <PageTitle breadcrumbs={banksBreadcrumbs}>All Bank</PageTitle>
              <BanksListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/bank/banks' />} />
    </Routes>
  )
}

export default BanksPage
