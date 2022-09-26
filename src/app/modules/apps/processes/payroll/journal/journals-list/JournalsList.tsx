import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {BanksListHeader} from './components/header/BanksListHeader'
import {BanksTable} from './table/BanksTable'
import {BankEditModal} from './bank-edit-modal/BankEditModal'
import {KTCard} from '../../../../../_metronic/helpers'

const BanksList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <BanksListHeader />
        <BanksTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <BankEditModal />}
    </>
  )
}

const BanksListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <BanksList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {BanksListWrapper}
