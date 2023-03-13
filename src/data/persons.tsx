import DataSource from 'devextreme/data/data_source';

let personsValidate;
const dbPersons = localStorage.getItem('persons');
if(dbPersons === null){
    personsValidate = []
}else{
    const personsObject = JSON.parse(dbPersons);
    personsValidate = personsObject;
}


const persons = personsValidate;

export const ds = new DataSource(persons);