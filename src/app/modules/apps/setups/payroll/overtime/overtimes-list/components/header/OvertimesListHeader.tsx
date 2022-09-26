import {useListView} from '../../core/ListViewProvider'
import {OvertimesListToolbar} from './OvertimeListToolbar'
import {OvertimesListGrouping} from './OvertimesListGrouping'
import {OvertimesListSearchComponent} from './OvertimesListSearchComponent'

const OvertimesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <OvertimesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <OvertimesListGrouping /> : <OvertimesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {OvertimesListHeader}
