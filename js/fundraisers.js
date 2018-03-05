var years = [2013, 2014, 2015, 2016, 2017];

var year_total = [23104, 26194, 24265, 30147, 124840];

var orgs = ['2017 Scholarships', 'Camp Harmon', 'CASA', 'Charities & Grants', "LEO's Haven", 'MB Sanctuary Exploration Center', 'Ride-a-wave', 'Santa Cruz Bike Team', 'Santa Cruz Pump Track', 'Second Harvest Food for Children', 'Share Adventures', 'ShelterBox'];

var orgs_total = [5700, 900, 10500, 25799, 115000, 2500, 2000, 9000, 50000, 8000, 2000, 5500];

var fund_year = [2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008];

var colors_10_fill = ['rgba(117,191,209,.2)', 'rgba(156,210,222,.2)', 'rgba(109,207,195,.2)', 'rgba(144,218,188,.2)', 'rgba(190,233,206,.2)', 'rgba(133,163,214,.2)', 'rgba(158,136,215,.2)', 'rgba(98,102,203,.2)', 'rgba(61,54,161,.2)', 'rgba(62,42,126,.2)'];

var colors_10_border = ['rgba(117,191,209,1)', 'rgba(156,210,222,1)', 'rgba(109,207,195,1)', 'rgba(144,218,188,1)', 'rgba(190,233,206,1)', 'rgba(133,163,214,1)', 'rgba(158,136,215,1)', 'rgba(98,102,203,1)', 'rgba(61,54,161,1)', 'rgba(62,42,126,1)'];


var ctx = document.getElementById("bike-ride-annual");
var bikeridechart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: years,
      datasets: [{
         label: 'Money Raised',
         data: year_total,
         borderColor: ['rgba(197, 126, 211, 1)', 'rgba(35, 57, 91, 1)', 'rgba(64, 110, 142, 1)', 'rgba(142, 168, 195, 1)', 'rgba(203, 247, 237, 1)'],
         backgroundColor: ['rgba(197, 126, 211, .5)', 'rgba(35, 57, 91, .5)', 'rgba(64, 110, 142, .5)', 'rgba(142, 168, 195, .5)', 'rgba(203, 247, 237, .5)'],
         borderWidth: 2
      }]
   },
   options: {
      responsive: true,
      legend: {
         display: false,
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




$(document).ready(function(){
    // drawChart(generateChartData());
   var beach_data = [0, 0, 1500, 2200, 1900, 2300, 0, 1000, 1000, 1000];
   var choc_data = [2600, 3200, 1800, 2400, 3000, 0, 0, 0, 0, 0];
   var firecracker_data = [35000, 31000, 33000, 32000, 36000, 34000, 31000, 28000, 34000, 30000];
   var bike_data = [125000, 30000, 24500, 28500, 31000, 26000, 22000, 33000, 29000, 25000];
   var w2w_data = [6500, 3400, 4200, 3000, 3800, 0, 0, 0, 0, 0];
   var golf_data = [15000, 19000, 18000, 19000, 17500, 9500, 25500, 17000, 14000, 20000];
   var x = document.getElementById("fundraisers-select");
   // default to beach data
   if(x.value == 'beach') drawFundChart(beach_data);

   $("#fundraisers-select").change(function() {

      console.log(x.value);

      if (x.value == "choc"){
         drawFundChart(choc_data);
      }else if (x.value == "firecracker"){
         drawFundChart(firecracker_data);
      }else if (x.value == "bike"){
         drawFundChart(bike_data);
      }else if (x.value == "w2w"){
         drawFundChart(w2w_data);
      }else if (x.value == "golf"){
         drawFundChart(golf_data);
      }else if (x.value == "beach"){
         drawFundChart(beach_data);
      };

   });

});

function drawFundChart(data){
   var x = document.getElementById("fundraiser_id");

   var orgchart = new Chart(x, {
      type: 'bar',
      data: {
         labels: fund_year,
         datasets: [{
            label: 'Money Raised',
            data: data,
            backgroundColor: colors_10_fill,
            borderColor: colors_10_border,
            borderWidth: 2
         }]
      },
      options: {
         responsive: true,
         legend: {
            display: true,
            position: 'bottom'
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
}
