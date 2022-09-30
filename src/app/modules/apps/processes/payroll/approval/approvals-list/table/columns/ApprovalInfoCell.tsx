/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Approval} from '../../core/_models'

type Props = {
  approval: Approval
}

const ApprovalInfoCell: FC<Props> = ({approval}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {approval.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${approval.avatar}`)} alt={approval.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${approval.initials?.state}`,
              `text-${approval.initials?.state}`
            )}
          >
            {approval.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {approval.name}
      </a>
      <span>{approval.email}</span>
    </div>
  </div>
)

export {ApprovalInfoCell}
