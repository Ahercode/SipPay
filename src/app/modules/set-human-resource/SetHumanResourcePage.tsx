import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Appraisal} from './components/Appraisal'
import {DisciplinaryAction} from './components/DisciplinaryAction'
import {Leave} from './components/Leave'
import {Medical} from './components/Medical'
import {Training} from './components/Training'
import {Recruitment} from './components/Recruitment'

const sethumanresourceBreadCrumbs: Array<PageLink> = [
  {
    title: 'Setup Human Resource',
    path: '/crafted/set-human-resource/appraisal',
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

const SetHumanResourcePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='appraisal'
          element={
            <>
              <PageTitle breadcrumbs={sethumanresourceBreadCrumbs}>Appraisals</PageTitle>
              <Appraisal />
            </>
          }
        />
        <Route
          path='disciplinary-action'
          element={
            <>
              <PageTitle breadcrumbs={sethumanresourceBreadCrumbs}>Disciplinary Actions</PageTitle>
              <DisciplinaryAction />
            </>
          }
        />
        <Route
          path='leave'
          element={
            <>
              <PageTitle breadcrumbs={sethumanresourceBreadCrumbs}>Leaves</PageTitle>
              <Leave />
            </>
          }
        />
        <Route
          path='training'
          element={
            <>
              <PageTitle breadcrumbs={sethumanresourceBreadCrumbs}>Training</PageTitle>
              <Training />
            </>
          }
        />
        <Route
          path='medicals'
          element={
            <>
              <PageTitle breadcrumbs={sethumanresourceBreadCrumbs}>Medicals</PageTitle>
              <Medical />
            </>
          }
        />
        <Route
          path='recruitment'
          element={
            <>
              <PageTitle breadcrumbs={sethumanresourceBreadCrumbs}>Recruitments</PageTitle>
              <Recruitment />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/set-human-resource/appraisal' />} />
      </Route>
    </Routes>
  )
}

export default SetHumanResourcePage
