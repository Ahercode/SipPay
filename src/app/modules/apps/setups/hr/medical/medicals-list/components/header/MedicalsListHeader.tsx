import {useListView} from '../../core/ListViewProvider'
import {MedicalsListToolbar} from './MedicalListToolbar'
import {MedicalsListGrouping} from './MedicalsListGrouping'
import {MedicalsListSearchComponent} from './MedicalsListSearchComponent'

const MedicalsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <MedicalsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <MedicalsListGrouping /> : <MedicalsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {MedicalsListHeader}
