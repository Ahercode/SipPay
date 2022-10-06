import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialSalaryUpgrade, SalaryUpgrade} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {SalaryUpgradesListLoading} from '../components/loading/SalaryUpgradesListLoading'
import {createSalaryUpgrade, updateSalaryUpgrade} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isSalaryUpgradeLoading: boolean
  salaryUpgrade: SalaryUpgrade
}

const editSalaryUpgradeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
})

const SalaryUpgradeEditModalForm: FC<Props> = ({salaryUpgrade, isSalaryUpgradeLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [SalaryUpgradeForEdit] = useState<SalaryUpgrade>({
    ...salaryUpgrade,
    // avatar: SalaryUpgrade.avatar || initialSalaryUpgrade.avatar,
    role: salaryUpgrade.role || initialSalaryUpgrade.role,
    oldBasicSalary: salaryUpgrade.oldBasicSalary || initialSalaryUpgrade.oldBasicSalary,
    newBasicSalary: salaryUpgrade.newBasicSalary || initialSalaryUpgrade.newBasicSalary,
    fname: salaryUpgrade.fname || initialSalaryUpgrade.fname,
    sname: salaryUpgrade.sname || initialSalaryUpgrade.sname,
    // email: salaryUpgrade.email || initialSalaryUpgrade.email,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const SalaryUpgradeAvatarImg = toAbsoluteUrl(`/media/${SalaryUpgradeForEdit.avatar}`)

  const formik = useFormik({
    initialValues: SalaryUpgradeForEdit,
    validationSchema: editSalaryUpgradeSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateSalaryUpgrade(values)
        } else {
          await createSalaryUpgrade(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_salaryUpgrade_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>First Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='first name'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.fname && formik.errors.fname},
                {
                  'is-valid': formik.touched.fname && !formik.errors.fname,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isSalaryUpgradeLoading}
            />
            {formik.touched.fname && formik.errors.fname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.fname}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Surame</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='surname'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.sname && formik.errors.sname},
                {
                  'is-valid': formik.touched.sname && !formik.errors.sname,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isSalaryUpgradeLoading}
            />
            {formik.touched.sname && formik.errors.sname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.sname}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
        </div>
        </div>
        
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isSalaryUpgradeLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isSalaryUpgradeLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isSalaryUpgradeLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isSalaryUpgradeLoading) && <SalaryUpgradesListLoading />}
    </>
  )
}

export {SalaryUpgradeEditModalForm}
