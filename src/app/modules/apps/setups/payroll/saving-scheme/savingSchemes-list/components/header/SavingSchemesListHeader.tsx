import {useListView} from '../../core/ListViewProvider'
import {SavingSchemesListToolbar} from './SavingSchemeListToolbar'
import {SavingSchemesListGrouping} from './SavingSchemesListGrouping'
import {SavingSchemesListSearchComponent} from './SavingSchemesListSearchComponent'

const SavingSchemesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <SavingSchemesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <SavingSchemesListGrouping /> : <SavingSchemesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {SavingSchemesListHeader}
