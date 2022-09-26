import {useListView} from '../../core/ListViewProvider'
import {ConfigsListToolbar} from './ConfigListToolbar'
import {ConfigsListGrouping} from './ConfigsListGrouping'
import {ConfigsListSearchComponent} from './ConfigsListSearchComponent'

const ConfigsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ConfigsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ConfigsListGrouping /> : <ConfigsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ConfigsListHeader}
