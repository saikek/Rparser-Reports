Apex.grid = {
  padding: {
    right: 0,
    left: 0
  }
}

Apex.dataLabels = {
  enabled: false
}

var flatCountPerDistrictLabels = ['Prague 1', 'Prague 2', 'Prague 3', 'Prague 4', 'Prague 5', 'Prague 6', 'Prague 7', 'Prague 8', 'Prague 9', 'Prague 10', 'Other'];

var pricesPerDistrictCandleGraph = {
  series: candleStickSeriesData,
  title: {
    text: 'Flat Prices by District and Size',
    align: 'left'
  },
  chart: {
    type: 'rangeBar',
    height: 350,
    labels: flatCountPerDistrictLabels
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  dataLabels: {
    enabled: false,
    formatter: function (val, opt) {
      return "%"
    }
  },

  yaxis: {
    labels: {
      formatter: function (value) {
        return value / 1000000 + "M";
      }
    }
  },

  tooltip: {
    enabled: true,
    shared: false,

    //TODO - need to find a way to show normal toolip, where values can be in K's
  }

};

var chart = new ApexCharts(document.querySelector("#spark1"), pricesPerDistrictCandleGraph);
chart.render();

var countPerDistrictLineGraph = {
  chart: {
    type: 'bar',
    height: 380,
    width: '100%',
    stacked: true,
    // stackType: '100%',
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
    }
  },
  colors: ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'],
  series: flatCountPerDistrictData,
  labels: flatCountPerDistrictLabels,
  xaxis: {
    labels: {
      show: true
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#78909c'
      }
    }
  },
  title: {
    text: 'Flat count per district',
    align: 'left',
    style: {
      fontSize: '18px'
    }
  }
}

var chartBar = new ApexCharts(document.querySelector('#bar'), countPerDistrictLineGraph);
chartBar.render();

var totalCount = document.getElementById("cntTotal");

var options = {
  series: heatMapDataFlatsCountPerSeller,
  legend: {
  show: false
},
chart: {
  height: 350,
  type: 'treemap'
},
title: {
  text: 'Basic Treemap'
}
};

var chart = new ApexCharts(document.querySelector("#hmSellers"), options);
chart.render();