import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.png';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Container maxWidth={ "lg" }>
        <AppBar position={ "static" } color={ "inherit" }>
            <Typography variant={ "h2" } align={ "center" }>
                Memories
            </Typography>
            <img src={ memories } alt="Memories Image" height={ 120 } width={ 120 } align={ "center" }/>
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

reportWebVitals();