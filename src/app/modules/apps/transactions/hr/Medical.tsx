import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'

import { TablesWidget6 } from '../../../../../_metronic/partials/widgets'
// import TestPage from './test'


const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Test',
    path: '/apps/transactions/hr/table',
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

const TestMedicalPage = () => {
  return (
    <Routes>
    <Route element={<Outlet />}>
    <Route
          path='table'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Tables</PageTitle>
              {/* <TablesWidget6 className='card-xl-stretch mb-5 mb-xl-8' /> */}
              {/* <TestPage className='card-xl-stretch mb-5 mb-xl-8' /> */}
            </>
          }
        />
    </Route>
    <Route index element={<Navigate to='/apps/transactions/hr/table' />} />
    </Routes>
  )
}

export default TestMedicalPage
