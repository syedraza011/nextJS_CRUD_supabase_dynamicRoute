import { useState } from "react";
import supabase from "./supabase";
import Link from "next/link";
import TimeOption from "./TimeOption";
import DateOption from "./DateOption";

import "react-datepicker/dist/react-datepicker.css";

function AddFlight() {
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [departime, setDepartime] = useState("");
  const [depardate, setDepardate] = useState("");
  const [returntime, setReturntime] = useState("");
  const [returndate, setReturndate] = useState("");
  const [price, setPrice] = useState("");

  const handleDepardateChange = (date) => {
    console.log("afterhandle", date);
    setDepardate(date);
  };

  const handleDeparSelectTime = (time) => {
    console.log();
    setDepartime(time);
  };

  const handleReturnSelectTime = (time) => {
    setReturntime(time);
  };
  const handleReturnDateChange = (date) => {
    setReturndate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit ander");

    console.log("depart:", depart);
    console.log("destination:", destination);
    console.log("departime:", departime);
    console.log("depardate:", depardate);
    console.log("returntime:", returntime);
    console.log("returndate:", returndate);
    console.log("price:", price);

    const { data, error } = await supabase.from("flight").insert([
      {
        depart,
        destination,
        departime,
        depardate,
        returntime,
        returndate,
        price,
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      console.log("Flight added successfully:", data);
      // reset form fields
      setDepart("");
      setDestination("");
      setDepartime("");
      setDepardate("");
      setReturntime("");
      setReturndate("");
      setPrice("");
    }
  };

  return (
 
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
         <Link href="/flights">
    <button >Back to Flight page</button>
  </Link>
      <div className="grid grid-cols-1 gap-6">
        <label htmlFor="depart" className="block">
          Departure origon:
        </label>
        <input
          type="text"
          id="depart"
          name="depart"
          value={depart}
          onChange={(e) => setDepart(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
        />

        <label htmlFor="destination" className="block">
          Destination
        </label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="departime"
        >
          Departure Time
        </label>
        <TimeOption onSelectTime={handleDeparSelectTime} />

        <label htmlFor="depardate" className="block">
          Departure Date
        </label>
        <DateOption onChange={handleDepardateChange} />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="departime"
        >
          Return Time
        </label>
        <TimeOption onSelectTime={handleReturnSelectTime} />

        <label htmlFor="depardate" className="block">
          return Date
        </label>

        <DateOption onChange={handleReturnDateChange} />

        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <div>
     
        <button type="submit">Add new Flight</button>
        </div>
      </div>
    </form>
  );
}

export default AddFlight;

// import { useState } from "react";
// import supabase from "./supabase";

// import { format } from "date-fns";

// import TimeOption from "./TimeOption";
// import DateOption from "./DateOption";

// import "react-datepicker/dist/react-datepicker.css";

// function AddFlight() {
//   const [depart, setDepart] = useState("");
//   const [destination, setDestination] = useState("");
//   const [departime, setDepartime] = useState("");
//   const [depardate, setDepardate] = useState("");
//   const [returntime, setReturntime] = useState("");
//   const [returndate, setReturndate] = useState("");
//   const [price, setPrice] = useState("");

//   const handleDepardateChange = (deparDate) => {
//     setDepardate(deparDate);
//     console.log("afterhandle", deparDate);
//   };

//   const handleDeparSelectTime = (time) => {
//     setDepartime(time);
//   };

//   const handleReturnSelectTime = (time) => {
//     setDepartime(time);
//   };
//   const handleReturnDateChange = (date) => {
//     setReturndate(date);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { data, error } = await supabase.from("flight").insert([
//       {
//         depart,
//         destination,
//         departime,
//         depardate,
//         returntime,
//         returndate,
//         price,
//       },
//     ]);

//     if (error) {
//       console.error(error);
//     } else {
//       console.log("Flight added successfully:", data);
//       // reset form fields
//       setDepart("");
//       setDestination("");
//       setDepartime("");
//       setDepardate("");
//       setReturntime("");
//       setReturndate("");
//       setPrice("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//       <div className="grid grid-cols-1 gap-6">
//         <label htmlFor="depart" className="block">
//           Departure origon:
//         </label>
//         <input
//           type="text"
//           id="depart"
//           name="depart"
//           value={depart}
//           onChange={(e) => setDepart(e.target.value)}
//           className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
//         />

//         <label htmlFor="destination" className="block">
//           Destination
//         </label>
//         <input
//           type="text"
//           id="destination"
//           name="destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
//         />

//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="departime"
//         >
//           Departure Time
//         </label>

//         <TimeOption onSelectTime={handleDeparSelectTime} />

//         <label htmlFor="depardate" className="block">
//           Departure Date
//         </label>
//         <DateOption selected={depardate} onChange={handleReturnDateChange} />

//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="departime"
//         >
//           Return Time
//         </label>
//         <TimeOption onSelectTime={handleReturnSelectTime} />

//         <label htmlFor="depardate" className="block">
//           return Date
//         </label>

//         <DateOption />

//         <label>
//           Price:
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </label>
//         <button type="submit">Add Flight</button>
//       </div>
//     </form>
//   );
// }

// export default AddFlight;
