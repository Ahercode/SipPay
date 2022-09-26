import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {RecruitmentsListHeader} from './components/header/RecruitmentsListHeader'
import {RecruitmentsTable} from './table/RecruitmentsTable'
import {RecruitmentEditModal} from './recruitment-edit-modal/RecruitmentEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const RecruitmentsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <RecruitmentsListHeader />
        <RecruitmentsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <RecruitmentEditModal />}
    </>
  )
}

const RecruitmentsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <RecruitmentsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {RecruitmentsListWrapper}
