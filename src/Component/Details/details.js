import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const url = "https://retoolapi.dev/H2F0Ui/getemployedetail?id"

class Details extends Component{

    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state
        return(
            <Fragment>
                <section style={{backgroundColor: "#eee"}}/>
                    <div className="container py-5"/>
                        <div className="row"/>
                        <div className="col-lg-4" style={{marginLeft:"400px"}}>
                            <div className="card mb-4">
                            <div className="card-body text-center">
                            <img src={details.company_logo} alt="avatar"
                                className="rounded-circle img-fluid" style={{width: "150px"}}/>
                                <h5 className="my-3">{details.name}</h5>
                                <p className="text-muted mb-1">{details.designation}</p>
                                <div className="d-flex justify-content-center mb-2">
                                <Link to={details.view_more} target="_blank" type="button" className="btn btn-primary">View More</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8"/>
                            <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{details.name}</p>
                                </div>
                                </div>
                                <hr/>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Rating</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{details.rating}</p>
                                </div>
                                </div>
                                <hr/>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Company</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{details.company}</p>
                                </div>
                                </div>
                                <hr/>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Interests</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{details.interests}</p>
                                </div>
                                </div><hr/>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Designation</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{details.designation}</p>
                                </div>
                                </div>
                                <hr/>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Job Description</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{details.job_descripton}</p>
                                </div>
                                </div>
                                <hr/>
                            </div>
                            </div>
                            <div className="row"/>
                            <div className="col-md-6">
                            </div>
                            <div/>
                        <div/>
                        <div/>
                    <div/>
                    <section/>
            </Fragment>
        )
    }

    async componentDidMount(){
        let userId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${userId}`)
        console.log(">>>response.data[0].employee_id",response.data[0].id)
        this.setState({details:response.data[0]})
    }
}

export default Details;