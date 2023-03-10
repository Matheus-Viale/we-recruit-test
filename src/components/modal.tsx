export default function Modal() {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar Pessoa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstNameInput" className="form-label">First Name:</label>
                                    <input type="text" className="form-control" id="firstNameInput" aria-describedby="emailHelp" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastNameInput" className="form-label">Last Name:</label>
                                    <input type="text" className="form-control" id="lastNameInput"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="genderSelect" className="form-label">Gender:</label>
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" id="genderSelect" required>
                                        <option defaultValue={''}>...</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="adressInput" className="form-label">Address:</label>
                                    <input type="text" className="form-control" id="adressInput" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfBirthInput" className="form-label">Date of Birth:</label>
                                    <input type="date" className="form-control" id="dateOfBirthInput" required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}