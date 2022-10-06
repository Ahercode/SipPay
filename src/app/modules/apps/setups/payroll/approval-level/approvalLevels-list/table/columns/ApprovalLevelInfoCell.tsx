/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {ApprovalLevel} from '../../core/_models'

type Props = {
  approvalLevel: ApprovalLevel
}

const ApprovalLevelInfoCell: FC<Props> = ({approvalLevel}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {ApprovalLevel.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${ApprovalLevel.avatar}`)} alt={ApprovalLevel.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${ApprovalLevel.initials?.state}`,
              `text-${ApprovalLevel.initials?.state}`
            )}
          >
            {ApprovalLevel.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {approvalLevel.name}
      </a>
      {/* <span>{approvalLevel.email}</span> */}
    </div>
  </div>
)

export {ApprovalLevelInfoCell}
