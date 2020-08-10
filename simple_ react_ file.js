import react from “React”

class App extends React.Component
{
constructor()
{
	super()
	this.state = {isLoggedin : true}
	this.handleClick = this.handleClick.bind(this)
}

/*componentDidMount()
{
	this.setState(=>{ return ({this.state.isLoggedin : false})  },1500)
}*/ 
//to change the state frequently in 1.5 sec (optional)

handleClick()
{
this.setState(prevState =>
 				{	
				return (isLoggedin : !prevState.isLoggedin) 
				}
			)
}
render()
{
	return(
			<div>
				<button onClick = {this.handleClick}>Log  {this.state.isLoggedin? ”Out” : “in”}</button>
				<h1>You are Logged {this.state.isLoggedin? ”in” : “out”} !!</h1>
			</div>
		)
}
}
 
export default App