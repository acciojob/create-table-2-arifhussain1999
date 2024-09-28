function createTable() {
    const rn = prompt("Input number of rows ");
    const cn = prompt("Input number of columns");
  
    const table = document.getElementById('myTable');
  
    // Clear existing rows and columns
    table.innerHTML = "";  // This line clears the table
  
    for (let i = 0; i < rn; i++) {
        // Declare the variable for the new row
        let row = table.insertRow(i);  // Create a new row
  
        for (let j = 0; j < cn; j++) {
            // Declare the variable for the new cell
            let col = row.insertCell(j);  // Create a new cell in the current row
            
            // Set the cell's text content
            col.textContent = "Row-" + i + " Column-" + j;  // Correctly assign text to col
        }
    }
}
