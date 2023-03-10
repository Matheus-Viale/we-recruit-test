import Header from './components/header';
import 'devextreme/dist/css/dx.material.blue.dark.css';
import ButtonBootstrap from './components/button';
import Modal from './components/modal';
import DataTable from './components/dataTable';


 
export default function App() {
    return (
        <>
            <Header/>
            <ButtonBootstrap name={'Person'}/>
            <Modal/>
            <DataTable/>
            
        </>
    );
}