import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {AppraisalsListHeader} from './components/header/AppraisalsListHeader'
import {AppraisalsTable} from './table/AppraisalsTable'
import {AppraisalEditModal} from './appraisal-edit-modal/AppraisalEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const AppraisalsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <AppraisalsListHeader />
        <AppraisalsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <AppraisalEditModal />}
    </>
  )
}

const AppraisalsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <AppraisalsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {AppraisalsListWrapper}
