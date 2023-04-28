function generateTable(elem) {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let number = 1;
    for (let i = 1; i <= 10; i++) {

        const row = document.createElement("tr");
        tbl.append(row);
        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(number);
            cell.append(cellText);
            row.append(cell);
            number++;
      };
      tblBody.append(row);
    }

    tbl.append(tblBody);

    document.body.append(tbl);
};

generateTable();