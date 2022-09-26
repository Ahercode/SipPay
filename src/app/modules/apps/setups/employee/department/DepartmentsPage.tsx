import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {DepartmentsListWrapper} from './departments-list/DepartmentsList'

const DepartmentsBreadcrumbs: Array<PageLink> = [
  {
    title: 'departments',
    path: '/apps/setups/employee/department/departments',
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

const DepartmentsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='departments'
          element={
            <>
              <PageTitle breadcrumbs={DepartmentsBreadcrumbs}>All Department</PageTitle>
              <DepartmentsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/department/departments' />} />
    </Routes>
  )
}

export default DepartmentsPage
