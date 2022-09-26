import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {OvertimesListHeader} from './components/header/OvertimesListHeader'
import {OvertimesTable} from './table/OvertimesTable'
import {OvertimeEditModal} from './overtime-edit-modal/OvertimeEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const OvertimesList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <OvertimesListHeader />
        <OvertimesTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <OvertimeEditModal />}
    </>
  )
}

const OvertimesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <OvertimesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {OvertimesListWrapper}
