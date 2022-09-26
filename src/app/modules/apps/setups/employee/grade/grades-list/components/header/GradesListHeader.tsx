import {useListView} from '../../core/ListViewProvider'
import {GradesListToolbar} from './GradeListToolbar'
import {GradesListGrouping} from './GradesListGrouping'
import {GradesListSearchComponent} from './GradesListSearchComponent'

const GradesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <GradesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <GradesListGrouping /> : <GradesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {GradesListHeader}
