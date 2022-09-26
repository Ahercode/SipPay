import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ApprovalLevelsListHeader} from './components/header/ApprovalLevelsListHeader'
import {ApprovalLevelsTable} from './table/ApprovalLevelsTable'
import {ApprovalLevelEditModal} from './approvalLevel-edit-modal/ApprovalLevelEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const ApprovalLevelsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ApprovalLevelsListHeader />
        <ApprovalLevelsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ApprovalLevelEditModal />}
    </>
  )
}

const ApprovalLevelsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ApprovalLevelsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ApprovalLevelsListWrapper}
