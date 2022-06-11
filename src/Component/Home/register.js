import React,{Component} from 'react';

const url = "https://retoolapi.dev/B13laa/getusers";

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    register = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
            
            <section className="vh-100" style={{backgroundColor: "#508bfc"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Register</h3>

                            <div className="form-outline mb-4">
                            <input type="name" name="name" id="name" className="form-control form-control-lg" value={this.state.name} onChange={this.handleChange} placeholder='Type Your Name' />
                            <label className="form-label" for="typeNameX-2" >Name</label>
                            </div>

                            <div className="form-outline mb-4">
                            <h3 style={{color:'red'}} >{this.state.message}</h3>
                            <input type="user_id" name="user_id" id="user_id" className="form-control form-control-lg" value={this.state.user_id} onChange={this.handleChange} placeholder='Type Your User Id' />
                            <label className="form-label" for="typeEmailX-2" >User Id</label>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" name="password" id="password" className="form-control form-control-lg" value={this.state.password} onChange={this.handleChange} placeholder='Type Your Password'/>
                            <label className="form-label" for="password" >Password</label>
                            </div>
                                <button className="btn btn-primary btn-lg btn-block"  type="submit" onClick={this.register} >Register</button>

                            <hr className="my-4"/>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </>
        )
    }

}

export default Register