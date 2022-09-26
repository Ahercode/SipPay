import {useListView} from '../../core/ListViewProvider'
import {ParametersListToolbar} from './ParameterListToolbar'
import {ParametersListGrouping} from './ParametersListGrouping'
import {ParametersListSearchComponent} from './ParametersListSearchComponent'

const ParametersListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ParametersListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ParametersListGrouping /> : <ParametersListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ParametersListHeader}
