const inv1prevhtml = (
    invoiceNumber,
    dateStr,
    billToName,
    billToAddress,
    billToPhone,
    fromName,
    fromAddress,
    fromPhone,
    itemsHTML,
    total
  ) => `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          background-color: #f0f0f0;
        }
        .container {
          width: 90%; /* Adjust width to control size */
          max-width: 800px; /* Maximum width for larger screens */
          height: auto; /* Let height adjust automatically */
          border: solid 2px #000;
          padding: 20px;
          box-sizing: border-box;
          overflow: auto;
        }
        .header, .footer {
          text-align: center;
          margin-bottom: 20px;
        }
        .details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .details div {
          width: 48%;
        }
        .details p {
          margin: 5px 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          page-break-inside: avoid;
        }
        th, td {
          border: 1px solid #000;
          padding: 8px;
          text-align: center;
          page-break-inside: avoid;
        }
        th {
          background-color: rgba(255, 0, 62, 0.8);
          color: white;
        }
        .total-row {
          font-weight: bold;
        }
        hr {
          border: none;
          border-top: 1px solid #000;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>INVOICE TEMPLATE</h1>
          <hr />
        </div>
  
        <div class="details">
          <div>
            <p><strong>Bill To:</strong></p>
            <p>Name: ${billToName}</p>
            <p>Address: ${billToAddress}</p>
            <p>Phone No: +91 ${billToPhone}</p>
          </div>
          <div>
            <p>Invoice No: ${invoiceNumber}</p>
            <p>Date: ${dateStr}</p>
          </div>
        </div>
  
        <table>
          <tr>
            <th>Description</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
          ${itemsHTML}
        </table>
  
        <div class="total-row">
          <table style="width: 50%; margin-left: auto;">
            <tr>
              <th>Grand Total:</th>
              <td>₹ ${total}</td>
            </tr>
          </table>
        </div>
      </div>
    </body>
  </html>
  `;
  
  export { inv1prevhtml };