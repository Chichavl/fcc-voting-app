import React, { Component } from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default class VoteApp extends Component {
    render() 
    {
        const voteApp = (
        <Grid>
            <Jumbotron>
                <div>
                    <ul>
                        <li><Link to='/vote'>vote</Link></li>
                        <li><Link to='/'>poll</Link></li>
                    </ul>
                    { this.props.children }
                </div>
            </Jumbotron>
        </Grid>
        );
        return voteApp;
    }
}