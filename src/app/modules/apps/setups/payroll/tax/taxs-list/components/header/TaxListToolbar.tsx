import {KTSVG} from '../../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const TaxsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddTaxModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-User-table-toolbar='base'>
      {/* <TaxsListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add Tax */}
      <button type='button' className='btn btn-primary' onClick={openAddTaxModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Tax
      </button>
      {/* <button type='button' className='btn btn-secondary' >
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        <a href="http://localhost:3011/sippay/crafted/pages/wizards/horizontal">Add Tax</a>
      </button> */}
      {/* end::Add user */}
    </div>
  )
}

export {TaxsListToolbar}
