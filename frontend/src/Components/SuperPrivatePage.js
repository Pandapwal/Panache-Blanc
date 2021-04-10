import React from 'react';

export default class SuperPrivatePage extends React.Component{
  render(){
    return(
      <div className="content">
        <h1>This is a super private page which you can see because you're logged in!</h1>
      </div>
    )
  }
}
