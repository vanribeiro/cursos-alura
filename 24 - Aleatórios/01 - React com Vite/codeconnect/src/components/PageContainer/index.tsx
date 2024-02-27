import Main from '../Main';
import Sidebar from '../Sidebar';
import './style.css';

function PageContainer() {
    return(
        <div className='container'>
            <Sidebar />
            <Main />
        </div>
    );
}

export default PageContainer;