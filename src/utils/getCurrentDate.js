export default function getCurrentDate(){
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    
      const day = days[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      
    return (
        <h1>hello this is date</h1>
    )
}