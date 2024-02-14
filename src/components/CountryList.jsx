import styles from "./CountryList.module.css"
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CityItem from "./CityItem.jsx";
import React from "react";
import CountryItem from "./CountryItem.jsx";

export default function CountryList({cities, isLoading}){
    if (isLoading) return <Spinner/>

    if (!cities.length) return <Message message="Find your first city on the map!"/>

    return (
        <ul className={styles.countryList}>
            {
                cities.map((city) => (
                    <CountryItem country={city} key={city.id}/>
                ))
            }
        </ul>
    )
}