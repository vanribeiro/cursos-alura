import { 
    Paper, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TableCell, 
    Table, 
    TableBody 
} from '@mui/material';
import { useState, useEffect } from 'react';
import IRestaurante from '../../../interfaces/IRestaurante';
import axios from 'axios';

const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, []);

    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes?.map(restaurante => {
                        return(
                            <TableRow key={restaurante.id}>
                                <TableCell>
                                    {restaurante.nome}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurantes;