import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import TranHumanResource from '../modules/tran-human-resource/TranHumanResourcePage'
import BanksPage from '../modules/apps/bank/BanksPage'
// import { Paygroup } from '../modules/employee/components/Paygroup'
import PaygroupsPage from '../modules/apps/setups/employee/paygroup/PaygroupsPage'

import CategoryPage from '../modules/apps/setups/employee/category/CategorysPage'
import DepartmentsPage from '../modules/apps/setups/employee/department/DepartmentsPage'
import NotchsPage from '../modules/apps/setups/employee/notch/NotchsPage'
import RegionsPage from '../modules/apps/setups/employee/region/RegionsPage'
import SalaryUpgradesPage from '../modules/apps/setups/employee/salary-upgrade/SalaryUpgradesPage'
import UnitsPage from '../modules/apps/setups/employee/units/UnitsPage'
import NationalityPage from '../modules/apps/setups/employee/nationality/NationalityPage'
import JobtitlesPage from '../modules/apps/setups/employee/jobtitle/JobtitlesPage'
import DivisionsPage from '../modules/apps/setups/employee/divisions/DivisionsPage'
import GradesPage from '../modules/apps/setups/employee/grade/GradesPage'
import RecruitmentsPage from '../modules/apps/setups/hr/recruitment/RecruitmentsPage'
import MedicalsPage from '../modules/apps/setups/hr/medical/MedicalsPage'
import LeavesPage from '../modules/apps/setups/hr/leave/LeavesPage'
import AppraisalsPage from '../modules/apps/setups/hr/appraisal/AppraisalsPage'
import TrainingsPage from '../modules/apps/setups/hr/training/TrainingsPage'
import DisciplinaryActionsPage from '../modules/apps/setups/hr/disciplinary-actions/DisciplinaryActionsPage'
import ConfigsPage from '../modules/apps/setups/administration/config/ConfigsPage'
import CompanyPage from '../modules/apps/setups/administration/company/CompanyPage'
import AuditsPage from '../modules/apps/setups/administration/audit/AuditsPage'
import BenefitPage from '../modules/apps/setups/payroll/benefit/BenefitsPage'
import CurrencyPage from '../modules/apps/setups/payroll/currency/CurrencyPage'
import DeductionsPage from '../modules/apps/setups/payroll/deduction/DeductionsPage'
import LoansPage from '../modules/apps/setups/payroll/loan/LoansPage'
import OvertimesPage from '../modules/apps/setups/payroll/overtime/OvertimesPage'
import ParametersPage from '../modules/apps/setups/payroll/parameters/ParametersPage'
import PeriodsPage from '../modules/apps/setups/payroll/period/PeriodsPage'
import SavingSchemesPage from '../modules/apps/setups/payroll/saving-scheme/SavingSchemesPage'
import TaxsPage from '../modules/apps/setups/payroll/tax/TaxsPage'
import ApprovalLevelsPage from '../modules/apps/setups/payroll/approval-level/ApprovalLevelsPage'
import { Horizontal } from '../modules/wizards/components/Horizontal'
import { Tables } from '../modules/tran-payroll/components/Tables'
import { TablesWidget6 } from '../../_metronic/partials/widgets'
import TestMedicalPage from '../modules/apps/transactions/hr/Medical'


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AdministrationPage = lazy(() => import('../modules/administration/AdministrationPage'))
  const EmployeePage = lazy(() => import('../modules/employee/EmployeePage'))
  const ProPayrollPage = lazy(() => import('../modules/pro-payroll/ProPayrollPage'))
  const SetPayrollPage = lazy(() => import('../modules/set-payroll/SetPayrollPage'))
  const TranPayrollPage = lazy(() => import('../modules/tran-payroll/TranPayrollPage'))
  const SetHumanResourcePage = lazy(() => import('../modules/set-human-resource/SetHumanResourcePage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/pro-human-resource/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/administration/*'
          element={
            <SuspensedView>
              <AdministrationPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/employee/*'
          element={
            <SuspensedView>
              <EmployeePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pro-payroll/*'
          element={
            <SuspensedView>
              <ProPayrollPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/set-payroll/*'
          element={
            <SuspensedView>
              <SetPayrollPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/tran-payroll/*'
          element={
            <SuspensedView>
              <TranPayrollPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/tran-human-resource/*'
          element={
            <SuspensedView>
              <TranHumanResource />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/set-human-resource/*'
          element={
            <SuspensedView>
              <SetHumanResourcePage />
            </SuspensedView>
          }
        />
        
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/userform/components/*'
          element={
            <SuspensedView>
              <Horizontal />
            </SuspensedView>
          }
        />
        <Route
          path='apps/bank/*'
          element={
            <SuspensedView>
              <BanksPage />
            </SuspensedView>
          }
        />
        {/* routes for setup - employee routes */}
        <Route
          path='apps/setups/employee/paygroup/*'
          element={
            <SuspensedView>
              <PaygroupsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/category/*'
          element={
            <SuspensedView>
              <CategoryPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/department/*'
          element={
            <SuspensedView>
              <DepartmentsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/notch/*'
          element={
            <SuspensedView>
              <NotchsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/region/*'
          element={
            <SuspensedView>
              <RegionsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/salary-upgrade/*'
          element={
            <SuspensedView>
              <SalaryUpgradesPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/unit/*'
          element={
            <SuspensedView>
              <UnitsPage />
            </SuspensedView>
          }
        />

        
        <Route
          path='apps/setups/employee/nationality/*'
          element={
            <SuspensedView>
              <NationalityPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/jobtitle/*'
          element={
            <SuspensedView>
              <JobtitlesPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/divisions/*'
          element={
            <SuspensedView>
              <DivisionsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/employee/grade/*'
          element={
            <SuspensedView>
              <GradesPage />
            </SuspensedView>
          }
        />

        {/* routes for HR */}
        <Route
          path='apps/setups/hr/appraisal/*'
          element={
            <SuspensedView>
              <AppraisalsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/hr/leave/*'
          element={
            <SuspensedView>
              <LeavesPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/hr/medical/*'
          element={
            <SuspensedView>
              <MedicalsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/hr/recruitment/*'
          element={
            <SuspensedView>
              <RecruitmentsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/hr/training/*'
          element={
            <SuspensedView>
              <TrainingsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/hr/disciplinary-actions/*'
          element={
            <SuspensedView>
              <DisciplinaryActionsPage />
            </SuspensedView>
          }
        />
        {/* routes for Administration */}

        <Route
          path='apps/setups/administration/audit/*'
          element={
            <SuspensedView>
              <AuditsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/administration/company/*'
          element={
            <SuspensedView>
              <CompanyPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/administration/config/*'
          element={
            <SuspensedView>
              <ConfigsPage />
            </SuspensedView>
          }
        />

        {/* routes for payroll*/}

        <Route
          path='apps/setups/payroll/benefit/*'
          element={
            <SuspensedView>
              <BenefitPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/currency/*'
          element={
            <SuspensedView>
              <CurrencyPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/deduction/*'
          element={
            <SuspensedView>
              <DeductionsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/loan/*'
          element={
            <SuspensedView>
              <LoansPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/overtime/*'
          element={
            <SuspensedView>
              <OvertimesPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/parameters/*'
          element={
            <SuspensedView>
              <ParametersPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/period/*'
          element={
            <SuspensedView>
              <PeriodsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/saving-scheme/*'
          element={
            <SuspensedView>
              <SavingSchemesPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/tax/*'
          element={
            <SuspensedView>
              <TaxsPage />
            </SuspensedView>
          }
        />
        <Route
          path='/apps/transactions/hr/*'
          element={
            <SuspensedView>
              <TestMedicalPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/payroll/approval-level/*'
          element={
            <SuspensedView>
              <ApprovalLevelsPage />
            </SuspensedView>
          }
        />
       
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
