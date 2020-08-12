import React from "react"

class MemeGenerator extends React.Component
{
	constructor()
	{
		super()
		this.state = {
			topText : "",
			bottomText : "",
			randomImg : "http://i.imgflip.com/1bij.jpg",
			allMemeImgs : []
		}
		this.makeIt = this.makeIt.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}
}
componentDidMount() 
{
	fetch("https://api.imgflip.com/get_memes")
	.then(response => response.json())
	.then(response => {
		const {memes} = response.data
		this.setState({ allMemeImgs : memes })
	})
}

function handleChange (event)  {
	// {nam , val} = event.target
	let nam = event.target.name
	let val = event.target.value
	this.setState({ [nam] : val })

}

function makeIt (event) 
{
	event.preventDefault()
	const randNum  = Math.floor(Math.random() * this.state.allMemeImgs.length)
	const randMemeImg  = this.state.allMemeImgs[randNum].url
	this.setState({ randomImg : randMemeImg })
}
render()
{
return(
	<div>
		<form>
			<label><input type = "text" placeholder = "toptext" name = "topText" value = {this.state.topText} onChange = {this.handleChange} /></label> <br />
			<label><input type = "text" placeholder = "toptext" name = "bottomText" value = {this.state.bottomText} onChange = {this.handleChange} /></label> <br />
			<button onClick = {this.makeIt}>MAKE IT</button>
		</form>
		<div>
			<img src = "this.state.randomImg" alt = "RANDOM IMAGE" />
			<h2>{this.state.topText}</h2>
			<h2>{this.state.bottomText}</h2>
		</div>
	</div>
)
}

export default MemeGenerator