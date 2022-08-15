import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {ViewListSharp} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import PopulationView from './PopulationView';
import { forwardRef } from 'react';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
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

function CountryViewList() {
const [data, setData] = useState([])
const [populationRowData, setPopulationRowData] = useState(null)
const columns =[
  
  {title:"Country", field:"country"},
  {title:"City", field:"city"},
  
]

useEffect(()=>{
  fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
  .then(response => response.json())
    .then(response=> {
      console.log(response.data)
      setData(response.data)})
},[])
const showPopulationView= (evt, rowData) => {
  setPopulationRowData(rowData.populationCounts)
}
  return (
        <div className="App" style={{marginTop:"10px"}}>
          <h1 style={{textAlign:"center"}}>
           <span>Country-City-Population</span> </h1>
            <Grid container spacing={1}>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
          {!populationRowData ? <><h4 align="center" data-testid ="material-table">Table</h4>
          <MaterialTable
            
            title="Country List"
            icons={tableIcons}
            data={data}
            columns={columns}
            actions={[
              {
                icon: () => <ViewListSharp/>,
                tooltip: 'Population View',
                onClick: (evt, rowData) => showPopulationView(evt, rowData)
              }
            ]}
            options={{
              actionsColumnIndex: -1,
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              rowStyle: {
                backgroundColor: '#EEE',
              }
            }} /></>
         : <PopulationView populationRowData={populationRowData}/>}
          </Grid>
            </Grid>
          </div>
  )
  
}
export default CountryViewList;






