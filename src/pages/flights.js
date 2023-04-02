import react from "react";
import Link from "next/link";
import supabase from "./supabase";
import Sort from "./sortFlights";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Flights = () => {
  const router = useRouter();

  const handleEdit = (id) => {
    router.push(`/flights/${id}`);
  };

  // console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [flights, setflights] = useState(null);

  // const handleDelete = (id) => {
  //   setflights((prevFlights) => {
  //     return prevFlights.filter((flight) => flight.id !== id);
  //   });
  // };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("flight").delete().eq("id", id);
      if (error) {
        throw error;
      }
      setflights((prevFlights) => {
        return prevFlights.filter((flight) => flight.id !== id);
      });
    } catch (error) {
      console.log("Error deleting flight: ", error);
    }
  };

  useEffect(() => {
    const fetchFlights = async () => {
      const { data, error } = await supabase.from("flight").select();
      if (error) {
        setFetchError("Could not fetch flights data");
        setflights(null);
        console.log("Error: ", error);
      }
      if (data) {
        // console.log(data);
        setflights(data);
        setFetchError(null);
      }
    };
    fetchFlights();
  }, []);

  return (
    <div className={robStyles.flightsBox}>
      <p className={robStyles.textBox}>
        Welcome to Starbound Flights, the premier space tourism company for
        those seeking a truly out-of-this-world experience. Our mission is to
        make space travel accessible and safe for everyone, so that you can
        experience the thrill of exploring the cosmos for yourself.
      </p>
      <div>
        <Sort />
      </div>
      <div>
        <Link className={styles.btnStyle} href="/AddFlight">
          Add New Flight
        </Link>

        {fetchError && <p>{fetchError}</p>}
        {flights && (
          <div className="flights">
            {flights.map((flight) => (
              <div key={flight.id}>
                <h2>
                  {flight.depart} to {flight.destination}
                </h2>
                <p>Depart Origon: {flight.depart}</p>
                <p>depart Time:{flight.departime}</p>
                <p>depart Date: {flight.depardate}</p>
                <p>Return Time:{flight.returntime}</p>
                <p> Return Date: {flight.returndate}</p>
                <p>Dragon Price: ${flight.price}</p>
                <button onClick={() => handleEdit(flight.id)}>Edit</button>
                <button onClick={() => handleDelete(flight.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="main"></div>
    </div>
  );
};

export default Flights;
