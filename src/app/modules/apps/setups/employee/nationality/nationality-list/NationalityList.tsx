import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {NationalityListHeader} from './components/header/NationalityListHeader'
import {NationalityTable} from './table/NationalityTable'
import {NationalityEditModal} from './nationality-edit-modal/NationalityEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const NationalityList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <NationalityListHeader />
        <NationalityTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <NationalityEditModal />}
    </>
  )
}

const NationalityListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <NationalityList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {NationalityListWrapper}
