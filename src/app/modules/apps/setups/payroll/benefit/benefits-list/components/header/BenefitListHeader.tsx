import {useListView} from '../../core/ListViewProvider'
import {BenefitListToolbar} from './BenefitListToolbar'
import {BenefitListGrouping} from './BenefitListGrouping'
import {BenefitListSearchComponent} from './BenefitListSearchComponent'

const BenefitListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <BenefitListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <BenefitListGrouping /> : <BenefitListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {BenefitListHeader}
