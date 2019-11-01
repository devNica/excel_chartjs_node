function renderChart(data, labels) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar', //tipo de grafica
        data: {
            labels: labels,
            datasets: [{
                label: 'Indice de Pobreza', //titulo del grafico
                data: data, //valores
                backgroundColor: [ //color de las barras
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(94, 72, 230, 0.2)'
                ],
                borderColor: [ //color del borde de las barras
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(94, 72, 230, 1)'
                ],
                borderWidth: 1 //grosor del borde
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function getChartData() {
    $.ajax({
        url: 'http://localhost:3000/chartdata',
        success: function (result) {
            var labels = result.data.pais;
            var data = result.data.pobreza;

            renderChart(data, labels);
        },

        error: function (err) {
            console.log(err);
        }
    });
}


$("#renderBtn").click(
    function () {
        getChartData();
    }
);