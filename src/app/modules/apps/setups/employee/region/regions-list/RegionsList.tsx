import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {RegionsListHeader} from './components/header/RegionsListHeader'
import {RegionsTable} from './table/RegionsTable'
import {RegionEditModal} from './region-edit-modal/RegionEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const RegionsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <RegionsListHeader />
        <RegionsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <RegionEditModal />}
    </>
  )
}

const RegionsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <RegionsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {RegionsListWrapper}
