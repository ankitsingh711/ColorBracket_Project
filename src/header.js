import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


const url = "https://retoolapi.dev/B13laa/getusers"

class Header extends Component{

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name || sessionStorage.getItem('uName') !==null ){
            if(sessionStorage.getItem('uName') !==null){
                let name = sessionStorage.getItem('uName')
                let image = sessionStorage.getItem('uImg')
                return(
                    <>
                    <Link to="/" className="btn btn-success">
                        Hi <img src={image} style={{height:50,width:50}} alt="img"/> {name}
                    </Link> &nbsp;
                    <div className="btnlogin">
                            <button onClick={this.handleLogout} className="btn btn-danger">
                            Logout
                            </button>
                    </div>
                    </>
                )
            }
            else{
                let data = this.state.userData;
                let outArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userInfo',outArray)
                sessionStorage.setItem('loginStatus',true)
                return(
                    <>
                    <div className="btnlogin">
                            <Link to="/" className="btn btn-success">
                                <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                            </Link>
                        </div> &nbsp;
                    <div className="btnlogin">
                            <button onClick={this.handleLogout} className="btn btn-danger">
                            Logout
                            </button>
                    </div>
                    </>
                )
            }

        }else{
            return(
                <>
                    <div className="btnlogin">
                    </div> &nbsp;
                <div className="btnlogin">
                        <Link to="/register" className="btn btn-primary">
                        <span className="glyphicon glyphicon-user"></span> Register</Link>
                </div>
                </>
            )
        }
    }

    render(){
        return(
            <Fragment>
                {/* <!-- Navbar --> */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                        {/* <!-- Toggle button --> */}
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <i className="fas fa-bars"></i>
                        </button>
    
                        {/* <!-- Collapsible wrapper --> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <!-- Navbar brand --> */}
                        <Link to="/" className="navbar-brand mt-2 mt-lg-0" >
                            <img
                            src="http://www.colorbracket.com/images/logo.png"
                            height="30"
                            alt="MDB Logo"
                            loading="lazy"
                            />
                        </Link>
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to="/" className="nav-link" >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/" className="nav-link" >Contact Us</Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                        </div>
                        {this.conditionalHeader()}
                    </div>
                    </nav>
            </Fragment>
        )
        
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}


export default Header;