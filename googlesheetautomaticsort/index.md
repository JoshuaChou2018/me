# Automatically Sort Data in Google Sheets


Automatically Sort Data in Google Sheets

**Extension -> Apps script**

```
function autoSort(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Sheet1")
  const range = ws.getRange(2,1,ws.getLastRow()-1,2)
  range.sort({column: 2, ascending: false})
}

function onEdit(e){
  autoSort(e)
}
```




