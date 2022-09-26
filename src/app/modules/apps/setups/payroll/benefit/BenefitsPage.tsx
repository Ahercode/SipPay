import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {BenefitsListWrapper} from './benefits-list/BenefitsList'

const BenefitsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Benefits',
    path: '/apps/setups/payroll/benefit/benefits',
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

const BenefitPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='Benefits'
          element={
            <>
              <PageTitle breadcrumbs={BenefitsBreadcrumbs}>All Benefit</PageTitle>
              <BenefitsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/benefit/benefits' />} />
    </Routes>
  )
}

export default BenefitPage
