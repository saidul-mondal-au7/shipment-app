import React, { useEffect, useMemo, useContext } from 'react'
import { useTable,usePagination } from 'react-table'
import { COLUMNS } from './ShipmentColumn'
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import '../table.css';

const ShipmetDetails = (props) => {
  const columns = useMemo(() => COLUMNS, [])
  // const data = props.data;
  const { data } = useContext(GlobalContext);
  // const [items, setItems] = useState([])

  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 }
  }, 
  usePagination
  )

  useEffect(() => {
    setPageSize(5)
  }, [])

  const { pageIndex, pageSize } = state

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')} 
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                <td>
                <Link to={`/edit/${row.original.id}`} color="warning" className="btn btn-warning btn-lg">Edit Name</Link>
                </td> 
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[5, 10, 15].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> <br/>
        <Link to="/" className="btn btn-primary ml-2">Home Page</Link>
      </div>
    </>
  )
}

export default ShipmetDetails;