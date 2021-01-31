import axios from  'axios';

export class Httpservice {
    constructor(){
        this.url = "http://localhost:9090";
    }

    // get department data
    getData(){
        let response = axios.get(`${this.url}/api/departments`);
        return response;
    }

    //get employee data
    getEmpData(){
        let response = axios.get(`${this.url}/api/employees`);
        return response;
    }

    // gettng single record based on id
    getDatabyid(id){
        let response = axios.get(`${this.url}/api/departments/${id}`);
        return response;
    }

    //get single emp record by id
    getEmpDatabyid(id){
        let response = axios.get(`${this.url}/api/employees/${id}`);
        return response;
    }

    //post dep data
    postData(dept){
        let response = axios.post(`${this.url}/api/departments`,dept, {
            // @ts-ignore
            'Content-Type': 'application/json' //promise configuration
        } );
        return response;
    }

    //post emp data
    postEmpData(emp){
        let response = axios.post(`${this.url}/api/employees`,emp, {
            // @ts-ignore
            'Content-Type': 'application/json' //promise configuration
        } );
        return response;
    }

    //put dep Data
    putData(dept){
        let response = axios.put(`${this.url}/api/departments/${dept.DeptNo}`,dept, {
            // @ts-ignore
            'Content-Type': 'application/json'
        } );
        return response;
    }

    //put emp data
    putEmpData(emp){
        let response = axios.put(`${this.url}/api/employees/${emp.EmpNo}`,emp,{
            'Content-Type': 'application/json'
        });
        return response;
    }

    //delete dep record
    deleteData(id){
        let response = axios.delete(`${this.url}/api/departments/${id}`);
        return response;
    }

    //delete emp record
    deleteEmpData(id){
        let response = axios.delete(`${this.url}/api/employees/${id}`);
        return response;
    }
}