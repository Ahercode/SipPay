import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {NationalityListWrapper} from './nationality-list/NationalityList'

const nationalityBreadcrumbs: Array<PageLink> = [
  {
    title: 'Nationality',
    path: '/apps/setups/employee/nationality/nationalitys',
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

const NationalityPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='nationalitys'
          element={
            <>
              <PageTitle breadcrumbs={nationalityBreadcrumbs}>All Bank</PageTitle>
              <NationalityListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/nationality/nationalitys' />} />
    </Routes>
  )
}

export default NationalityPage
