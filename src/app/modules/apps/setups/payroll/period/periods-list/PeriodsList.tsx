import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {PeriodsListHeader} from './components/header/PeriodsListHeader'
import {PeriodsTable} from './table/PeriodsTable'
import {PeriodEditModal} from './period-edit-modal/PeriodEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const PeriodsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <PeriodsListHeader />
        <PeriodsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <PeriodEditModal />}
    </>
  )
}

const PeriodsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <PeriodsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {PeriodsListWrapper}
