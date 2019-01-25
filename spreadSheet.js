/**
 * Created by Alok on 2019-01-24.
 */
function createExcel() {
    let rows = document.getElementById('row').value;
    let columns = document.getElementById('column').value;
    console.log(rows, columns);
    // let myArray = new Array(rows);
    //
    // for(let i = 0; i < 2; i++) {
    //     myArray[i] = new Array(columns);
    // }
    //
    // console.log(myArray);

    for (let i = 0; i < rows; i++) {
        let table = document.getElementById("myTable");
        let row = table.insertRow(i);

        for (let j = 0; j < columns; j++) {
            let cell1 = row.insertCell(j);
            (cell1).innerHTML = " ";
            cell1.contentEditable = true;
        }
    }
}
