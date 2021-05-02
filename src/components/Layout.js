import React, {useState, useEffect, useMemo, useContext } from 'react';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';
import { Link } from "react-router-dom";
import { COLUMNS } from './columns'

import './table.css';

import { GlobalContext } from "../context/GlobalState";

import { ColumnFilter } from './ColumnFilter';

const Layout = (props) => {
  
  const columns = useMemo(() => COLUMNS, [])
  
  const {data} = useContext(GlobalContext);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable({
    columns,
    data,
    defaultColumn,
    initialState: { pageIndex: 0 }
  }, 
  useFilters,
  useSortBy,
  usePagination
  )
  // console.log(page.map((user) => user.original.id))
  const { pageSize } = state;
  useEffect(() => {
    setPageSize(20)
  }, [])
  
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
                <span>
                {column.isSorted
                  ? column.isSortedDesc
                    ? ' 🔽'
                    : ' 🔼'
                  : ''}
              </span>
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
                  return (  
                    <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                    
                    </td>
                   
                    )
                })}
                
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
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[20].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Layout;