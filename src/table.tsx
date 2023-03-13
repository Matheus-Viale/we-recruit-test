import Header from './components/header';
import 'devextreme/dist/css/dx.material.blue.dark.css';
import ButtonRow from './components/buttonRow';
import AddPersonModal from './components/modal';
import DataTable from './components/dataTable';


 
export default function App() {
    return (
        <>
            <Header/>
            <ButtonRow/>
            <AddPersonModal/>
            <DataTable/>
            
        </>
    );
}