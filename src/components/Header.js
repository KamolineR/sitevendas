import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
    return (
        <AppBar position="static">
            <toolbar>
                <Typography variant="h6" sx={{ flexGrow:1 }}>
                    Loja Virtual
                </Typography>
                <button color="inherit" component={Link} to="/">
                    Home
                </button>
                <button color="inherit" component={Link} to ="/produtos">
                    Produtos
                </button>
                <button color="inherit" component={Link} to ="/cadastrar-produto">
                    Cadastrar Produto
                </button>
                <button color="inherit" component={Link} to ="/carrinho">
                    Carrinho
                </button>
            </toolbar>
        </AppBar>
    );
}

export default Header;