import React, { Component } from 'react';
import { connect } from 'react-redux';
class Vote extends Component {
  
  
    
  
  
  render()
  {
    const id = this.props.params.id;
    const poll = this.props.polls.filter(function(val)
    {
      (val._id == id)?true:false 
    });
    const voteInstance = (
      <article>
      <h1>Vote for {poll.poll_name}</h1>
      </article>
    );
     return voteInstance;
  }
}

function mapStateToProps(state)
{
  return {
    polls: state.polls
  }
}

export default connect(mapStateToProps)(Vote)