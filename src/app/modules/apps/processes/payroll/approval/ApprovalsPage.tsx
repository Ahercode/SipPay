import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {ApprovalsListWrapper} from './approvals-list/ApprovalsList'

const ApprovalsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Approvals',
    path: '/apps/approval/approvals',
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

const ApprovalsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='approvals'
          element={
            <>
              <PageTitle breadcrumbs={ApprovalsBreadcrumbs}>All Approval</PageTitle>
              <ApprovalsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/approval/approvals' />} />
    </Routes>
  )
}

export default ApprovalsPage
