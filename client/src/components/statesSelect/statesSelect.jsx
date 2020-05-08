import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './statesSelect.css';


class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionalStates: ['angry', 'sick', 'stuck', 'scared']
    }
  }

  getVerses(event) {
    event.preventDefault();
    console.log(`fetching verse for ${event.target.innerHTML}`);
  }
  render() {
    return (
        <Grid 
          container
          className='states'
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          {
            this.state.emotionalStates.map((emotionalState, index) => {
              return (
                <Grid container item key={index} md={4}>
                  
                    <Paper id='stateComponent'>
                      <Grid item>
                        Image Goes here
                      </Grid>
                      <Grid item>
                        {emotionalState}
                      </Grid>
                    </Paper>
                  
                </Grid>
              );
            })
          }
        </Grid>
      
    );
  }
}

export default States;


        // <div className='state' key={index} onClick={this.getVerses}>
        //           {emotionalState}
        //         </div>