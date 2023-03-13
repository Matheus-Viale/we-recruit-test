export default function ButtonModal(props: {name: string, modalTarget: string, btnClass: string}) {
    return (  
        <button type="button" className={"btn " + props.btnClass} data-bs-toggle="modal" data-bs-target={props.modalTarget}><i className="bi bi-person-plus-fill"></i> {props.name}</button>        
    );
}