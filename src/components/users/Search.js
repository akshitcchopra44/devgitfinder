import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext.js'
import AlertContext from '../../context/alert/alertContext.js'
//Mimicking of class with function
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext)
  const [text, setText] = useState('');

  const onSubmit = e => {                     //This is an non arrow function. It is always better to use arrow function
    e.preventDefault();
    if(text === '') {
      alertContext.setAlert('Please enter something', 'light')
    }
    else{
      githubContext.searchUsers(text);
      setText('')
    }
  };
  const onChange = e => setText(e.target.value); //This is an arrow function
  return (
    <div>
    <form onSubmit={onSubmit} className="form">
    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
    <input type='submit' value='Search' className ='btn btn-dark btn-block' />
    </form>
    {githubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>)}
    </div>
  )

}

export default Search



// onSubmit(e) {                     //This is an non arrow function. It is always better to use arrow function
//   e.preventDefault();
//   if(this.state.text === '') {
//     this.props.setAlert('Please enter something', 'light')
//   }
//   else{
//     this.props.searchUsers(this.state.text);
//     this.setState({text: '' })
//   }
// };
// onSubmit={this.onSubmit.bind(this)}      //Binding of non arrow function
