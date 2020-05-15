import React, { useState, useEffect, forwardRef } from 'react';
import MaterialTable from 'material-table';
import { AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, Edit, FilterList,
    FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn, Delete } from '@material-ui/icons';

function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames();
    }, [])

    const getGames = () => {
        fetch('http://localhost:8080/games')
        .then(response => response.json())
        .then(data => setGames(data))
        .catch(err => console.error(err))
    }

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const columns = [
        {
            title: 'Games',
            field: 'name'
        },
        {
            title: 'Difficulty',
            field: 'difficulty.difName'
        },
        {
            title: 'Genre',
            field: 'genre.name'
        }
    ]


    return(
        <div style={{ maxWidth: "100%", margin: 15 }}>
            <MaterialTable
                icons={tableIcons}
                title="Games"
                columns={columns}
                data={games}
                >
            </MaterialTable>
        </div>
    );
}

export default Games;