import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ConfigsListHeader} from './components/header/ConfigsListHeader'
import {ConfigsTable} from './table/ConfigsTable'
import {ConfigEditModal} from './config-edit-modal/ConfigEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const ConfigsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ConfigsListHeader />
        <ConfigsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ConfigEditModal />}
    </>
  )
}

const ConfigsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ConfigsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ConfigsListWrapper}
