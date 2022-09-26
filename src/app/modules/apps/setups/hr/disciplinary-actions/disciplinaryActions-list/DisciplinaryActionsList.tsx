import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DisciplinaryActionsListHeader} from './components/header/DisciplinaryActionsListHeader'
import {DisciplinaryActionsTable} from './table/DisciplinaryActionsTable'
import {DisciplinaryActionEditModal} from './disciplinaryAction-edit-modal/DisciplinaryActionEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const DisciplinaryActionsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DisciplinaryActionsListHeader />
        <DisciplinaryActionsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DisciplinaryActionEditModal />}
    </>
  )
}

const DisciplinaryActionsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DisciplinaryActionsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DisciplinaryActionsListWrapper}
