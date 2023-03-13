import { useRef } from "react";
import { insertRowRemote } from "../helpers/tableEvents";

export default function AddPersonModal() {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const adressRef = useRef<HTMLInputElement>(null);
    const dobRef = useRef<HTMLInputElement>(null);
    const buttonCloseRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        //Valida tipagem e campos em branco
        if(firstNameRef.current === undefined || firstNameRef.current === null || firstNameRef.current.value === "") return
        if(lastNameRef.current === undefined || lastNameRef.current === null || lastNameRef.current.value === "") return
        if(genderRef.current === undefined || genderRef.current === null || genderRef.current.value === "") return
        if(adressRef.current === undefined || adressRef.current === null || adressRef.current.value === "") return
        if(dobRef.current === undefined || dobRef.current === null || dobRef.current.value === "") return
        if(buttonCloseRef.current === undefined || buttonCloseRef.current === null) return

        //Cria novo registro
        const newPersonData = {
            "FirstName": firstNameRef.current.value,
            "LastName": lastNameRef.current.value,
            "Gender": genderRef.current.value,
            "Address": adressRef.current.value,
            "DateOfBirth": dobRef.current.value
        }

        //Envia o registro para a Tabela
        insertRowRemote(newPersonData);

        //Limpa Campos
        firstNameRef.current.value = ''
        lastNameRef.current.value = ''
        genderRef.current.value = ''
        adressRef.current.value = ''
        dobRef.current.value = ''

        //Fecha Modal
        buttonCloseRef.current.click();
    }

    return (
        <>
            <div className="modal fade" id="addPersonModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar Pessoa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstNameInput" className="form-label">Nome:</label>
                                    <input ref={firstNameRef} type="text" className="form-control" id="firstNameInput" aria-describedby="firstName" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastNameInput" className="form-label">Sobrenome:</label>
                                    <input ref={lastNameRef} type="text" className="form-control" id="lastNameInput"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="genderSelect" className="form-label">Gênero:</label>
                                    <select ref={genderRef} className="form-select form-select-sm" aria-label=".form-select-sm example" id="genderSelect" required>
                                        <option defaultValue={''}>Escolha...</option>
                                        <option value="male">Masculino</option>
                                        <option value="female">Feminino</option>
                                        <option value="other">Outro</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="adressInput" className="form-label">País:</label>
                                    <input ref={adressRef} type="text" className="form-control" id="adressInput" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfBirthInput" className="form-label">Data de Nascimento:</label>
                                    <input ref={dobRef} type="date" className="form-control" id="dateOfBirthInput" required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={buttonCloseRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}