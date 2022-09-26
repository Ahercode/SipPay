import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Audit} from './components/Audit'
import {Company} from './components/Company'
import {Config} from './components/Config'
import {UserManagement} from './components/UserManagement'
// import {Mixed} from './components/Mixed'
// import {Statistics} from './components/Statistics'

const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Administration',
    path: '/crafted/administration',
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

const AdministrationPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='audit'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Audits</PageTitle>
              <Audit />
            </>
          }
        />
        <Route
          path='company'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Companies</PageTitle>
              <Company />
            </>
          }
        />
        <Route
          path='config'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Configurations</PageTitle>
              <Config />
            </>
          }
        />
        <Route
          path='usermanagement'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>User Management</PageTitle>
              <UserManagement />
            </>
          }
        />
        {/* <Route
          path='tables'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Tables</PageTitle>
              <Tables />
            </>
          }
        />
        <Route
          path='statistics'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Statiscics</PageTitle>
              <Statistics />
            </>
          }
        /> */}
        <Route index element={<Navigate to='/crafted/administration/company' />} />
      </Route>
    </Routes>
  )
}

export default AdministrationPage
