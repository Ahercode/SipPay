import {useListView} from '../../core/ListViewProvider'
import {PaygroupsListToolbar} from './PaygroupListToolbar'
import {PaygroupsListGrouping} from './PaygroupsListGrouping'
import {PaygroupsListSearchComponent} from './PaygroupsListSearchComponent'

const PaygroupsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <PaygroupsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <PaygroupsListGrouping /> : <PaygroupsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {PaygroupsListHeader}
