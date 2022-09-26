import {useListView} from '../../core/ListViewProvider'
import {DivisionsListToolbar} from './DivisionListToolbar'
import {DivisionsListGrouping} from './DivisionsListGrouping'
import {DivisionsListSearchComponent} from './DivisionsListSearchComponent'

const DivisionsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DivisionsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DivisionsListGrouping /> : <DivisionsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DivisionsListHeader}
