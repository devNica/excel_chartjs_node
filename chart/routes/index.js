var express = require('express');
var router = express.Router();
var xlsx = require('xlsx');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('templates/chart');
});

router.get('/chartdata', (req, res, next) => {

  var wb = xlsx.readFile('public/excel/indicadores.xlsx'); //workbook
  var ws = wb.Sheets["Hoja1"]; //worksheet
  var data = xlsx.utils.sheet_to_json(ws); //excel_to_json

  var pais = []; //labels to chart
  var pobreza = []; //data to chart

  data.forEach(info => {
    pais.push(info.Pais);
    pobreza.push(info.extPobreza);
  });

  res.send({
    data: {
      pais,
      pobreza
    }
  });

});

module.exports = router;