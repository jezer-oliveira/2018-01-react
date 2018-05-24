import React from "react";

export default class ProdutoLista extends React.Component {
    render() {
        if (!this.props.itens || !this.props.itens.length) {
            return <div>Vazio!</div>;
        } else {
            return <table>
                <thead>
                    <tr>
                    <th>ID</th><th>Nome</th><th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.itens.map((produto) => {
                        return <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.valor}</td>
                            <td>
                                <button onClick={()=>this.props.onEditar(produto)}>Editar</button>
                                <button onClick={()=>this.props.onExcluir(produto)}>Excluir</button>
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>;
        }
    }
}