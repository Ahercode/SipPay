import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {RegionsListWrapper} from './regions-list/RegionsList'

const RegionsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Regions',
    path: '/apps/setups/employee/region/regions',
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

const RegionsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='Regions'
          element={
            <>
              <PageTitle breadcrumbs={RegionsBreadcrumbs}>All Region</PageTitle>
              <RegionsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/region/regions' />} />
    </Routes>
  )
}

export default RegionsPage
