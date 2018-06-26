import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import ProdutoPagina from '../produto/ProdutoPagina';
import logo from '../logo.svg';
import Typography from '@material-ui/core/Typography';

export default class MenuPagina extends React.Component {
    render() {
        return <Grid container justify="center" alignItems="stretch" style={
            {
                height: "100vh",
                backgroundColor: "#DCDCDC"
            }}>
            <Grid item xs="3" md="2" lg="2" style={{ backgroundColor: "#fff" }}  >

                <Toolbar><img src={logo} style={{ height: "40px", marginRight: "10px" }} />
                    <Typography variant="title" gutterBottom>
                        Logo
              </Typography>
                </Toolbar>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>shopping_cart</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Produtos              
                            </Typography>
                        } />
                    </ListItem>
                </List> </Grid>
            <Grid item xs="9" md="8" lg="6"   >
                <Paper style={{ height: "100%" }}>
                    <AppBar position="static" style={{ height: "60px" }}>
                        <Toolbar>Login</Toolbar>
                    </AppBar>
                    <div style={{ marginLeft: "15px", height: "calc(100% - 60px)", overflow: "auto" }}>
                        <ProdutoPagina />
                    </div>
                </Paper>
            </Grid>
        </Grid>
    }

}

