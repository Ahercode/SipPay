import {useListView} from '../../core/ListViewProvider'
import {DepartmentsListToolbar} from './DepartmentListToolbar'
import {DepartmentsListGrouping} from './DepartmentsListGrouping'
import {DepartmentsListSearchComponent} from './DepartmentsListSearchComponent'

const DepartmentsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DepartmentsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DepartmentsListGrouping /> : <DepartmentsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DepartmentsListHeader}
