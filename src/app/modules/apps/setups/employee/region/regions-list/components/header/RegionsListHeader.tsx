import {useListView} from '../../core/ListViewProvider'
import {RegionsListToolbar} from './RegionListToolbar'
import {RegionsListGrouping} from './RegionsListGrouping'
import {RegionsListSearchComponent} from './RegionsListSearchComponent'

const RegionsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <RegionsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <RegionsListGrouping /> : <RegionsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {RegionsListHeader}
