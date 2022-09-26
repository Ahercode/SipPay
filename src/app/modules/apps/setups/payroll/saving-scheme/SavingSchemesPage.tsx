import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {SavingSchemesListWrapper} from './savingSchemes-list/SavingSchemesList'

const SavingSchemesBreadcrumbs: Array<PageLink> = [
  {
    title: 'SavingSchemes',
    path: '/apps/setups/payroll/saving-scheme/savingSchemes',
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

const SavingSchemesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='savingSchemes'
          element={
            <>
              <PageTitle breadcrumbs={SavingSchemesBreadcrumbs}>All Saving Scheme</PageTitle>
              <SavingSchemesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/saving-scheme/savingSchemes' />} />
    </Routes>
  )
}

export default SavingSchemesPage
