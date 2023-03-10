import DataGrid, {
    Column, Paging, Pager, Toolbar, Item, Editing, Form, SearchPanel
} from 'devextreme-react/data-grid';
import {
    SimpleItem,
    GroupItem
} from 'devextreme-react/form';
import { persons } from '../data/persons';

const allowedPageSizes = [10, 20, 50];

export default function DataTable() {
    return (
        <>
            <div className="container">
                <div className="row">

                    <DataGrid
                        id='dataGrid'
                        dataSource={persons}
                        keyExpr="PersonID"
                        allowColumnReordering={true}
                        columnAutoWidth={true}
                    >
                            <SearchPanel visible={true} />
                            <Editing
                                allowAdding={true}
                                allowUpdating={true}
                                allowDeleting={true}
                                mode="popup"
                            >
                                <Form>
                                    <GroupItem caption={"Personal Data"}>
                                        <SimpleItem dataField={"FirstName"}/>
                                        <SimpleItem dataField={"LastName"}/>
                                        <SimpleItem dataField={"Gender"}/>
                                        <SimpleItem dataField={"Address"}/>
                                        <SimpleItem dataField={"DateOfBirth"}/>
                                    </GroupItem>
                                </Form>
                            </Editing>
                            <Column dataField="FirstName"></Column>
                            <Column dataField="LastName"></Column>
                            <Column dataField="Gender"></Column>
                            <Column dataField="Address"></Column>
                            <Column dataField="DateOfBirth" dataType={'date'}></Column>
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

