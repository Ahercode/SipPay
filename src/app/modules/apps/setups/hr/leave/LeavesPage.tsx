import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {LeavesListWrapper} from './leaves-list/LeavesList'

const LeavesBreadcrumbs: Array<PageLink> = [
  {
    title: 'leaves',
    path: '/apps/setups/hr/leave/leaves',
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

const LeavesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='leaves'
          element={
            <>
              <PageTitle breadcrumbs={LeavesBreadcrumbs}>All Leave</PageTitle>
              <LeavesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/hr/leave/leaves' />} />
    </Routes>
  )
}

export default LeavesPage
