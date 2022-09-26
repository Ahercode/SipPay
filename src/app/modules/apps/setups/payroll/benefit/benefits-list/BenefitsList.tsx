import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {BenefitListHeader} from './components/header/BenefitListHeader'
import {BenefitTable} from './table/BenefitsTable'
import {BenefitEditModal} from './benefit-edit-modal/BenefitEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const BenefitsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <BenefitListHeader />
        <BenefitTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <BenefitEditModal />}
    </>
  )
}

const BenefitsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <BenefitsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {BenefitsListWrapper}
