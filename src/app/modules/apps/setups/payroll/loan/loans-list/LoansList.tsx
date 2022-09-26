import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {LoansListHeader} from './components/header/LoansListHeader'
import {LoansTable} from './table/LoansTable'
import {LoanEditModal} from './loan-edit-modal/LoanEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const LoansList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <LoansListHeader />
        <LoansTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <LoanEditModal />}
    </>
  )
}

const LoansListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <LoansList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {LoansListWrapper}
