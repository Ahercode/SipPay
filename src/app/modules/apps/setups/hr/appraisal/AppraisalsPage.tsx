import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {AppraisalsListWrapper} from './appraisals-list/AppraisalsList'

const AppraisalsBreadcrumbs: Array<PageLink> = [
  {
    title: 'appraisals',
    path: '/apps/setups/hr/appraisal/appraisals',
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

const AppraisalsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='appraisals'
          element={
            <>
              <PageTitle breadcrumbs={AppraisalsBreadcrumbs}>All Appraisal</PageTitle>
              <AppraisalsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/hr/appraisal/appraisals' />} />
    </Routes>
  )
}

export default AppraisalsPage
