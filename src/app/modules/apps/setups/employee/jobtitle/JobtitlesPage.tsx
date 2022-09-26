import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {JobtitlesListWrapper} from './jobtitles-list/JobtitlesList'

const jobtitlesBreadcrumbs: Array<PageLink> = [
  {
    title: 'jobtitles',
    path: '/apps/setups/employee/jobtitle/jobtitles',
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

const JobtitlesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='jobtitles'
          element={
            <>
              <PageTitle breadcrumbs={jobtitlesBreadcrumbs}>All Jobtitle</PageTitle>
              <JobtitlesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/jobtitle/jobtitles' />} />
    </Routes>
  )
}

export default JobtitlesPage
