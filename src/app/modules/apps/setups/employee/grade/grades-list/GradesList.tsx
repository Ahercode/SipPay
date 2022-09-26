import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {GradesListHeader} from './components/header/GradesListHeader'
import {GradesTable} from './table/GradesTable'
import {GradeEditModal} from './grade-edit-modal/GradeEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const GradesList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <GradesListHeader />
        <GradesTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <GradeEditModal />}
    </>
  )
}

const GradesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <GradesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {GradesListWrapper}
