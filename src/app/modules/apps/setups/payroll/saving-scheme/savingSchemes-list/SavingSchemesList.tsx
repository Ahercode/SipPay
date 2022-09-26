import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {SavingSchemesListHeader} from './components/header/SavingSchemesListHeader'
import {SavingSchemesTable} from './table/SavingSchemesTable'
import {SavingSchemeEditModal} from './savingScheme-edit-modal/SavingSchemeEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const SavingSchemesList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <SavingSchemesListHeader />
        <SavingSchemesTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <SavingSchemeEditModal />}
    </>
  )
}

const SavingSchemesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <SavingSchemesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {SavingSchemesListWrapper}
