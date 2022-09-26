import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {NotchsListHeader} from './components/header/NotchsListHeader'
import {NotchsTable} from './table/NotchsTable'
import {NotchEditModal} from './notch-edit-modal/NotchEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const NotchsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <NotchsListHeader />
        <NotchsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <NotchEditModal />}
    </>
  )
}

const NotchsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <NotchsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {NotchsListWrapper}
