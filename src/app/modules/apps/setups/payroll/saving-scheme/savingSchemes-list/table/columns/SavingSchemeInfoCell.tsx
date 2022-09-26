/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
// import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {SavingScheme} from '../../core/_models'

type Props = {
  savingScheme: SavingScheme
}

const SavingSchemeInfoCell: FC<Props> = ({savingScheme}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {SavingScheme.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${SavingScheme.avatar}`)} alt={SavingScheme.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${SavingScheme.initials?.state}`,
              `text-${SavingScheme.initials?.state}`
            )}
          >
            {savingScheme.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {savingScheme.name}
      </a>
      <span>{savingScheme.email}</span>
    </div>
  </div>
)

export {SavingSchemeInfoCell}
