import {KTSVG} from '../../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const SalaryUpgradesListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddSalaryUpgradeModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-User-table-toolbar='base'>
      {/* <SalaryUpgradesListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add SalaryUpgrade */}
      <button type='button' className='btn btn-primary' onClick={openAddSalaryUpgradeModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add SalaryUpgrade
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {SalaryUpgradesListToolbar}
