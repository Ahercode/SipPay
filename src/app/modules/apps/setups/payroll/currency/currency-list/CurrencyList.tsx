import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {CurrencyListHeader} from './components/header/CurrencyListHeader'
import {CurrencyTable} from './table/CurrencyTable'
import {CurrencyEditModal} from './currency-edit-modal/CurrencyEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const CurrencyList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <CurrencyListHeader />
        <CurrencyTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <CurrencyEditModal />}
    </>
  )
}

const CurrencyListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <CurrencyList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {CurrencyListWrapper}
