import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'

import {LeavePlanning} from './components/LeavePlanning'
import { AppraisalAndPerformance } from './components/AppraisalAndPerformance'
import { CompensationAndBenefits } from './components/CompensationAndBenefits'
import { DisciplinaryAction } from './components/DisciplinaryAction'
import { RecruitmentAndSelection } from './components/RecruitmentAndSelection'
import { TrainingAndDevelopment } from './components/TrainingAndDevelopment'
import { MedicalEnteries } from './components/MedicalEnteries'

const tranHumanResourceBreadCrumbs: Array<PageLink> = [
  {
    title: 'Transaction Human Resource',
    path: '/crafted/tran-human-resource/leave-plannings',
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

const TranHumanResource = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='appraisal-and-performance'
          element={
            <>
              <PageTitle breadcrumbs={tranHumanResourceBreadCrumbs}>Appraisal And Performance</PageTitle>
              <AppraisalAndPerformance />
            </>
          }
        />
        <Route
          path='compensation-and-benefits'
          element={
            <>
              <PageTitle breadcrumbs={tranHumanResourceBreadCrumbs}>Compensations And Benefits</PageTitle>
              <CompensationAndBenefits />
            </>
          }
        />
        <Route
          path='desciplinary-actions'
          element={
            <>
              <PageTitle breadcrumbs={tranHumanResourceBreadCrumbs}>Disciplinary Actions</PageTitle>
              <DisciplinaryAction />
            </>
          }
        />
        <Route
          path='leave-plannings'
          element={
            <>
              <PageTitle breadcrumbs={tranHumanResourceBreadCrumbs}>Leave Plannings</PageTitle>
              <LeavePlanning />
            </>
          }
        />
        <Route
          path='medical-entries'
          element={
            <>
              <PageTitle breadcrumbs={tranHumanResourceBreadCrumbs}>Medical Entries</PageTitle>
              <MedicalEnteries />
            </>
          }
        />
    
        <Route
          path='recruitment-and-selecttions'
          element={
            <>
              <PageTitle breadcrumbs={tranHumanResourceBreadCrumbs}>Recruitments And Selections</PageTitle>
              <RecruitmentAndSelection />
            </>
          }
        />
        <Route
          path='training-and-developments'
          element={
            <>
              <PageTitle breadcrumbs={tranHumanResourceBreadCrumbs}>Trainnings And Developments</PageTitle>
              <TrainingAndDevelopment />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/tran-human-resource/leave-plannings' />} />
      </Route>
    </Routes>
  )
}

export default TranHumanResource
