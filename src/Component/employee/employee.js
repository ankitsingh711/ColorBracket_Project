import React,{Component} from 'react';
import axios from 'axios';
import EmployeeDisplay from './employeeDisplay';

const restUrl = "https://retoolapi.dev/GFHqAV/getemployees?id"

class Employee extends Component {
    constructor(props){
        super(props)

        this.state={
            employee:''
        }
    }

    setDatPerFilter = (data) => {
        this.setState({employee:data})
    }

    render(){
        return(
            <>
                    <EmployeeDisplay listData={this.state.employee}/>
            </>
        )
    }
    //page load call api 
    componentDidMount(){
        let employee_id = this.props.match.params.id?this.props.match.params.id:1
        sessionStorage.setItem('employee_id',employee_id)
        axios.get(`${restUrl}${employee_id}`)
        .then((res) => {this.setState({employee:res.data})})
    }
}

export default Employee;