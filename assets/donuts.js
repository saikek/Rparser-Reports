function createDonut(searchLabel, seriesItem, LabelItem){
        var options = {
            series: seriesItem,
            chart: {
            width: 380,
            type: 'pie',
          },
          labels: LabelItem,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
          };
  
          var chart = new ApexCharts(document.querySelector(searchLabel), options);
          chart.render();
}

createDonut("#donut1", donutSeriesCountPerDistrict, donutLabelsCountPerDistrict)
createDonut("#donut2", donutSeriesCountPerFlatSize, donutLabelsCountPerFlatSize)