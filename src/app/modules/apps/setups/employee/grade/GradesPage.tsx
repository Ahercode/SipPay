import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {GradesListWrapper} from './grades-list/GradesList'

const GradesBreadcrumbs: Array<PageLink> = [
  {
    title: 'grades',
    path: '/apps/setups/employee/grade/grades',
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

const GradesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='grades'
          element={
            <>
              <PageTitle breadcrumbs={GradesBreadcrumbs}>All Grade</PageTitle>
              <GradesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/grade/grades' />} />
    </Routes>
  )
}

export default GradesPage
