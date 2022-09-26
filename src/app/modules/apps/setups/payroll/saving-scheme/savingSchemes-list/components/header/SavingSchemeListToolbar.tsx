import {KTSVG} from '../../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const SavingSchemesListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddSavingSchemeModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-User-table-toolbar='base'>
      {/* <SavingSchemesListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add SavingScheme */}
      <button type='button' className='btn btn-primary' onClick={openAddSavingSchemeModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Saving Scheme
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {SavingSchemesListToolbar}
