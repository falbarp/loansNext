import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { default as RootLayout } from '../app/layout';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


type Product = {
  _id: string;
  bank: string;
  title: string;
  months: number;
  amount: number;
  interest: number;
};

const columns: GridColDef[] = [
    { field: 'bank', headerName: 'Entidad', width: 170 },
    { field: 'title', headerName: 'Descripción', width: 200, sortable: false },
    { field: 'months', headerName: 'Plazo', width: 100},
    { field: 'amount', headerName: 'Cantida Máx', width: 100},
    { field: 'interest', headerName: 'Interest', width: 100, sortingOrder: ['asc', 'desc']  },
  ];

  const Comparation: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/loans');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
      <RootLayout>
        <Box sx={{ width: '100%' }}>
          <DataGrid 
            rows={products} 
            autoHeight 
            columns={columns}
            pageSizeOptions={[5, 10, 25]}
            slots={{ toolbar: GridToolbar }} 
            getRowId={(row) => row._id }
            initialState={{
                pagination: { paginationModel: {pageSize: 15 }},
                sorting: {
                    sortModel: [{field: 'interest', sort: 'asc'}],
                }
             }} />
        </Box>
      </RootLayout>
      );
    };

    export default Comparation;

