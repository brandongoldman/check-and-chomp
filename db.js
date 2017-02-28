//instantiate the database
var db = new PouchDB('http://localhost:5984/sample');
db.info().then(function (info) {
  //console.log("We have a database: " + JSON.stringify(info));
});

//load the database

// db.bulkDocs([
//   {
//      _id: 'Beaty POD',
//      Monday: '9:00 AM &#45; 3:00 AM',
//      Tuesday: '9:00 AM &#45; 3:00 AM',
//      Wednesday: '9:00 AM &#45; 3:00 AM',
//     Thursday: '9:00 AM &#45; 3:00 AM',
//      Friday: '9:00 AM &#45; 3:00 AM',
//      Saturday: '10:00 AM &#45; 3:00 AM',
//      Sunday: '10:00 AM &#45; 3:00 AM'
//   },
//   {
//      _id: 'Broward Dining Center Chick-Fil-A',
//      Monday: '10:00 AM &#45; 8:00 PM',
//      Tuesday: '10:00 AM &#45; 8:00 PM',
//      Wednesday: '10:00 AM &#45; 8:00 PM',
//      Thursday: '10:00 AM &#45; 8:00 PM',
//      Friday: '10:00 AM &#45; 6:00 PM',
//      Saturday: '10:00 AM &#45; 6:00 PM',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Chomp It @ Racquet Club Dining Center',
//      Monday: '10:30 AM &#45; 6:30 PM',
//      Tuesday: '10:30 AM &#45; 6:30 PM',
//      Wednesday: '10:30 AM &#45; 6:30 PM',
//      Thursday: '10:30 AM &#45; 6:30 PM',
//      Friday: '10:30 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Engineering Bldg Java City',
//      Monday: '8:00 AM &#45; 3:00 PM',
//      Tuesday: '8:00 AM &#45; 3:00 PM',
//      Wednesday: '8:00 AM &#45; 3:00 PM',
//      Thursday: '8:00 AM &#45; 3:00 PM',
//      Friday: '8:00 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Fresh Food Company',
//      Monday: '7:00 AM &#45; 11:00 PM',
//      Tuesday: '7:00 AM &#45; 11:00 PM',
//      Wednesday: '7:00 AM &#45; 11:00 PM',
//      Thursday: '7:00 AM &#45; 11:00 PM',
//      Friday: '7:00 AM &#45; 10:00 PM',
//      Saturday: '8:30 AM &#45; 10:00 PM',
//      Sunday: '8:30 AM &#45; 10:00 PM'
//   },
//   {
//      _id: 'Gator Corner Dining Center',
//      Monday: '7:00 AM &#45; 11:00 PM',
//      Tuesday: '7:00 AM &#45; 11:00 PM',
//      Wednesday: '7:00 AM &#45; 11:00 PM',
//      Thursday: '7:00 AM &#45; 11:00 PM',
//      Friday: '7:00 AM &#45; 10:00 PM',
//      Saturday: '8:30 AM &#45; 10:00 PM',
//      Sunday: '8:30 AM &#45; 10:00 PM'
//    },
//    {
//      _id: 'Graham POD / Chomp It',
//      Monday: '9:00 AM &#45; 3:00 AM',
//      Tuesday: '9:00 AM &#45; 3:00 AM',
//      Wednesday: '9:00 AM &#45; 3:00 AM',
//      Thursday: '9:00 AM &#45; 3:00 AM',
//      Friday: '9:00 AM &#45; 3:00 AM',
//      Saturday: '10:00 AM &#45; 3:00 AM',
//      Sunday: '10:00 AM &#45; 3:00 AM'
//    },
//    {
//      _id: 'Harn Camellia Court Café',
//      Monday: 'CLOSED',
//      Tuesday: '11:00 AM &#45; 2:00 PM',
//      Wednesday: '11:00 AM &#45; 2:00 PM',
//      Thursday: '11:00 AM &#45; 2:00 PM',
//      Friday: '11:00 AM &#45; 2:00 PM',
//      Saturday: '11:00 AM &#45; 2:00 PM',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Heavener Hall Rising Roll',
//      Monday: '8:00 AM &#45; 3:00 PM',
//      Tuesday: '8:00 AM &#45; 3:00 PM',
//      Wednesday: '8:00 AM &#45; 3:00 PM',
//      Thursday: '8:00 AM &#45; 3:00 PM',
//      Friday: '8:00 AM &#45; 2:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Hough Hall Chomp & Go',
//      Monday: '8:00 AM &#45; 3:00 PM',
//      Tuesday: '8:00 AM &#45; 3:00 PM',
//      Wednesday: '8:00 AM &#45; 3:00 PM',
//      Thursday: '8:00 AM &#45; 3:00 PM',
//      Friday: '8:00 AM &#45; 1:00 PM',
//      Saturday: '7:00 AM &#45; 4:00 PM',
//      Sunday: '7:00 AM &#45; 4:00 PM'
//   },
//   {
//      _id: 'Hub Chick-fil-A',
//      Monday: '9:00 AM &#45; 7:00 PM',
//      Tuesday: '9:00 AM &#45; 7:00 PM',
//      Wednesday: '9:00 AM &#45; 7:00 PM',
//      Thursday: '9:00 AM &#45; 7:00 PM',
//      Friday: '9:00 AM &#45; 6:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Hub Einstein Bros. Bagels',
//      Monday: '7:00 AM &#45; 4:00 PM',
//      Tuesday: '7:00 AM &#45; 4:00 PM',
//      Wednesday: '7:00 AM &#45; 4:00 PM',
//      Thursday: '7:00 AM &#45; 4:00 PM',
//      Friday: '7:00 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Hub POD',
//      Monday: '8:00 AM &#45; 7:00 PM',
//      Tuesday: '8:00 AM &#45; 7:00 PM',
//      Wednesday: '8:00 AM &#45; 7:00 PM',
//      Thursday: '8:00 AM &#45; 7:00 PM',
//      Friday: '8:00 AM &#45; 6:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Hub Starbucks',
//      Monday: '7:30 AM &#45; 6:00 PM',
//      Tuesday: '7:30 AM &#45; 6:00 PM',
//      Wednesday: '7:30 AM &#45; 6:00 PM',
//      Thursday: '7:30 AM &#45; 6:00 PM',
//      Friday: '7:30 AM &#45; 4:30 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Law School Café',
//      Monday: '7:30 AM &#45; 3:30 PM',
//      Tuesday: '7:30 AM &#45; 3:30 PM',
//      Wednesday: '7:30 AM &#45; 3:30 PM',
//      Thursday: '7:30 AM &#45; 3:30 PM',
//      Friday: '7:30 AM &#45; 12:30 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Library West Starbucks',
//      Monday: '24 HOURS',
//      Tuesday: '24 HOURS',
//      Wednesday: '24 HOURS',
//      Thursday: '24 HOURS',
//      Friday: '24 HOURS',
//      Saturday: '24 HOURS',
//      Sunday: '24 HOURS'
//   },
//   {
//      _id: 'Little Hall Express',
//      Monday: '7:00 AM &#45; 5:00 PM',
//      Tuesday: '7:00 AM &#45; 5:00 PM',
//      Wednesday: '7:00 AM &#45; 5:00 PM',
//      Thursday: '7:00 AM &#45; 5:00 PM',
//      Friday: '7:00 AM &#45; 4:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Marston Science Library Starbucks',
//      Monday: '8:00 AM &#45; 1:00 AM',
//      Tuesday: '8:00 AM &#45; 1:00 AM',
//      Wednesday: '8:00 AM &#45; 1:00 AM',
//      Thursday: '8:00 AM &#45; 1:00 AM',
//      Friday: '8:00 AM &#45; 10:00 PM',
//      Saturday: '10:00 AM &#45; 6:00 PM',
//      Sunday: '10:00 AM &#45; 1:00 AM'
//   },
//   {
//      _id: 'Moe&#44;s Southwest Grill',
//      Monday: '10:30 AM &#45; 8:30 PM',
//      Tuesday: '10:30 AM &#45; 8:30 PM',
//      Wednesday: '10:30 AM &#45; 8:30 PM',
//      Thursday: '10:30 AM &#45; 8:30 PM',
//      Friday: '10:30 AM &#45; 8:00 PM',
//      Saturday: '4:30 PM &#45; 8:00 PM',
//      Sunday: '4:30 PM &#45; 8:00 PM'
//    },
//    {
//      _id: 'Orthopaedic Bldg Café',
//      Monday: '8:00 AM &#45; 2:30 PM',
//      Tuesday: '8:00 AM &#45; 2:30 PM',
//      Wednesday: '8:00 AM &#45; 2:30 PM',
//      Thursday: '8:00 AM &#45; 2:30 PM',
//      Friday: '8:00 AM &#45; 2:30 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//   },
//   {
//      _id: 'Pugh Hall Chomp & Go',
//      Monday: '8:00 AM &#45; 2:00 PM',
//      Tuesday: '8:00 AM &#45; 2:00 PM',
//      Wednesday: '8:00 AM &#45; 2:00 PM',
//      Thursday: '8:00 AM &#45; 2:00 PM',
//      Friday: '8:00 AM &#45; 2:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Rawlings POD / Subway',
//      Monday: '7:00 AM &#45; 1:00 AM',
//      Tuesday: '7:00 AM &#45; 1:00 AM',
//      Wednesday: '7:00 AM &#45; 1:00 AM',
//      Thursday: '7:00 AM &#45; 1:00 AM',
//      Friday: '7:00 AM &#45; 1:00 AM',
//      Saturday: '10:00 AM &#45; 1:00 AM',
//      Sunday: '10:00 AM &#45; 1:00 AM'
//   },
//   {
//      _id: 'Sun Terrace Chick-fil-A',
//      Monday: '10:30 AM &#45; 3:00 PM',
//      Tuesday: '10:30 AM &#45; 3:00 PM',
//      Wednesday: '10:30 AM &#45; 3:00 PM',
//      Thursday: '10:30 AM &#45; 3:00 PM',
//      Friday: '10:30 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Sun Terrace Einstein Bros. Bagels',
//      Monday: '7:00 AM &#45; 2:00 PM',
//      Tuesday: '7:00 AM &#45; 2:00 PM',
//      Wednesday: '7:00 AM &#45; 2:00 PM',
//      Thursday: '7:00 AM &#45; 2:00 PM',
//      Friday: '7:00 AM &#45; 2:00 PM',
//      Saturday: 'CLOSED',
//      'SunPanda': 'CLOSED'
//    },
//    {
//      _id: 'Sun Terrace Panda Express',
//      Monday: '10:30 AM &#45; 3:00 PM',
//      Tuesday: '10:30 AM &#45; 3:00 PM',
//      Wednesday: '10:30 AM &#45; 3:00 PM',
//      Thursday: '10:30 AM &#45; 3:00 PM',
//      Friday: '10:30 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Sun Terrace Salad Creations',
//      Monday: '11:00 AM &#45; 2:30 PM',
//      Tuesday: '11:00 AM &#45; 2:30 PM',
//      Wednesday: '11:00 AM &#45; 2:30 PM',
//      Thursday: '11:00 AM &#45; 2:30 PM',
//      Friday: '11:00 AM &#45; 2:30 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Sun Terrace Starbucks',
//      Monday: '6:30 AM &#45; 5:00 PM',
//      Tuesday: '6:30 AM &#45; 5:00 PM',
//      Wednesday: '6:30 AM &#45; 5:00 PM',
//      Thursday: '6:30 AM &#45; 5:00 PM',
//      Friday: '6:30 AM &#45; 4:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'SWRC Freshens',
//      Monday: 'NOON &#45; 10:30 PM',
//      Tuesday: 'NOON &#45; 10:30 PM',
//      Wednesday: 'NOON &#45; 10:30 PM',
//      Thursday: 'NOON &#45; 10:30 PM',
//      Friday: 'NOON &#45; 10:30 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Turlington Jamba Juice',
//      Monday: '9:00 AM &#45; 5:00 PM',
//      Tuesday: '9:00 AM &#45; 5:00 PM',
//      Wednesday: '9:00 AM &#45; 5:00 PM',
//      Thursday: '9:00 AM &#45; 5:00 PM',
//      Friday: '9:00 AM &#45; 4:00 PM',
//      Saturday: 'CLOSED',
//      'Sun': 'CLOSED'
//    },
//   {
//      _id: 'Turlington Subway',
//      Monday: '9:00 AM &#45; 5:00 PM',
//      Tuesday: '9:00 AM &#45; 5:00 PM',
//      Wednesday: '9:00 AM &#45; 5:00 PM',
//      Thursday: '9:00 AM &#45; 5:00 PM',
//      Friday: '9:00 AM &#45; 5:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Vet Med Einstein Bros. Bagels',
//      Monday: '7:15 AM &#45; 3:30 PM',
//      Tuesday: '7:15 AM &#45; 3:30 PM',
//      Wednesday: '7:15 AM &#45; 3:30 PM',
//      Thursday: '7:15 AM &#45; 3:30 PM',
//      Friday: '7:15 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Arredondo Café',
//      Monday: '11:00 AM &#45; 1:30 PM',
//      Tuesday: '11:00 AM &#45; 1:30 PM',
//      Wednesday: '11:00 AM &#45; 1:30 PM',
//      Thursday: '11:00 AM &#45; 1:30 PM',
//      Friday: '11:00 AM &#45; 1:30 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Croutons',
//      Monday: '10:30 AM &#45; 6:00 PM',
//      Tuesday: '10:30 AM &#45; 6:00 PM',
//      Wednesday: '10:30 AM &#45; 6:00 PM',
//      Thursday: '10:30 AM &#45; 6:00 PM',
//      Friday: '10:30 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Freshens / POD',
//      Monday: '9:00 AM &#45; 10:30 PM',
//      Tuesday: '9:00 AM &#45; 10:30 PM',
//      Wednesday: '9:00 AM &#45; 10:30 PM',
//      Thursday: '9:00 AM &#45; 10:30 PM',
//      Friday: '9:00 AM &#45; 10:30 PM',
//      Saturday: '11:00 AM &#45; 8:00 PM',
//      Sunday: 'NOON &#45; 8:00 PM'
//    },
//    {
//      _id: 'Panda Express',
//      Monday: '10:30 AM &#45; 8:00 PM',
//      Tuesday: '10:30 AM &#45; 8:00 PM',
//      Wednesday: '10:30 AM &#45; 8:00 PM',
//      Thursday: '10:30 AM &#45; 8:00 PM',
//      Friday: '10:30 AM &#45; 6:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Papa John&#44;s',
//      Monday: '11:00 AM &#45; 3:00 PM',
//      Tuesday: '11:00 AM &#45; 3:00 PM',
//      Wednesday: '11:00 AM &#45; 3:00 PM',
//      Thursday: '11:00 AM &#45; 3:00 PM',
//      Friday: '11:00 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Pollo Tropical',
//      Monday: '10:30 AM &#45; 5:30 PM',
//      Tuesday: '10:30 AM &#45; 5:30 PM',
//      Wednesday: '10:30 AM &#45; 5:30 PM',
//      Thursday: '10:30 AM &#45; 5:30 PM',
//      Friday: '10:30 AM &#45; 3:00 PM',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    },
//    {
//      _id: 'Starbucks @ Reitz Union',
//      Monday: '7:00 AM &#45; 7:00 PM',
//      Tuesday: '7:00 AM &#45; 7:00 PM',
//      Wednesday: '7:00 AM &#45; 7:00 PM',
//      Thursday: '7:00 AM &#45; 7:00 PM',
//      Friday: '7:00 AM &#45; 5:00 PM',
//      Saturday: '10:00 AM &#45; 6:00 PM',
//      Sunday: '10:00 AM &#45; 6:00 PM'
//    },
//    {
//      _id: 'Subway',
//      Monday: '8:00 AM &#45; 10:30 PM',
//      Tuesday: '8:00 AM &#45; 10:30 PM',
//      Wednesday: '8:00 AM &#45; 10:30 PM',
//      Thursday: '8:00 AM &#45; 10:30 PM',
//      Friday: '8:00 AM &#45; 10:30 PM',
//      Saturday: '8:00 AM &#45; 10:30 PM',
//      Sunday: '8:00 AM &#45; 10:30 PM'
//    },
//    {
//      _id: 'Wendy&#44;s',
//      Monday: '10:30 AM &#45; 8:00 PM',
//      Tuesday: '10:30 AM &#45; 8:00 PM',
//      Wednesday: '10:30 AM &#45; 8:00 PM',
//      Thursday: '10:30 AM &#45; 8:00 PM',
//      Friday: '10:30 AM &#45; 8:00 PM',
//      Saturday: '11:00 AM &#45; 8:00 PM',
//      Sunday: '11:00 AM &#45; 8:00 PM'
//    },
//    {
//      _id: 'Wing Zone @ Orange & Brew',
//      Monday: '11:00 AM &#45; 10:00 PM',
//      Tuesday: '11:00 AM &#45; 10:00 PM',
//      Wednesday: '11:00 AM &#45; 10:00 PM',
//      Thursday: '11:00 AM &#45; 10:00 PM',
//      Friday: '11:00 AM &#45; MIDNIGHT',
//      Saturday: 'CLOSED',
//      Sunday: 'CLOSED'
//    }
// ]).then(function (result) {
//   document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(result);
// }).catch(function (err) {
//   console.log(err);
// });

// db.get('Croutons').then(function (doc) {
//   console.log('We have a database: ' + JSON.stringify(doc));
// });

// function toggleWeeklyHours(_self, data) {
//   $('#weeklyData').html(data);
//   $(_self).closest('tr').next('.expandedInformation').toggle();
// }
//
// $('.tableRows').click(function(){
//   $.getJSON("regularHours.json", function(data) {
//     console.log(data);
    // data is a JavaScript object now. Handle it as such
    // var stuff = JSON.stringify(doc, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], '\n')
    //   .replace(/['"{}]+/g, '').replace(/[,]+/g, '<br>');
    //   console.log(stuff);
      //toggleWeeklyHours(_self, stuff);
//     });
// });