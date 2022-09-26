import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {JobtitlesListHeader} from './components/header/JobtitlesListHeader'
import {JobtitlesTable} from './table/JobtitlesTable'
import {JobtitleEditModal} from './jobtitle-edit-modal/JobtitleEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const JobtitlesList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <JobtitlesListHeader />
        <JobtitlesTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <JobtitleEditModal />}
    </>
  )
}

const JobtitlesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <JobtitlesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {JobtitlesListWrapper}
