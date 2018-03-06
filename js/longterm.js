var orgs = ['2017 Scholarships', 'Camp Harmon', 'CASA', 'Charities & Grants', "LEO's Haven", 'MB Sanctuary Exploration Center', 'Ride-a-wave', 'Santa Cruz Bike Team', 'Santa Cruz Pump Track', 'Second Harvest Food for Children', 'Share Adventures', 'ShelterBox'];

var orgs_total = [5700, 900, 10500, 25799, 115000, 2500, 2000, 9000, 50000, 8000, 2000, 5500];

var org_id = document.getElementById('org-pie-chart');

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
         position: 'right',
      }
   }
});
