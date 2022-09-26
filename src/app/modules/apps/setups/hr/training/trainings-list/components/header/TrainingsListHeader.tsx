import {useListView} from '../../core/ListViewProvider'
import {TrainingsListToolbar} from './TrainingListToolbar'
import {TrainingsListGrouping} from './TrainingsListGrouping'
import {TrainingsListSearchComponent} from './TrainingsListSearchComponent'

const TrainingsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <TrainingsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <TrainingsListGrouping /> : <TrainingsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {TrainingsListHeader}
