import {useListView} from '../../core/ListViewProvider'
import {NationalityListToolbar} from './NationalityListToolbar'
import {NationalityListGrouping} from './NationalityListGrouping'
import {NationalityListSearchComponent} from './NationalityListSearchComponent'

const NationalityListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <NationalityListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <NationalityListGrouping /> : <NationalityListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {NationalityListHeader}
