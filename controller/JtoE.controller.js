
const XLSX = require('xlsx');

exports.jsonToExcel = ((req, res) => {
    let arr = req.body

    arr.sort(function(a,b){
        return a.worksheetorder -b.worksheetorder
    })
// res.status(200).json(arr)

    const workBook = XLSX.utils.book_new();

    for (let i = 0; i < arr.length; i++) {
        let sheetName = arr[i].worksheetname;
        let sheetData = arr[i].worksheetdata;
        let workSheet = XLSX.utils.json_to_sheet(sheetData);
        XLSX.utils.book_append_sheet(workBook, workSheet, sheetName)
    }

    XLSX.write(workBook, { bookType: 'xlsx', type: "binary" })

    let exceloutput = Date.now() + "output.xlsx"
    XLSX.writeFile(workBook, exceloutput)

    res.status(200).json("please check your folder")


})