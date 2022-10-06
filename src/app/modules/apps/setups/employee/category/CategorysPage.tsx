import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {CategoryListWrapper} from './category-list/CategoryList'

const categoryBreadcrumbs: Array<PageLink> = [
  {
    title: 'Category',
    path: '/apps/setups/employee/category/categorys',
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

const CategoryPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='categorys'
          element={
            <>
              <PageTitle breadcrumbs={categoryBreadcrumbs}>All Category</PageTitle>
              <CategoryListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/employee/category/categorys' />} />
    </Routes>
  )
}

export default CategoryPage
