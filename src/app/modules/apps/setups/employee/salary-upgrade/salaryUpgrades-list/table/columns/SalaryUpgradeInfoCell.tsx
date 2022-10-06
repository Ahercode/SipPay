/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {SalaryUpgrade} from '../../core/_models'

type Props = {
  salaryUpgrade: SalaryUpgrade
}

const SalaryUpgradeInfoCell: FC<Props> = ({salaryUpgrade}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {salaryUpgrade.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${salaryUpgrade.avatar}`)} alt={salaryUpgrade.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${salaryUpgrade.initials?.state}`,
              `text-${salaryUpgrade.initials?.state}`
            )}
          >
            {salaryUpgrade.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {salaryUpgrade.fname}
      </a>
      {/* <span>{salaryUpgrade.email}</span> */}
    </div>
  </div>
)

export {SalaryUpgradeInfoCell}
