import DataGrid, {
    Column, Paging, Pager, Toolbar, Item, Editing, Form, SearchPanel
} from 'devextreme-react/data-grid';
import {
    SimpleItem,
    GroupItem
} from 'devextreme-react/form';
import React from 'react';
import { ds } from '../data/persons';

const allowedPageSizes = [10, 20, 50];

class DataTable extends React.Component {
    
    constructor(props: any){
        super(props);
        this.state = {events: []};
        (this as any).onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
        (this as any).onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
        this.logEvent = this.logEvent.bind(this);
    }

    logEvent(eventName: String) {
        this.setState((state) => ({ events: [eventName].concat((state as any).events)}));
    }

    render(){
        return (
            <>
                <div className="container">
                    <div className="row">

                        <DataGrid
                            id='dataGrid'
                            dataSource={ds}
                            showBorders={true}
                            allowColumnReordering={true}
                            columnAutoWidth={true}
                            onRowRemoved={(this as any).onRowRemoved}
                            onRowUpdated={(this as any).onRowUpdated}
                        >
                                <SearchPanel visible={true} />
                                <Editing
                                    allowAdding={true}
                                    allowUpdating={true}
                                    allowDeleting={true}
                                    mode="popup"
                                >
                                    <Form>
                                        <GroupItem caption={"Dados Pessoais"}>
                                            <SimpleItem dataField={"FirstName"}/>
                                            <SimpleItem dataField={"LastName"}/>
                                            <SimpleItem dataField={"Gender"}/>
                                            <SimpleItem dataField={"Address"}/>
                                            <SimpleItem dataField={"DateOfBirth"}/>
                                        </GroupItem>
                                    </Form>
                                </Editing>
                                <Column dataField="FirstName" caption={'Nome'}></Column>
                                <Column dataField="LastName" caption={'Sobrenome'}></Column>
                                <Column dataField="Gender" caption={'Gênero'}></Column>
                                <Column dataField="Address" caption={'País'}></Column>
                                <Column dataField="DateOfBirth" caption={'Data de Nascimento'}></Column>
                                <Paging
                                    defaultPageSize={10}
                                    enabled={true} 
                                />
                                <Pager
                                    showInfo={true}
                                    infoText="Página {0}. Total: {1} ({2} items)"
                                    showPageSizeSelector={true}
                                    allowedPageSizes={allowedPageSizes}
                                    showNavigationButtons={true}
                                />
                                <Toolbar>
                                    <Item name="searchPanel" />
                                </Toolbar>
                        </DataGrid>
                    </div>
                </div>
            </>
        );
    }
}

export default DataTable;
