import React from 'react';
import {Link} from 'react-router-dom';

const EmployeeDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){   
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <table className="table align-middle mb-0 bg-white" key={item.id}>
                            <thead className="bg-light">
                                <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Designation</th>
                                <th>Company Logo</th>
                                <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XEFeVA8iQAlnX6fUliNL336-wxbKmeG9elNFIDyQKFcA__k0CDdrdeaDeaFgRmZ88tc&usqp=CAU"
                                        alt="unknown"
                                        style={{width: "45px",height: "45px"}}
                                        className="rounded-circle"
                                        />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{item.name}</p>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{item.company}</p>
                                </td>
                                <td>
                                    <p style={{color:"black"}} className="badge badge-success rounded-pill d-inline">{item.designation}</p>
                                </td>
                                <img src={item.company_logo} alt={item.company} width="70px"/>
                                <td>
                                    <Link style={{textDecoration:"none"}} to={`/details/${item.id}`} key={item.id} type="button" className="btn btn-link btn-sm btn-rounded">
                                    View More
                                    </Link>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data For Filter Applied</h2>
                    </div>
                )
            }
        }else{
            return(
                <>
                    <button style={{marginLeft:"550px",fontSize:"25px"}} className="btn btn-primary" type="button" disabled>
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        <span claclassNamess="visually-hidden">Loading...</span>
                    </button>

                </>
            )
        }
    }


    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default EmployeeDisplay;