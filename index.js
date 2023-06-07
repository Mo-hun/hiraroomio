const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://hira.roomio.co.kr/svc/room/detail_calendar.php?id=8063&room_id=19566&y=2023&m=07')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
