import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ParametersListHeader} from './components/header/ParametersListHeader'
import {ParametersTable} from './table/ParametersTable'
import {ParameterEditModal} from './parameter-edit-modal/ParameterEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const ParametersList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ParametersListHeader />
        <ParametersTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ParameterEditModal />}
    </>
  )
}

const ParametersListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ParametersList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ParametersListWrapper}
