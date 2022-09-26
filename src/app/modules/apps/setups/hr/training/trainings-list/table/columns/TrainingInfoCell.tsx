/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Training} from '../../core/_models'

type Props = {
  training: Training
}

const TrainingInfoCell: FC<Props> = ({training}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {training.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${training.avatar}`)} alt={training.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${training.initials?.state}`,
              `text-${training.initials?.state}`
            )}
          >
            {training.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {training.name}
      </a>
      <span>{training.email}</span>
    </div>
  </div>
)

export {TrainingInfoCell}
