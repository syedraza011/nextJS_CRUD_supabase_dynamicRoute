import React, { useState } from "react";
import moment from "moment";

const DateOption = ({ onChange }) => {
  const currentYear = moment().year();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate((prevSelectedDate) => {
      const newDate = prevSelectedDate
        ? moment(prevSelectedDate)
        : moment().startOf("day");
      newDate.set(name, parseInt(value));
      return newDate;
    });
    onChange && onChange(formatDate(selectedDate));
  };

  const yearOptions = Array.from({ length: 6 }, (_, i) => ({
    value: currentYear + i,
    label: `${currentYear + i}`,
  }));
  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: moment().month(i).format("MMMM"),
  }));
  const daysInMonth = selectedDate
    ? selectedDate.daysInMonth()
    : moment().daysInMonth();
  const dayOptions = Array.from({ length: daysInMonth }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const formatDate = (date) => {
    if (!date) return "";
    return date.format("YYYY-MM-DD");
  };

  return (
    <div>
      <select
        name="year"
        defaultValue={selectedDate ? selectedDate.year() : ""}
        onChange={handleDateChange}
      >
        <option value="" disabled>
          Year
        </option>
        {yearOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        name="month"
        defaultValue={selectedDate ? selectedDate.month() + 1 : ""}
        onChange={handleDateChange}
      >
        <option value="" disabled>
          Month
        </option>
        {monthOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        name="date"
        defaultValue={selectedDate ? selectedDate.date() : ""}
        onChange={handleDateChange}
      >
        <option value="" disabled>
          Day
        </option>
        {dayOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateOption;

// import React, { useState } from "react";
// import moment from "moment";

// const DateOption = (onChange) => {
//   const currentYear = moment().year();
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedDate((prevSelectedDate) => {
//       const newDate = prevSelectedDate
//         ? moment(prevSelectedDate)
//         : moment().startOf("day");
//       newDate.set(name, parseInt(value));
//       return newDate;
//     });
//   };

//   const yearOptions = Array.from({ length: 6 }, (_, i) => ({
//     value: currentYear + i,
//     label: `${currentYear + i}`,
//   }));
//   const monthOptions = Array.from({ length: 12 }, (_, i) => ({
//     value: i + 1,
//     label: moment().month(i).format("MMMM"),
//   }));
//   const daysInMonth = selectedDate
//     ? selectedDate.daysInMonth()
//     : moment().daysInMonth();
//   const dayOptions = Array.from({ length: daysInMonth }, (_, i) => ({
//     value: i + 1,
//     label: `${i + 1}`,
//   }));

//   const formatDate = (date) => {
//     if (!date) return "";
//     return date.format("YYYY-MM-DD");
//   };

//   return (
//     <div>
//       <select
//         name="year"
//         value={selectedDate ? selectedDate.year() : ""}
//         onChange={handleDateChange}
//         placeholder="Year"
//         isClearable
//       >
//         <option value="" disabled>
//           Year
//         </option>
//         {yearOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <select
//         name="month"
//         value={selectedDate ? selectedDate.month() + 1 : ""}
//         onChange={handleDateChange}
//         placeholder="Month"
//         isClearable
//       >
//         <option value="" disabled>
//           Month
//         </option>
//         {monthOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <select
//         name="date"
//         value={selectedDate ? selectedDate.date() : ""}
//         onChange={handleDateChange}
//         placeholder="Day"
//         isClearable
//       >
//         <option value="" disabled>
//           Day
//         </option>
//         {dayOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default DateOption;
