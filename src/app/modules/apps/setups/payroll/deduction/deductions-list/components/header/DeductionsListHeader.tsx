import {useListView} from '../../core/ListViewProvider'
import {DeductionsListToolbar} from './DeductionListToolbar'
import {DeductionsListGrouping} from './DeductionsListGrouping'
import {DeductionsListSearchComponent} from './DeductionsListSearchComponent'

const DeductionsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DeductionsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DeductionsListGrouping /> : <DeductionsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DeductionsListHeader}
