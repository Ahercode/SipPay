import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {DisciplinaryActionsListWrapper} from './disciplinaryActions-list/DisciplinaryActionsList'

const disciplinaryActionsBreadcrumbs: Array<PageLink> = [
  {
    title: 'disciplinaryActions',
    path: '/apps/setups/hr/disciplinary-actions/disciplinaryActions',
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

const DisciplinaryActionsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='disciplinaryActions'
          element={
            <>
              <PageTitle breadcrumbs={disciplinaryActionsBreadcrumbs}>All Disciplinary Action</PageTitle>
              <DisciplinaryActionsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/hr/disciplinary-actions/disciplinaryActions' />} />
    </Routes>
  )
}

export default DisciplinaryActionsPage
