const members = [
    {
        name: "Nazmul",
        phone: "090000",
        address: "Rajshahi"
    },
    {
        name: "Mijan",
        phone: "090000",
        address: "Rajshahi"
    },
    {
        name: "Nasir",
        phone: "090000",
        address: "Rajshahi"
    },
    {
        name: "Sumon",
        phone: "090000",
        address: "Rajshahi"
    },
    {
        name: "Mojnu",
        phone: "017262433",
        address: "Kurigram"
        
    }
]

// Select the table element
const table = document.querySelector('table');

// Loop through the members array
members.forEach(member => {
    // Create a new table row
    const row = document.createElement('tr');

    // Create table data cells for each member property
    const nameCell = document.createElement('td');
    nameCell.textContent = member.name;
    const phoneCell = document.createElement('td');
    phoneCell.textContent = member.phone;
    const addressCell = document.createElement('td');
    addressCell.textContent = member.address;

    // Append the cells to the row
    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(addressCell);

    // Append the row to the table
    table.appendChild(row);
});



