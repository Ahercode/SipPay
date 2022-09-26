import {useListView} from '../../core/ListViewProvider'
import {CategoryListToolbar} from './CategoryListToolbar'
import {CategoryListGrouping} from './CategoryListGrouping'
import {CategoryListSearchComponent} from './CategoryListSearchComponent'

const CategoryListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <CategoryListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <CategoryListGrouping /> : <CategoryListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {CategoryListHeader}
