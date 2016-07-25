import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';

class Poll extends Component {
  // array shoul be [{poll_name:"Test name", _id:"Uihdb5"}]
  
  render() 
  {
    const pollInstance = (
      <article>
        <h1>FCC Polls</h1>
        <p>Select a poll to see the results and vote, or sign-in to make a new poll.</p>
        { /* TODO check for authenticated user, instead of true */ }
        {this.props.user != 'Unknown User'?<Button>Add Poll</Button>:null}
        <ListGroup>
          {this.props.polls.map(function(el,idx)
          {
                return (
                <ListGroupItem key={idx}>
                  <Link to={`/vote/${el._id}`}>{el.poll_name}</Link>
                </ListGroupItem>)
            })}
        </ListGroup>
      </article>
    );
     return pollInstance;
  }
}

function mapStateToProps(state)
{
  return  {
    user: state.user,
    polls: state.polls
  }
}

export default connect(mapStateToProps)(Poll)