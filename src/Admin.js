import './Admin.css';
import ActionBar from './Components/ActionBar'
import Main from './Components/Main'

 
const Admin = () => {
    return ( 
        <div className="admin">
          <ActionBar />
          <Main />
          {/* <Sidebar /> */}
    </div>
     );
}
 
export default Admin;
