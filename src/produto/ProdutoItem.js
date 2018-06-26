import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class ProdutoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            nome: "",
            valor: ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.editar) {
            return {
                nome: nextProps.editar.nome,
                valor: nextProps.editar.valor
            }
        }
        return null;
    }

    setValor(campo, valor) {
        this.setState(
            (anterior) => {
                anterior[campo] = valor;
                return anterior;
            }
        );

    }

    confirmar() {
        if (this.state.nome &&
            this.state.valor) {
            let prod = {
                id: this.props.editar ?
                    this.props.editar.id : null,
                nome: this.state.nome,
                valor: this.state.valor
            };
            this.props.onConfirmar(prod);
        } else {
            alert("Preencha todos os campos!");
        }

    }


    render() {

        return <Dialog
            open={true}
        >
            <DialogTitle>{this.props.editar ? "Editar item " + this.props.editar.id : "Novo item"}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nome"
                    fullWidth
                    value={this.state.nome}
                    onChange={(evento) => this.setValor('nome', evento.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Valor"
                    fullWidth
                    type="number"
                    value={this.state.valor}
                    onChange={(evento) => this.setValor('valor', evento.target.value)}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={(evento) => { this.props.onCancelar() }} color="primary">
                    Cancelar
              </Button>
                <Button onClick={(evento) => { this.confirmar() }} color="primary">
                    Confirmar
              </Button>
            </DialogActions>
        </Dialog>


    }
} 