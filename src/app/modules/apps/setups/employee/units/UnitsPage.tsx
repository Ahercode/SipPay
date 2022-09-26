import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {UnitsListWrapper} from './units-list/UnitsList'

const UnitsBreadcrumbs: Array<PageLink> = [
  {
    title: 'units',
    path: '/apps/setups/employee/unit/units',
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

const UnitsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='units'
          element={
            <>
              <PageTitle breadcrumbs={UnitsBreadcrumbs}>All Unit</PageTitle>
              <UnitsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/unit/units' />} />
    </Routes>
  )
}

export default UnitsPage
