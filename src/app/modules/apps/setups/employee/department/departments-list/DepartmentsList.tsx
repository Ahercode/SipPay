import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DepartmentsListHeader} from './components/header/DepartmentsListHeader'
import {DepartmentsTable} from './table/DepartmentsTable'
import {DepartmentEditModal} from './department-edit-modal/DepartmentEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const DepartmentsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DepartmentsListHeader />
        <DepartmentsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DepartmentEditModal />}
    </>
  )
}

const DepartmentsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DepartmentsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DepartmentsListWrapper}
