Hads-on Day: 12
Create a GridComponent in React.js using HTML
element with the following specifications - The Table should accept the DataSource property from parent of the type aray to generate Rows and Columns (mandatory today) - Make sure that the the DataSource in not undefined or empty, if it is, then return a message that Grid Cannot be generated to parent (mandatory today) - When a row is selected from the GridComponent, the data of the selected row must be passed to the parent component. so that parent componenyt can update it(mandatory today) - The GridComponent, can accept the 'canDelete' prop type form parent as boolean. If the 'canDelete' is true, then each row must generate the delete button and whrn this button is clicked, the row must be deleted from the array of the parent component. (mandatory today) - The GridComponent can accept isSort boolean prop type and sortKey prop type. If isSort is true, then the daata in the GridComponenty must be sorted in ascending order of the 'sortKey' value - if isSort = true and sortKey=ProductName, then the data in GridComponent must be shown in sorted order of the ProductName (mandatory today) - GridComponent accept props type to show number of rows based on rowCount prop type passed from parent. The parent may keep of changing value of the rowCount and based on the rowCount, the GridComponeny should show the records. (optional)

Day 14: Project Exercise
Create MySQL-Express-React-Node Application with the following specifications

Create Database Compoent with Department and Employee Tables (Already Done)
Create REST APIs usign Express + Node for Performing CRUD operations on Department and Employee tables using MySQL + Sequelize (Already Done)
Create a React Single Page Application for perform CRUD Operations by calling REST APIs for Department (Done by Trainer Mahesh Sabnis) and Employee in React application
Create HTTP Service usign axios for get/post/put/delete for Employee REST API
Create Components for
List Employees
Should Have Search Funcationality for Employee Based on DeptName / EmpName / Designation
The Employee List should show all employees by default, then it should filter employees based on search
Employee List must have Edit and Delete Buttons for Navigating to Edit and Delete Components
Create Employee must have validation check with Validation Summary (Use Vaidation Summary Component)
Edit component will edit employee with all validations
Delete component is just a read-only component that will be used by end-user to see which employee is being deleted
Each co0mponent must have link for gping back to List Employee component if end-use does-not want to creae/edit/delete

Hands-on labb Day 15
Create a Functional Component that will be reponsible for performing the following: (Parent-Component)

Will have the TableComponent created for showing data from REST APIs calls for Departments and employees.
TableComponent will be used twice in the parent component to show Employees and Departments
use 'useEffect' for Ajax calls
use 'useContext' to pass Depts and Emps to these two table components
use 'useState' for Depts and Emps
When a user select a row from a Table showing the Departments, the other table showing the list of employees will show only employess based on the selected DeptName

Hands-on lab
create an action 'SELECT_EMPLOYEE', dispatch this action on the onClick() event of the table row in ListEmployeesComponent. The selected, employee must be displayed inside the CreateEmployeeComponent.

Hands-on of the day
Recap the code for Redux-SAGA
Modify the SAGA middleware for PUT and DELETE oeprations time to 03:30 pm

React-Redux Final Hands-on Project (To be submitted by Friday Evening)
Create a Single page React Application based on MERN Concept
It should use the Redux State management and SAGA middleware to perform CRUD oeprations
Note: Define Database and tables of your chioce
Create Express RES API for CRUD oeprations
This MUST cover
React Components with Hooks
React-Router-DOM
Redux State Management
SAGA Middleware
