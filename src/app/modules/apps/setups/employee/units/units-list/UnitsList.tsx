import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UnitsListHeader} from './components/header/UnitsListHeader'
import {UnitsTable} from './table/UnitsTable'
import {UnitEditModal} from './unit-edit-modal/UnitEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const UnitsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <UnitsListHeader />
        <UnitsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UnitEditModal />}
    </>
  )
}

const UnitsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <UnitsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {UnitsListWrapper}
