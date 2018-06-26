import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

export default class ProdutoLista extends React.Component {
    render() {
        if (!this.props.pagina || !this.props.pagina.content.length) {
            return <div>Vazio!</div>;
        } else {
            return <div><Table>
                <TableHead>
                    <TableRow>
                        <TableCell >Id</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell >Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.pagina.content.map((produto) => {
                        return (
                            <TableRow key={produto.id}>
                                <TableCell >
                                    {produto.id}
                                </TableCell>
                                <TableCell>{produto.nome}</TableCell>
                                <TableCell >{
                                    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.valor)
                                }</TableCell>
                                <TableCell style={{ border: "none" }} >
                                    <IconButton onClick={() => this.props.onEditar(produto)} color="primary">
                                        <Icon>edit</Icon>
                                    </IconButton>
                                    <IconButton onClick={() => this.props.onExcluir(produto)} color="secondary">
                                        <Icon>delete</Icon>
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
                <TablePagination
                    component="div"
                    count={this.props.pagina.totalElements}
                    rowsPerPage={this.props.pagina.size}
                    page={this.props.pagina.number}
                    labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
                    labelRowsPerPage="Itens por página:"
                    onChangePage={(_, pagina) => { this.props.onMudaPagina(pagina) }}
                    onChangeRowsPerPage={
                        (event) => {
                            this.props.onMudaTamanho(event.target.value);
                        }

                    }
                />
            </div>
        }
    }
}