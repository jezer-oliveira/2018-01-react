
import React from "react";

export default class ProdutoItem extends React.Component {
        
        constructor(props){
            super(props);
            this.state={
                id:null,
                nome:"",
                valor:""
            }
            
        }
        
        static getDerivedStateFromProps(nextProps, prevState) {
            if(nextProps.editar) {
                return {
                    nome:nextProps.editar.nome,
                    valor:nextProps.editar.valor
                }
            }
            return null;
        }

        setValor(campo, valor) {
            this.setState(
                    (anterior) =>{
                        anterior[campo]=valor;
                        return anterior;
                    }
                    );
            
        }
        
        confirmar() {
            if(this.state.nome&&
                  this.state.valor){
                    let prod={
                        id:this.props.editar?
                            this.props.editar.id:null,
                        nome:this.state.nome,
                        valor:this.state.valor
                    };
                    this.props.onConfirmar(prod);
                    } else {
                        alert("Preencha todos os campos!");
                    }
           
        }
        
        
        render(){
            return <div>
             {this.props.editar?"Editar:"+this.props.editar.id:"Novo item:"}<br/><br/>
            <label>Nome: </label>
            <input 
                value={this.state.nome}
                onChange={(evento)=>this.setValor('nome',evento.target.value)}  /><br/><br/>
            <label>Valor: </label>
            <input type="number" 
                value={this.state.valor}
                onChange={(evento)=>this.setValor('valor',evento.target.value)}
            /><br/><br/>
            <button onClick={(evento)=>{this.confirmar()}}>Confirmar</button>
            <button onClick={(evento)=>{this.props.onCancelar()}}>Cancelar</button>
            </div>;
            
        }
} 