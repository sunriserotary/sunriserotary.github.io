var years = [2013, 2014, 2015, 2016, 2017];

var year_total = [23104, 26194, 24265, 30147, 124840];

var orgs = ['2017 Scholarships', 'Camp Harmon', 'CASA', 'Charities & Grants', "LEO's Haven", 'MB Sanctuary Exploration Center', 'Ride-a-wave', 'Santa Cruz Bike Team', 'Santa Cruz Pump Track', 'Second Harvest Food for Children', 'Share Adventures', 'ShelterBox'];

var orgs_total = [5700, 900, 10500, 25799, 115000, 2500, 2000, 9000, 50000, 8000, 2000, 5500];


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
         dispaly: false,
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


var org_id = document.getElementById("money-donated-breakdown");

var orgchart = new Chart(org_id, {
   type: 'pie',
   data: {
      labels: orgs,
      datasets: [{
         label: 'Money Raised',
         data: orgs_total,
         backgroundColor: ['#FAE8CD', '#EDAE49', '#F5D29B', '#D1495B', '#E59BA5', '#00798C', '#73B5C0', '#30638E', '#8EA9C1', '#003D5B', '#7395A5', '#B9CAD2'],
      }]
   },
   options: {
      responsive: true,
      legend: {
         dispaly: false,
         position: 'right'
      }
   }
});
