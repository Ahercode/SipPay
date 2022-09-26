import {useListView} from '../../core/ListViewProvider'
import {SalaryUpgradesListToolbar} from './SalaryUpgradeListToolbar'
import {SalaryUpgradesListGrouping} from './SalaryUpgradesListGrouping'
import {SalaryUpgradesListSearchComponent} from './SalaryUpgradesListSearchComponent'

const SalaryUpgradesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <SalaryUpgradesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <SalaryUpgradesListGrouping /> : <SalaryUpgradesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {SalaryUpgradesListHeader}
