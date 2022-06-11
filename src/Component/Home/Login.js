import React, { Component, Fragment } from 'react';



const url="https://retoolapi.dev/B13laa/getusers?id"


class Home extends Component{

    constructor(props){
        super(props)

        this.state={
            user_id:'',
            password:'',
            message:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/employee')
            }
        })
    }




    render(){
        return(
            <Fragment>
                <section className="vh-100" style={{backgroundColor: "#508bfc"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Log in</h3>

                            <div className="form-outline mb-4">
                            <h3 style={{color:'red'}} >{this.state.message}</h3>
                            <input type="user_id" name="user_id" id="user_id" className="form-control form-control-lg" value={this.state.user_id} onChange={this.handleChange} placeholder='Type Your User Id' />
                            <label className="form-label" for="typeEmailX-2" >User Id</label>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" name="password" id="password" className="form-control form-control-lg" value={this.state.password} onChange={this.handleChange} placeholder='Type Your Password'/>
                            <label className="form-label" for="password" >Password</label>
                            </div>

                            {/* <!-- Checkbox --> */}
                            <div className="form-check d-flex justify-content-start mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                            <label className="form-check-label" for="form1Example3" > Remember password </label>
                            </div>
                                <button className="btn btn-primary btn-lg btn-block"  type="submit" onClick={this.login} >Login</button>

                            <hr className="my-4"/>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </Fragment>
        )
    }
}

export default Home;