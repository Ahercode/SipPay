import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DivisionsListHeader} from './components/header/DivisionsListHeader'
import {DivisionsTable} from './table/DivisionsTable'
import {DivisionEditModal} from './division-edit-modal/DivisionEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const DivisionsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DivisionsListHeader />
        <DivisionsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DivisionEditModal />}
    </>
  )
}

const DivisionsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DivisionsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DivisionsListWrapper}
