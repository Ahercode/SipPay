import {useListView} from '../../core/ListViewProvider'
import {PeriodsListToolbar} from './PeriodListToolbar'
import {PeriodsListGrouping} from './PeriodsListGrouping'
import {PeriodsListSearchComponent} from './PeriodsListSearchComponent'

const PeriodsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <PeriodsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <PeriodsListGrouping /> : <PeriodsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {PeriodsListHeader}
