import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {SalaryUpgradesListHeader} from './components/header/SalaryUpgradesListHeader'
import {SalaryUpgradesTable} from './table/SalaryUpgradesTable'
import {SalaryUpgradeEditModal} from './salaryUpgrade-edit-modal/SalaryUpgradeEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const SalaryUpgradesList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <SalaryUpgradesListHeader />
        <SalaryUpgradesTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <SalaryUpgradeEditModal />}
    </>
  )
}

const SalaryUpgradesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <SalaryUpgradesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {SalaryUpgradesListWrapper}
