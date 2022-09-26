import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {CompanyListHeader} from './components/header/CompanyListHeader'
import {CompanyTable} from './table/CompanyTable'
import {CompanyEditModal} from './company-edit-modal/CompanyEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const CompanyList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <CompanyListHeader />
        <CompanyTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <CompanyEditModal />}
    </>
  )
}

const CompanyListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <CompanyList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {CompanyListWrapper}
