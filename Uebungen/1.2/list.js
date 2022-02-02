export function getList(addresses) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Adressbuch</title>
        <meta charset="utf-8" />
        <link
      </head>
      <body>
        <h1>Adressbuch</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>löschen</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            ${addresses.map(createRow).join('')}
          </tbody>
        </table>
        <br>
        <a href="/new">new</a>
      </body>
    </html>`;
  }
  
  function createRow(address) {
    return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">löschen</a></td>
    <td><a href="/edit/${address.id}">edit</a></td>
  </tr>`;
  }