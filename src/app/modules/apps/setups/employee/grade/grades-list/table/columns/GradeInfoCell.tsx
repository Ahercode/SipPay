/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Grade} from '../../core/_models'

type Props = {
  grade: Grade
}

const GradeInfoCell: FC<Props> = ({grade}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {grade.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${grade.avatar}`)} alt={grade.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${grade.initials?.state}`,
              `text-${grade.initials?.state}`
            )}
          >
            {grade.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {grade.name}
      </a>
      {/* <span>{grade.email}</span> */}
    </div>
  </div>
)

export {GradeInfoCell}
