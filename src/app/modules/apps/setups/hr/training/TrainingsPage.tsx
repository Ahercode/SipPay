import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {TrainingsListWrapper} from './trainings-list/TrainingsList'

const TrainingsBreadcrumbs: Array<PageLink> = [
  {
    title: 'trainings',
    path: '/apps/setups/hr/training/trainings',
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

const TrainingsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='trainings'
          element={
            <>
              <PageTitle breadcrumbs={TrainingsBreadcrumbs}>All Training</PageTitle>
              <TrainingsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/hr/training/trainings'/>} />
    </Routes>
  )
}

export default TrainingsPage
