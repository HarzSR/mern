import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import React from "react";

function App() {
    const classes = useStyles();
    return (
        <Container maxWidth={ "lg" }>
            <AppBar className= { classes.appBar } position={ "static" } color={ "inherit" }>
                <Typography className= { classes.heading } variant={ "h2" } align={ "center" }>
                    Memories
                </Typography>
                <img className= { classes.image } src={ memories } alt="Memories" height={ 60 } width={ 60 } align={ "center" }/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify={ "space-between" } alignItems={ "stretch" } spacing={ 4 }>
                        <Grid item xs={ 12 } sm={ 7 }>
                            <Posts />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 4 }>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;