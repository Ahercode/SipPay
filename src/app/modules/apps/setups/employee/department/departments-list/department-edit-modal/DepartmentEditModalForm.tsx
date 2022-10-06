import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialDepartment, Department} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {DepartmentsListLoading} from '../components/loading/DepartmentsListLoading'
import {createDepartment, updateDepartment} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isDepartmentLoading: boolean
  department: Department
}

const editDepartmentSchema = Yup.object().shape({
  // email: Yup.string()
  //   .email('Wrong email format')
  //   .min(3, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Email is required'),
  // name: Yup.string()
  //   .min(3, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Name is required'),
})

const DepartmentEditModalForm: FC<Props> = ({department, isDepartmentLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [DepartmentForEdit] = useState<Department>({
    ...department,
    // avatar: Department.avatar || initialDepartment.avatar,
    name: department.name || initialDepartment.name,
    description: department.description || initialDepartment.description,
    reportingDivision: department.reportingDivision || initialDepartment.reportingDivision,
    status: department.status || initialDepartment.status,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const DepartmentAvatarImg = toAbsoluteUrl(`/media/${DepartmentForEdit.avatar}`)

  const formik = useFormik({
    initialValues: DepartmentForEdit,
    validationSchema: editDepartmentSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateDepartment(values)
        } else {
          await createDepartment(values)
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
      <form id='kt_modal_add_department_form' className='form' onSubmit={formik.handleSubmit} noValidate>
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
            {/* begin::Label */}
            {/* <label className='d-block fw-bold fs-6 mb-5'>Avatar</label> */}
            {/* end::Label */}

            {/* begin::Image input */}
            {/* <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            > */}
              {/* begin::Preview existing avatar */}
              {/* <div
                className='image-input-wrapper w-125px h-125px'
                style={{backgroundImage: `url('${DepartmentAvatarImg}')`}}
              ></div> */}
              {/* end::Preview existing avatar */}

              {/* begin::Label */}
              {/* <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
              data-bs-toggle='tooltip'
              title='Change avatar'
            >
              <i className='bi bi-pencil-fill fs-7'></i>

              <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
              <input type='hidden' name='avatar_remove' />
            </label> */}
              {/* end::Label */}

              {/* begin::Cancel */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='cancel'
              data-bs-toggle='tooltip'
              title='Cancel avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Cancel */}

              {/* begin::Remove */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='remove'
              data-bs-toggle='tooltip'
              title='Remove avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Remove */}
            {/* </div> */}
            {/* end::Image input */}

            {/* begin::Hint */}
            {/* <div className='form-text'>Allowed file types: png, jpg, jpeg.</div> */}
            {/* end::Hint */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
           
            <label className='required fw-bold fs-6 mb-2'>Name</label>
            
            <input
              placeholder='Full name'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.name && formik.errors.name},
                {
                  'is-valid': formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isDepartmentLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
         
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Reporting Division</label>
            <select name="reportingDivision" id="cars" className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.reportingDivision && formik.errors.reportingDivision},
                {
                  'is-valid': formik.touched.reportingDivision && !formik.errors.reportingDivision,
                }
              )}>
              <option value="active">Managing Director</option>
              <option value="inactive">Senior Staff</option>
              
            </select>
            
            {formik.touched.reportingDivision && formik.errors.reportingDivision && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.reportingDivision}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Description</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='description'
              {...formik.getFieldProps('description')}
              type='text'
              name='description'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.description && formik.errors.description},
                {
                  'is-valid': formik.touched.description && !formik.errors.description,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isDepartmentLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
         
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Status</label>
            <select name="status" id="cars" className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.status && formik.errors.status},
                {
                  'is-valid': formik.touched.status && !formik.errors.status,
                }
              )}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              
            </select>
            
            {formik.touched.status && formik.errors.status && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.status}</span>
              </div>
            )}
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
            disabled={formik.isSubmitting || isDepartmentLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isDepartmentLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isDepartmentLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isDepartmentLoading) && <DepartmentsListLoading />}
    </>
  )
}

export {DepartmentEditModalForm}
