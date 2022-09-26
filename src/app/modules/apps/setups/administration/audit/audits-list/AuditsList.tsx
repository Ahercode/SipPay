import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {AuditsListHeader} from './components/header/AuditsListHeader'
import {AuditsTable} from './table/AuditsTable'
import {AuditEditModal} from './audit-edit-modal/AuditEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const AuditsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <AuditsListHeader />
        <AuditsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <AuditEditModal />}
    </>
  )
}

const AuditsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <AuditsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {AuditsListWrapper}
