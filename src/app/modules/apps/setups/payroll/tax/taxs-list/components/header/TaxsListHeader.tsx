import {useListView} from '../../core/ListViewProvider'
import {TaxsListToolbar} from './TaxListToolbar'
import {TaxsListGrouping} from './TaxsListGrouping'
import {TaxsListSearchComponent} from './TaxsListSearchComponent'

const TaxsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <TaxsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <TaxsListGrouping /> : <TaxsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {TaxsListHeader}
