let monthNumber =  11  ;  // contains current month number
switch (monthNumber) {
    case 2:
       console.log("nr of days is 28 (or 29).");  break;
    case 4: case 6: case 9: case 11:
        console.log("nr of days is 30."); break;
    default:
        console.log("nr of days is 31.");   break;
}