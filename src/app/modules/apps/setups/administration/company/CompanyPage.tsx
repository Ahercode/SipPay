import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {CompanyListWrapper} from './company-list/CompanyList'

const CompanyBreadcrumbs: Array<PageLink> = [
  {
    title: 'company',
    path: '/apps/setups/administration/comapany/companys',
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

const CompanyPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='companys'
          element={
            <>
              <PageTitle breadcrumbs={CompanyBreadcrumbs}>All Company</PageTitle>
              <CompanyListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/administration/company/companys' />} />
    </Routes>
  )
}

export default CompanyPage
