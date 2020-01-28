import React, {Component} from 'react';

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state={
			emailSignin:'',
			passwordSignin:''
		}
	}

  	onEmailChange = (event) => {
    	this.setState({emailSignin:event.target.value});
  	}

  	onPasswordChange = (event) => {
    	this.setState({passwordSignin:event.target.value});
  	}

  	onSubmitSignin = () => {
  		fetch('http://localhost:3000/signin',{
  			method:'post',
  			headers:{'Content-Type':'application/json'},
  			body: JSON.stringify({
  				email: this.state.emailSignin,
  				password: this.state.passwordSignin
  			})
  		}).then(response => response.json())
  		.then(data => {
  			if(data != 'signin error'){
  				console.log(data)
  				this.props.loadUser(data)
  				this.props.onRouteChange('home')
  			}
  		})
  	}

	render(){
		return (
			<article className="br3 shadow-5 ba dark-gray b--black-10 mv6 w-100 w-50-m w-33-l center">
				<main className="pa1 black-80">
				  <div className="measure ">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange = {this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange = {this.onPasswordChange}/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={this.onSubmitSignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => this.props.onRouteChange('register')} className="f6 link dim black db">Register</p>
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}


export default SignIn;