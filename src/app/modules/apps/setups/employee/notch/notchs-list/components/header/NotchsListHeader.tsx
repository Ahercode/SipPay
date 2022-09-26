import {useListView} from '../../core/ListViewProvider'
import {NotchsListToolbar} from './NotchListToolbar'
import {NotchsListGrouping} from './NotchsListGrouping'
import {NotchsListSearchComponent} from './NotchsListSearchComponent'

const NotchsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <NotchsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <NotchsListGrouping /> : <NotchsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {NotchsListHeader}
