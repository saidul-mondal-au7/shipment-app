export const COLUMNS = [
    {
      Header: 'Id',
      accessor: 'id',
      // Filter : ColumnFilter
    },
    {
      Header: 'Name',
      accessor: 'name',
      disableFilters: true
      
    },
    {
      Header: "Cargo",
      accessor:'cargo',
      columns : [
        {
          Header: "Cargo1",
          columns : [
            { 
            Header: "Type",
            accessor: "cargo[0].type"
            },
            {
              Header: "Description",
              accessor: "cargo[0].description"
            },
            {
              Header: "Volume",
              accessor: "cargo[0].volume"
            }
          ]
        
        },
        {
          Header: "Cargo2",
          columns : [
            { 
            Header: "Type",
            accessor: "cargo[1].type"
            },
            {
              Header: "Description",
              accessor: "cargo[1].description"
            },
            {
              Header: "Volume",
              accessor: "cargo[1].volume"
            }
          ]
        
        }
          
      ]
    },
    {
      Header: 'Mode',
      accessor: 'mode',
      disableFilters: true
      
    },
    {
      Header: 'Destination',
      accessor: 'destination',
      disableFilters: true
    },
    {
        Header: 'Type',
        accessor: 'type',
        disableFilters: true
    },
    {
      Header: 'Origin',
      accessor: 'origin',
      disableFilters: true
    },
    {
      Header: "Services",
      accessor:'services',
      columns : [
        {
          Header: "Services1",
          columns: [
            {
              Header: "Type1",
              accessor: "services[0].type",
            },
            {
              Header: 'Value1',
              accessor : "services[0].value"
            }
          ]
        },
        {
          Header: "Services2",
          columns: [
            {
              Header: "Type2",
              accessor: "services[1].type"
            },
            {
              Header: 'Value2',
              accessor : "services[1].value"
            }
          ]
        }
      ]
    },
    {
      Header: 'Total',
      accessor: 'total',
      disableFilters: true
    },
    {
      Header: 'Status',
      accessor: 'status',
      disableFilters: true
    },
    {
        Header:"UserId",
        accessor:"userId"
    }
  ]

  export const GROUPED_COLUMNS = [
    {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id'
    },
    {
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
          Header: 'First Name',
          Footer: 'First Name',
          accessor: 'first_name'
        },
        {
          Header: 'Last Name',
          Footer: 'Last Name',
          accessor: 'last_name'
        }
      ]
    },
    {
      Header: 'Info',
      Footer: 'Info',
      columns: [
        {
          Header: 'Date of Birth',
          Footer: 'Date of Birth',
          accessor: 'date_of_birth'
        },
        {
          Header: 'Country',
          Footer: 'Country',
          accessor: 'country'
        },
        {
          Header: 'Phone',
          Footer: 'Phone',
          accessor: 'phone'
        }
      ]
    }
  ]