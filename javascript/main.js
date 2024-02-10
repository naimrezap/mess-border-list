const members = [
    {
        name: "নাজমুল",
        phone: "01737939087",
        address: "রাজশাহী" 
    },
    {
        name: "মিজান",
        phone: "01740017938",  
        address: "মানিকগঞ্জ"
    },
    {
        name: "নাসির",
        phone: "01724502625", 
        address: "টাঙ্গাইল"  
    },
    {
        name: "সুমন", 
        phone: "01773763427",
        address: "দিনাজপুর"
    },
    {
        name: "মজনু",
        phone: "017262433",
        address: "কুড়িগ্রাম" 
        
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



