---
layout: post
title: Use Google Sheet Data to JSON API Endpoint 2023
categories: google-sheet, apps-script, json
permalink: google-sheet-to-json-api-endpoint
---

Google Sheets is a versatile tool for data management, offering user-friendly spreadsheets for various purposes. However, when it comes to sharing or integrating your data into web applications or other systems, using JSON (JavaScript Object Notation) format is often more convenient and efficient. In this article, we'll explore how to convert Google Sheet data to JSON using Google Script, unleashing the potential of your data like never before.

To convert Google Sheet data to JSON using Google Script, you can use the following steps:

- Open the Google Sheet that contains the data you want to convert.
- Click Tools > Script editor.
- Paste the following script into the script editor:

```js
function doGet() {
var content = getSheetData();
var contentObject = {GoogleSheetData: content}
return ContentService.createTextOutput(JSON.stringify(contentObject)).setMimeType(ContentService.MimeType.JSON);
}

function getSheetData() {
var ss= SpreadsheetApp.getActiveSpreadsheet();
var dataSheet = ss.getSheetByName('DATA');
var dataRange = dataSheet.getDataRange();
var dataValues = dataRange.getValues();
return dataValues;
}
```

- Click the Save button.
- Click the Run button.
- Click the deploy > new deployment.
- Now select type > web app.
- Click to deploy.
- A dialog box will appear with the link.
- Copy the link and fetch data and use it in your application.

In conclusion, converting Google Sheet data to JSON using Google Script can unlock the true potential of your data. It streamlines the process, offers automation, and enhances data security. We encourage you to explore this powerful tool and take your data management to the next level.
