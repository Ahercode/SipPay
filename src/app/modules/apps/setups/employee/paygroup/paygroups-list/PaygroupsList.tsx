import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {PaygroupsListHeader} from './components/header/PaygroupsListHeader'
import {PaygroupsTable} from './table/PaygroupsTable'
import {PaygroupEditModal} from './paygroup-edit-modal/PaygroupEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const PaygroupsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <PaygroupsListHeader />
        <PaygroupsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <PaygroupEditModal />}
    </>
  )
}

const PaygroupsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <PaygroupsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {PaygroupsListWrapper}
