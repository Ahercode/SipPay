import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Category} from './components/Category'
import {JobTitle} from './components/JobTitle'
import {Region} from './components/Region'
import {Paygroup} from './components/Paygroup'
import {Nationality} from './components/Nationality'
import {PaymentMethods} from './components/PaymentMethods'

const employeeBreadCrumbs: Array<PageLink> = [
  {
    title: 'Employee Setup',
    path: '/crafted/employee/categories',
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

const EmployeePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='paygroup'
          element={
            <>
              <PageTitle breadcrumbs={employeeBreadCrumbs}>Paygroup</PageTitle>
              <Paygroup />
            </>
          }
        />
        <Route
          path='nationality'
          element={
            <>
              <PageTitle breadcrumbs={employeeBreadCrumbs}>Nationality</PageTitle>
              <Nationality />
            </>
          }
        />
        <Route
          path='region'
          element={
            <>
              <PageTitle breadcrumbs={employeeBreadCrumbs}>Regions</PageTitle>
              <Region />
            </>
          }
        />
        <Route
          path='paymentmethod'
          element={
            <>
              <PageTitle breadcrumbs={employeeBreadCrumbs}>Payment Methods</PageTitle>
              <PaymentMethods />
            </>
          }
        />
        <Route
          path='categories'
          element={
            <>
              <PageTitle breadcrumbs={employeeBreadCrumbs}>Categories</PageTitle>
              <Category />
            </>
          }
        />
        <Route
          path='jobtitle'
          element={
            <>
              <PageTitle breadcrumbs={employeeBreadCrumbs}>Job Titles</PageTitle>
              <JobTitle />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/employee/categories' />} />
      </Route>
    </Routes>
  )
}

export default EmployeePage
