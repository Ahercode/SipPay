import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {AuditsListWrapper} from './audits-list/AuditsList'

const auditsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Audits',
    path: '/apps/setups/administration/audit/audits',
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

const AuditsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='audits'
          element={
            <>
              <PageTitle breadcrumbs={auditsBreadcrumbs}>All Audit</PageTitle>
              <AuditsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/administration/audit/audits' />} />
    </Routes>
  )
}

export default AuditsPage
