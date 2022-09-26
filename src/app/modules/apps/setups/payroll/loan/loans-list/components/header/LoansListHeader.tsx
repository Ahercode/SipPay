import {useListView} from '../../core/ListViewProvider'
import {LoansListToolbar} from './LoanListToolbar'
import {LoansListGrouping} from './LoansListGrouping'
import {LoansListSearchComponent} from './LoansListSearchComponent'

const LoansListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <LoansListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <LoansListGrouping /> : <LoansListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {LoansListHeader}
