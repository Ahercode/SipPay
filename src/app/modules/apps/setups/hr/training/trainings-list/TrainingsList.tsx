import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {TrainingsListHeader} from './components/header/TrainingsListHeader'
import {TrainingsTable} from './table/TrainingsTable'
import {TrainingEditModal} from './training-edit-modal/TrainingEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const TrainingsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <TrainingsListHeader />
        <TrainingsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <TrainingEditModal />}
    </>
  )
}

const TrainingsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TrainingsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {TrainingsListWrapper}
