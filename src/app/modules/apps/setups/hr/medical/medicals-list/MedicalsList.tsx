import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {MedicalsListHeader} from './components/header/MedicalsListHeader'
import {MedicalsTable} from './table/MedicalsTable'
import {MedicalEditModal} from './medical-edit-modal/MedicalEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const MedicalsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <MedicalsListHeader />
        <MedicalsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <MedicalEditModal />}
    </>
  )
}

const MedicalsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <MedicalsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {MedicalsListWrapper}
