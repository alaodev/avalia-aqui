import Authentication from './page/Authentication';
import Sidebar from './components/Sidebar';
import TeacherList from './page/TeacherList';

import './assets/styles/global.css';

function App() {
    return (
        <>
            <Sidebar />
            <TeacherList />
            {/* <Authentication /> */}
        </>
    );
}

export default App;
