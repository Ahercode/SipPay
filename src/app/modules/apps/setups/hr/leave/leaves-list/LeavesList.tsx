import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {LeavesListHeader} from './components/header/LeavesListHeader'
import {LeavesTable} from './table/LeavesTable'
import {LeaveEditModal} from './Leave-edit-modal/LeaveEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const LeavesList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <LeavesListHeader />
        <LeavesTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <LeaveEditModal />}
    </>
  )
}

const LeavesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <LeavesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {LeavesListWrapper}
