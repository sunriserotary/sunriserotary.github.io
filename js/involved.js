// Chart #2
var years = [1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
var agg_total_members = [0,4,5,6,9,9,11,16,17,17,17,19,20,20,23,23,24,26,27,30,32,38,39,41,44,47,49,53,55,65,68,76,82,89,91];
var per_year_members = [0,4,1,1,3,0,2,5,1,0,0,2,1,0,3,0,1,2,1,3,2,6,1,2,3,3,2,4,2,10,3,8,6,7,2];

// Chart #1
var ctx = document.getElementById("chart1");
var myChart = new Chart(ctx, {
   type: 'line',
   data: {
      labels: years,
      datasets: [{
         label: 'Number of Currently Active Members',
         data: agg_total_members,
         backgroundColor: ['rgba(255, 99, 132, 0.2)',
         ],
         borderColor: [
         'rgba(255,99,132,1)',
         ],
         borderWidth: 1
      },{
         label: 'Active Members Gained Per Year',
         data: per_year_members,
         backgroundColor: [
         'rgba(61, 163, 232, 0.2)',
         ],
         borderColor: [
         'rgba(61, 163, 232, 1)',
         ],
         borderWidth: 1
      }
   ]
   },
   options: {
      responsive: true,
      legend: {
         position: 'bottom',
      },
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero:true
            }
         }]
      }
   }
});


// Chart #2
var ctx = document.getElementById("chart2");
var myChart = new Chart(ctx, {
   type: 'line',
   data: {
      labels: years,
      datasets: [{
         label: 'Number of Currently Active Members',
         data: agg_total_members,
         backgroundColor: ['rgba(255, 99, 132, 0.2)',
         ],
         borderColor: [
         'rgba(255,99,132,1)',
         ],
         borderWidth: 1
      },{
         label: 'Active Members Gained Per Year',
         data: per_year_members,
         backgroundColor: [
         'rgba(61, 163, 232, 0.2)',
         ],
         borderColor: [
         'rgba(61, 163, 232, 1)',
         ],
         borderWidth: 1
      }
   ]
   },
   options: {
      responsive: true,
      legend: {
         labels: {
          padding: 20
       }
    },
    scales: {
         yAxes: [{
            ticks: {
               beginAtZero:true
            }
         }]
      }
   }
});

new Chart(document.getElementById("chart1"), {
  type: 'pie',
  data: {
    labels: ["Chat", "Prospeção", "Whatsapp", "Trial", "Site", "Telefone", "E-mail", "Evento"],
    datasets: [{
      data: [700, 400, 200, 150, 80, 50, 20, 10],
      borderWidth: 2,
      hoverBorderWidth: 10,
      backgroundColor: pieColors,
      hoverBackgroundColor: pieColors,
      hoverBorderColor: pieColors,
      borderColor: pieColors
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'bottom',
      fullWidth: true,
      onClick: () => {}, //prevent filter by default
      labels: {
        generateLabels: (chart) => {

          chart.legend.afterFit = function () {
            var width = this.width; 
            console.log(this);
           
            this.lineWidths = this.lineWidths.map( () => this.width-12 );
            
            this.options.labels.padding = 30;
            this.options.labels.boxWidth = 15;
          };

          var data = chart.data;
          //https://github.com/chartjs/Chart.js/blob/1ef9fbf7a65763c13fa4bdf42bf4c68da852b1db/src/controllers/controller.doughnut.js
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => {
              var meta = chart.getDatasetMeta(0);
              var ds = data.datasets[0];
              var arc = meta.data[i];
              var custom = arc && arc.custom || {};
              var getValueAtIndexOrDefault = this.getValueAtIndexOrDefault;
              var arcOpts = chart.options.elements.arc;
              var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
              var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
              var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
              
              return {
                text: label,
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: bw,
                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                // Extra data used for toggling the correct item
                index: i
              };
            });
          }
          return [];
        }
      }
    }
  }
});
