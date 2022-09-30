import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ApprovalsListHeader} from './components/header/ApprovalsListHeader'
import {ApprovalsTable} from './table/ApprovalsTable'
import {ApprovalEditModal} from './approval-edit-modal/ApprovalEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const ApprovalsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ApprovalsListHeader />
        <ApprovalsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ApprovalEditModal />}
    </>
  )
}

const ApprovalsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ApprovalsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ApprovalsListWrapper}
