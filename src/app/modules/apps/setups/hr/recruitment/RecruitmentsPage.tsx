import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {RecruitmentsListWrapper} from './recruitments-list/RecruitmentsList'

const recruitmentsBreadcrumbs: Array<PageLink> = [
  {
    title: 'recruitments',
    path: '/apps/setups/hr/recruitment/recruitments',
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

const RecruitmentsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='recruitments'
          element={
            <>
              <PageTitle breadcrumbs={recruitmentsBreadcrumbs}>All Recruitment</PageTitle>
              <RecruitmentsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/hr/recruitment/recruitments' />} />
    </Routes>
  )
}

export default RecruitmentsPage
