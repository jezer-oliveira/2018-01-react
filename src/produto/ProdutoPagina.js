import React from 'react';
import ProdutoLista from './ProdutoLista';
import ProdutoItem from './ProdutoItem';
import API from '../API';

export default class ProdutoPagina extends React.Component {
    constructor() {
        super();
        this.state = {
            produtos: []
        }
    }
    componentDidMount() {
        this.listar();
    }

    tratarErro(erro) {
        console.log(erro.response);
        if(erro.response.data.message)
            alert(erro.response.data.message);
        else
            alert(erro.response.data);
    
    }

    listar() {
        API.get("produtos/").then(
            (retorno) => {
                this.setState({ produtos: retorno.data });
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    inserir(item) {
        API.post("produtos/",item).then(
            ()=>{
                this.listar();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
        
    }

    atualizar(item) {
        API.put("produtos/"+item.id,item).then(
            ()=>{
                this.listar();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    excluir(item) {
        API.delete("produtos/"+item.id).then(
            ()=>{
                this.listar();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
    }


    editar(item) {
        this.setState({
            exibirFormulario:true,
            editar:item
        });
    }
    confirmar(item) {
        if(item.id) {
            this.atualizar(item);
        } else {
            this.inserir(item);
        }
    }

    limpar() {
        this.setState({
            exibirFormulario:false,
            editar:null
        });
    }

    novo() {
        this.setState({
            exibirFormulario:true,
            editar:null
        });
    }

    render() {

        return <div>
            <ProdutoLista 
                onEditar={(item)=>this.editar(item)}
                onExcluir={(item)=>this.excluir(item)}
                itens={this.state.produtos} /><br/><br/>
            {this.state.exibirFormulario?
                <ProdutoItem
                    onConfirmar={(item) =>this.confirmar(item)}
                    onCancelar={() =>this.limpar()}
                    editar={this.state.editar} />:
                    <button onClick={()=>this.novo()}>Novo Item</button>}
        </div>;

    }

}
