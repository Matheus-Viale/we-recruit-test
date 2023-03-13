import { ds } from "../data/persons";

type persons = {
    "FirstName": string,
    "LastName": string,
    "Gender": string,
    "Address": string,
    "DateOfBirth": string
}

export function insertRowRemote(dataObj: persons) {
    ds.store().insert(dataObj).then(() => ds.reload());
}

export function getAllDataSource(){
    let response;
    (ds as any).store().load().done((res: Array<persons>)=>{
        response = res;
     })
    return response;
}