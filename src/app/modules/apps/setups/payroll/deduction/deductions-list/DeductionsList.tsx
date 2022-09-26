import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DeductionsListHeader} from './components/header/DeductionsListHeader'
import {DeductionsTable} from './table/DeductionsTable'
import {DeductionEditModal} from './deduction-edit-modal/DeductionEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const DeductionsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DeductionsListHeader />
        <DeductionsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DeductionEditModal />}
    </>
  )
}

const DeductionsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DeductionsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DeductionsListWrapper}
