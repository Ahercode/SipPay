import {useListView} from '../../core/ListViewProvider'
import {UnitsListToolbar} from './UnitListToolbar'
import {UnitsListGrouping} from './UnitsListGrouping'
import {UnitsListSearchComponent} from './UnitsListSearchComponent'

const UnitsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <UnitsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <UnitsListGrouping /> : <UnitsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {UnitsListHeader}
