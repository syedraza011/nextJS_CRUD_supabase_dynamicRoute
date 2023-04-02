// import React, { useState } from "react";
// import Select from "react-select";
// import moment from "moment";

// const TimeOption = ({ onSelectTime }) => {
//   const [selectedTime, setSelectedTime] = useState(null);

//   const timeOptions = [
//     { value: "09:00:00", label: "9:00 AM" },
//     { value: "10:00:00", label: "10:00 AM" },
//     { value: "11:00:00", label: "11:00 AM" },
//     { value: "12:00:00", label: "12:00 PM" },
//     { value: "13:00:00", label: "1:00 PM" },
//     { value: "14:00:00", label: "2:00 PM" },
//     { value: "15:00:00", label: "3:00 PM" },
//     { value: "16:00:00", label: "4:00 PM" },
//     { value: "17:00:00", label: "5:00 PM" },
//     { value: "18:00:00", label: "6:00 PM" },
//   ];

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//     onSelectTime(moment(time.value, "HH:mm:ss").format("hh:mm:ss aa"));
//   };

//   return (
//     <div>
//       <Select
//         value={selectedTime}
//         onChange={handleTimeChange}
//         options={timeOptions}
//         formatOptionLabel={({ label }) =>
//           moment(label, "h:mm A").format("h:mm A")
//         }
//         placeholder="Select a time"
//         isClearable
//       />
//       {selectedTime && (
//         <p>
//           Selected time:{" "}
//           {moment(selectedTime.value, "HH:mm").format("hh:mm:ss A")}
//         </p>
//       )}
//     </div>
//   );
// };

// export default TimeOption;

import React, { useState } from "react";
import Select from "react-select";
import moment from "moment";

const TimeOption = ({ onSelectTime }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeOptions = [
    { value: "09:00:00", label: "9:00 am" },
    { value: "10:00:00", label: "10:00 am" },
    { value: "11:00:00", label: "11:00 am" },
    { value: "12:00:00", label: "12:00 pm" },
    { value: "13:00:00", label: "1:00 pm" },
    { value: "14:00:00", label: "2:00 pm" },
    { value: "15:00:00", label: "3:00 pm" },
    { value: "16:00:00", label: "4:00 pm" },
    { value: "17:00:00", label: "5:00 pm" },
    { value: "18:00:00", label: "6:00 pm" },
  ];
  const convertTimeToString = (time) => {
    if (time) {
      return moment(time, "HH:mm:ss").format("hh:mm:ss a");
    }
    return null;
  };

  const handleTimeChange = (time) => {
    // setSelectedTime(time);
    // onSelectTime(moment(time.value, "HH:mm:ss").format("hh:mm:ss"));
    setSelectedTime(time);
    const timeString = convertTimeToString(time?.value);
    onSelectTime(timeString);
  };

  return (
    <div>
      <Select
        value={selectedTime}
        onChange={handleTimeChange}
        options={timeOptions}
        formatOptionLabel={({ label }) => moment(label, "hh:mm a").format("hh:mm a")}
        placeholder="Select a time"
        isClearable
      />
 
    </div>
  );
};

export default TimeOption;
