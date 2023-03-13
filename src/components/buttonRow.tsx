import ButtonModal from './buttonModal';
import Button from './button';
import { saveData } from '../data/saveData';
import { clearData } from '../data/clearData';


export default function ButtonRow() {
    return (
        <>
            <div className="container mb-3">
                <div className="row justify-content-between">
                    <div className="col-2 text-start">
                        <Button
                            name='Salvar'
                            btnClass='btn-success'
                            iconClass='bi bi-save-fill'
                            clickFunction={saveData}
                        />
                    </div>
                    <div className="col-2 text-center">
                        <Button
                            name='Limpar'
                            btnClass='btn-danger'
                            iconClass='bi bi-trash-fill'
                            clickFunction={clearData}
                        />
                    </div>
                    <div className="col-2 text-end">
                        <ButtonModal 
                            name={'Pessoa'}
                            btnClass={'btn-success'}
                            modalTarget={'#addPersonModal'}
                        />
                    </div> 
                </div>
            </div>
        </>
    );
}

