import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Approval} from './components/Approval'
import {CheckTax} from './components/CheckTax'
import {Journal} from './components/Journal'
import {Payrun} from './components/Payrun'
import {ProjectSheetInput} from './components/ProjectSheetInput'
// import {Statistics} from './components/Statistics'

const payrollBreadCrumbs: Array<PageLink> = [
  {
    title: 'Payroll',
    path: '/crafted/pro-payroll/approval',
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

const ProPayrollPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='approvals'
          element={
            <>
              <PageTitle breadcrumbs={payrollBreadCrumbs}>Approvals</PageTitle>
              <Approval />
            </>
          }
        />
        <Route
          path='checktaxs'
          element={
            <>
              <PageTitle breadcrumbs={payrollBreadCrumbs}>Check Taxes</PageTitle>
              <CheckTax />
            </>
          }
        />
        <Route
          path='journals'
          element={
            <>
              <PageTitle breadcrumbs={payrollBreadCrumbs}>Journals</PageTitle>
              <Journal />
            </>
          }
        />
        <Route
          path='projectsheetinputs'
          element={
            <>
              <PageTitle breadcrumbs={payrollBreadCrumbs}>Project Sheets and Inputs</PageTitle>
              <ProjectSheetInput />
            </>
          }
        />
        <Route
          path='payruns'
          element={
            <>
              <PageTitle breadcrumbs={payrollBreadCrumbs}>Payrun</PageTitle>
              <Payrun />
            </>
          }
        />
        {/* <Route
          path='statistics'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Statiscics</PageTitle>
              <Statistics />
            </>
          }
        /> */}
        <Route index element={<Navigate to='/crafted/pro-payroll/approvals' />} />
      </Route>
    </Routes>
  )
}

export default ProPayrollPage
