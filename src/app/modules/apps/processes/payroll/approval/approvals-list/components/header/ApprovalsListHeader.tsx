import {useListView} from '../../core/ListViewProvider'
import {BanksListToolbar} from './BankListToolbar'
import {BanksListGrouping} from './BanksListGrouping'
import {BanksListSearchComponent} from './BanksListSearchComponent'

const BanksListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <BanksListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <BanksListGrouping /> : <BanksListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {BanksListHeader}
