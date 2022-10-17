import React, {useEffect, useState, FC} from 'react'
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams} from '@mui/x-data-grid';
import { instance } from '../../../api/axiosApi';


interface Props {
  children: React.ReactNode
}

interface Data {
  nro:          number,
  name:         string;
  lastName:     string;
  country:      string;
  point:        number;
  state:        boolean;
  id:           string
}

const columns:GridColDef[] = [
  { field: 'nro',       headerName: 'Nro', minWidth: 10 },
  { field: 'name',      headerName: 'Nombre', minWidth: 120 },
  { field: 'lastName',  headerName: 'Apellido', minWidth: 120 },
  { field: 'country',   headerName: 'Pais', minWidth: 120 },
  { field: 'point',     headerName: 'Puntos', minWidth: 40 },
  { field: 'state',     headerName: 'state', minWidth: 30,
    renderCell: ({row}: GridRenderCellParams):React.ReactNode=>(
        <Button
          color={row.state === true ? 'primary' : 'error'}
          variant='contained'
          onClick={()=> changeState(row.id, row.state)}
        >
          {row.state === true ? 'true' : 'false'}
        </Button>

    )
    },
    { field: 'id',   headerName: 'Id', minWidth: 200 },
];


const changeState = (id: string, state: boolean)=>{

  console.log( id + state)
  return {
    id,
    state
  }
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
        nro: index,
        name:     user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1),
        lastName: user.lastName.charAt(0).toLocaleUpperCase() + user.lastName.slice(1),
        country:  user.country.charAt(0).toLocaleUpperCase() + user.country.slice(1),
        point:    user.point,
        state:    user.state,
        id:       user.id
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
            borderRadius={1}
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
              // rowsPerPageOptions={[5, 10, 100]}
          />
            
            }
        </Box>
    </>
  )
}

export default CardTable