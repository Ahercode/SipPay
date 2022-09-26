import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {NotchsListWrapper} from './notchs-list/NotchsList'

const NotchsBreadcrumbs: Array<PageLink> = [
  {
    title: 'notchs',
    path: '/apps/setups/employee/notch/notchs',
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

const NotchsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='notchs'
          element={
            <>
              <PageTitle breadcrumbs={NotchsBreadcrumbs}>All Notch</PageTitle>
              <NotchsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/notch/notchs' />} />
    </Routes>
  )
}

export default NotchsPage
