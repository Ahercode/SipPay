import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {ParametersListWrapper} from './parameters-list/ParametersList'

const ParametersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Parameters',
    path: '/apps/setups/payroll/parameters/parameters',
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

const ParametersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='parameters'
          element={
            <>
              <PageTitle breadcrumbs={ParametersBreadcrumbs}>All Parameter</PageTitle>
              <ParametersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/payroll/parameters/parameters' />} />
    </Routes>
  )
}

export default ParametersPage
