import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {ConfigsListWrapper} from './configs-list/ConfigsList'

const ConfigsBreadcrumbs: Array<PageLink> = [
  {
    title: 'configs',
    path: '/apps/setups/administration/config/configs',
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

const ConfigsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='configs'
          element={
            <>
              <PageTitle breadcrumbs={ConfigsBreadcrumbs}>All Config</PageTitle>
              <ConfigsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/administration/config/configs' />} />
    </Routes>
  )
}

export default ConfigsPage
