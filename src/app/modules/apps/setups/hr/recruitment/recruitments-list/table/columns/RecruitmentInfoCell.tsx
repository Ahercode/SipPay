/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Recruitment} from '../../core/_models'

type Props = {
  recruitment: Recruitment
}

const RecruitmentInfoCell: FC<Props> = ({recruitment}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {recruitment.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${recruitment.avatar}`)} alt={recruitment.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${recruitment.initials?.state}`,
              `text-${recruitment.initials?.state}`
            )}
          >
            {recruitment.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {recruitment.name}
      </a>
      <span>{recruitment.email}</span>
    </div>
  </div>
)

export {RecruitmentInfoCell}
