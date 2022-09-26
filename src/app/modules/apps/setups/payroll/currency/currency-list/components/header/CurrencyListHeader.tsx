import {useListView} from '../../core/ListViewProvider'
import {CurrencyListToolbar} from './CurrencyListToolbar'
import {CurrencyListGrouping} from './CurrencyListGrouping'
import {CurrencyListSearchComponent} from './CurrencyListSearchComponent'

const CurrencyListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <CurrencyListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <CurrencyListGrouping /> : <CurrencyListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {CurrencyListHeader}
