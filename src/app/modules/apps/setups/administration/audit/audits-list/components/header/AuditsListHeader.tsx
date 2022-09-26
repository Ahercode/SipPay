import {useListView} from '../../core/ListViewProvider'
import {AuditsListToolbar} from './AuditListToolbar'
import {AuditsListGrouping} from './AuditsListGrouping'
import {AuditsListSearchComponent} from './AuditsListSearchComponent'

const AuditsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <AuditsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <AuditsListGrouping /> : <AuditsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {AuditsListHeader}
