import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {OvertimesListWrapper} from './overtimes-list/OvertimesList'

const OvertimesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Overtimes',
    path: '/apps/setups/payroll/overtime/overtimes',
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

const OvertimesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='overtimes'
          element={
            <>
              <PageTitle breadcrumbs={OvertimesBreadcrumbs}>All Overtime</PageTitle>
              <OvertimesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/overtime/overtimes' />} />
    </Routes>
  )
}

export default OvertimesPage
