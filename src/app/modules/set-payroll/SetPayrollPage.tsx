import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {ApprovalLevel} from './components/ApprovalLevel'
import {Benefits} from './components/Benefits'
import {Currency} from './components/Currency'
import {Deduction} from './components/Deduction'
import {Loan} from './components/Loan'
import {Overtime} from './components/Overtime'
import {Parameters} from './components/Parameters'
import {SavingScheme} from './components/SavingScheme'
import {Tax} from './components/Tax'

const setpayrollBreadCrumbs: Array<PageLink> = [
  {
    title: 'Setup Payroll',
    path: '/crafted/set-payroll/charts',
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

const SetPayrollPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='approval-level'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Approval Level</PageTitle>
              <ApprovalLevel />
            </>
          }
        />
        <Route
          path='benefits'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Benefits</PageTitle>
              <Benefits />
            </>
          }
        />
        <Route
          path='currency'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Currency</PageTitle>
              <Currency />
            </>
          }
        />
        <Route
          path='savingscheme'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Saving Scheme</PageTitle>
              <SavingScheme />
            </>
          }
        />
        <Route
          path='deduction'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Deductions</PageTitle>
              <Deduction />
            </>
          }
        />
        <Route
          path='tax'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Taxes</PageTitle>
              <Tax />
            </>
          }
        />
        
        <Route
          path='loan'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Loans</PageTitle>
              <Loan />
            </>
          }
        />
        <Route
          path='overtime'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Overtime</PageTitle>
              <Overtime />
            </>
          }
        />
        <Route
          path='parameters'
          element={
            <>
              <PageTitle breadcrumbs={setpayrollBreadCrumbs}>Parameters</PageTitle>
              <Parameters />
            </>
          }
        />
        {/* <Route
          path='overtime'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Overtimes</PageTitle>
              <Overtime />
            </>
          }
        /> */}
        <Route index element={<Navigate to='/crafted/setpayroll/benefits' />} />
      </Route>
    </Routes>
  )
}

export default SetPayrollPage
