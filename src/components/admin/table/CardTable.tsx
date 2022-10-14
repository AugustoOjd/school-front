import React, {useEffect, useState, FC} from 'react'
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams} from '@mui/x-data-grid';
import { instance } from '../../../api/axiosApi';


interface Props {
  children: React.ReactNode
}

const columns:GridColDef[] = [
  { field: 'id',        headerName: 'id', minWidth: 10 },
  { field: 'name',      headerName: 'nombre', minWidth: 30 },
  { field: 'lastName',  headerName: 'apellido', minWidth: 30 },
  { field: 'country',   headerName: 'country', minWidth: 30 },
  { field: 'point',     headerName: 'point', minWidth: 40 },
  { field: 'state',     headerName: 'state', minWidth: 30,
    renderCell: (params: GridRenderCellParams):React.ReactNode=>(
        <Button
          color='primary'
        >
          asd
        </Button>

    )
    }
];

interface Data {
  id:           number,
  name:         string;
  lastName:     string;
  country:      string;
  point:        number;
  state:        boolean;
}

const CardTable = () => {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState()

  useEffect(() => {

    instance.get('/admin/dashboard')
    .then((res) => {
      // handle success


      const data = res.data
      const rows = data!.map(((user:Data, index:number)=>({
        id: index,
        name:     user.name,
        lastName: user.lastName,
        country:  user.country,
        point:    user.point,
        state:    user.state,
      }))
    )
      setUsers(rows)
      setLoading(false)
    })
    .catch((error)=> {
      
      // handle error
      console.log(error);
      setLoading(true)
    })


  }, [])
  
  return (
    <>
        <Box
            width={'90%'}
            height={'90%'}
            bgcolor={'white'}
            borderRadius={2}
            boxShadow={2}
        >
          {
          loading
          ?
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Typography>
              No se pudieron cargar los datos
            </Typography>
          </Box>
          :            
          <DataGrid 
              rows={users!}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
          />
            
            }
        </Box>
    </>
  )
}

export default CardTable