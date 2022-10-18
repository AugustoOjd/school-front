import React, {useEffect, useState, FC} from 'react'
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams} from '@mui/x-data-grid';
import { instance } from '../../../api/axiosApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../../context/store/store';
import { useParams } from 'react-router-dom';


interface Data {
  nro:          number,
  name:         string;
  lastName:     string;
  country:      string;
  point:        number;
  state:        boolean;
  id:           string
}




const CardTable = () => {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState()
  const [estado, setEstado] = useState(0)

  // const admin = useSelector((state: RootState)=> state.SessionAdmin.value)

  // const adminId = admin[0].id || 0

  const { adminId } = useParams()

  const columns:GridColDef[] = [
    { field: 'nro',       headerName: 'Nro', minWidth: 10 },
    { field: 'name',      headerName: 'Nombre', minWidth: 120 },
    { field: 'lastName',  headerName: 'Apellido', minWidth: 120 },
    { field: 'country',   headerName: 'Pais', minWidth: 120 },
    { field: 'point',     headerName: 'Puntos', minWidth: 40 },
    { field: 'state',     headerName: 'State', minWidth: 30,
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


  // funcion que cambia el estado y manda un post
  const changeState = async (id: string, state: boolean)=>{

    instance.put(`/admin/dashboard/${adminId}`, await {
      id:     id,
      state:  !state
    })
      .then((res)=>{
        setEstado(estado + 1)
        // console.log(res)
      })
      .catch((error)=>{
        setEstado(estado)
        // console.log(error)
      })
  }

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
      // console.log(error);
      setLoading(true)
    })


  }, [estado, loading])
  
  return (
    <>
        <Box
            width={{xs: '90%', md: '70%'}}
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
                rowsPerPageOptions={[5, 10, 100]}  
            />
          }
        </Box>
    </>
  )
}

export default CardTable