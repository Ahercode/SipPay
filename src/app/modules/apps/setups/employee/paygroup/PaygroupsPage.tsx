import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import { PaygroupsListWrapper } from './paygroups-list/PaygroupsList'


const paygroupsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Paygroup',
    path: '/apps/setups/employee/paygroup/paygroups',
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

const PaygroupsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='paygroups'
          element={
            <>
              <PageTitle breadcrumbs={paygroupsBreadcrumbs}>All Paygroup</PageTitle>
              <PaygroupsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/paygroup/paygroups' />} />
    </Routes>
  )
}

export default PaygroupsPage
