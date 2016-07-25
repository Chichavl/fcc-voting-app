import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class FooterInstance extends Component {
  render() 
  {
    const footerInstance = (
            <Grid>
              <footer>
                This is "Build a Voting App" challenge from <a href='https://freecodecamp.com'> FreeCodeCamp</a>
              </footer>
            </Grid>
    );
     return footerInstance;
  }
}