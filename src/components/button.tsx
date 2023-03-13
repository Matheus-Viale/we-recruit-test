export default function Button(props: {name: string, btnClass: string, iconClass: string, clickFunction: React.MouseEventHandler<HTMLButtonElement>}) {
    return (  
        <button type="button" className={"btn " + props.btnClass} onClick={props.clickFunction}><i className={props.iconClass}></i> {props.name}</button>
    );
}