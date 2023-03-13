import { getAllDataSource } from "../helpers/tableEvents";

export function saveData(){
    const persons = getAllDataSource();
    localStorage.setItem('persons', JSON.stringify(persons));
}