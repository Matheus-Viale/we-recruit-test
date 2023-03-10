export default function ButtonBootstrap(props: {name: String}) {
    return (
        <>
            <div className="container mb-3">
                <div className="row justify-content-end">
                    <div className="col-2 text-end">
                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-person-plus-fill"></i> {props.name}</button>
                    </div>
                </div>
            </div>
        
        </>
    );
}