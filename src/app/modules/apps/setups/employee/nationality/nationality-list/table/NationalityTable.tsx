import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from '../table/columns/CustomHeaderColumn'
import {CustomRow} from '../table/columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {nationalityColumns} from './columns/_columns'
import {Nationality} from '../core/_models'
import {NationalityListLoading} from '../components/loading/NationalityListLoading'
import {NationalityListPagination} from '../components/pagination/NationalityListPagination'
import {KTCardBody} from '../../../../../../../../_metronic/helpers'

const NationalityTable = () => {
  const Nationalitys = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => Nationalitys, [Nationalitys])
  const columns = useMemo(() => nationalityColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_nationality'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<Nationality>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {/* {rows.length > 0 ? (
              rows.map((row: Row<Nationality>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )} */}
            <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <NationalityListPagination />
      {isLoading && <NationalityListLoading />}
    </KTCardBody>
  )
}

export {NationalityTable}
