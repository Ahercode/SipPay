import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {TaxsListHeader} from './components/header/TaxsListHeader'
import {TaxsTable} from './table/TaxsTable'
import {TaxEditModal} from './tax-edit-modal/TaxEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const TaxsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <TaxsListHeader />
        <TaxsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <TaxEditModal />}
    </>
  )
}

const TaxsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TaxsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {TaxsListWrapper}
