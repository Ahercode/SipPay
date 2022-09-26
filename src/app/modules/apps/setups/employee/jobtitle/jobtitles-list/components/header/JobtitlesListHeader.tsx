import {useListView} from '../../core/ListViewProvider'
import {JobtitlesListToolbar} from './JobtitleListToolbar'
import {JobtitlesListGrouping} from './JobtitlesListGrouping'
import {JobtitlesListSearchComponent} from './JobtitlesListSearchComponent'

const JobtitlesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <JobtitlesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <JobtitlesListGrouping /> : <JobtitlesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {JobtitlesListHeader}
