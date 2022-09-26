import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {ApprovalLevelsListWrapper} from './approvalLevels-list/ApprovalLevelsList'

const ApprovalLevelsBreadcrumbs: Array<PageLink> = [
  {
    title: 'ApprovalLevels',
    path: '/apps/setups/payroll/approval-level/approvalLevels',
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

const ApprovalLevelsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='approvalLevels'
          element={
            <>
              <PageTitle breadcrumbs={ApprovalLevelsBreadcrumbs}>All ApprovalLevel</PageTitle>
              <ApprovalLevelsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/approval-level/approvalLevels' />} />
    </Routes>
  )
}

export default ApprovalLevelsPage
