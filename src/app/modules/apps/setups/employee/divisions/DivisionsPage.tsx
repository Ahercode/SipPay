import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {DivisionsListWrapper} from './divisions-list/DivisionsList'

const divisionsBreadcrumbs: Array<PageLink> = [
  {
    title: 'divisions',
    path: '/apps/setups/employee/division/divisions',
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

const DivisionsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='divisions'
          element={
            <>
              <PageTitle breadcrumbs={divisionsBreadcrumbs}>All Division</PageTitle>
              <DivisionsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/division/divisions' />} />
    </Routes>
  )
}

export default DivisionsPage
