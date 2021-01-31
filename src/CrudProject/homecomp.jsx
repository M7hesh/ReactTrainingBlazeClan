import JwtClientComp from './jwtClientComp';
const HomeComp = () => {

    return(
        <div>
            <h1  align='center'><b>WELCOME To CRUD App HOMEPAGE!</b></h1>
            <h1>As of now Login and Register are not functional. Directly access the links (Create Employee and List Employees) above.</h1>
            {<JwtClientComp/>}
        </div>
    );
}
export default HomeComp;