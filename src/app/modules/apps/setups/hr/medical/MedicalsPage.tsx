import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {MedicalsListWrapper} from './medicals-list/MedicalsList'

const MedicalsBreadcrumbs: Array<PageLink> = [
  {
    title: 'medicals',
    path: '/apps/setups/hr/medical/medicals',
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

const MedicalsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='medicals'
          element={
            <>
              <PageTitle breadcrumbs={MedicalsBreadcrumbs}>All Medical</PageTitle>
              <MedicalsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/hr/medical/medicals' />} />
    </Routes>
  )
}

export default MedicalsPage
