﻿import styles from "./CityList.module.css"
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import React from "react";

export default function CityList({cities, isLoading}) {
    if (isLoading) return <Spinner/>

    console.log(cities)
    
    return (
        <ul className={styles.cityList}>
            {
                cities.map((city) => (
                    <CityItem city={city} key={city.id}/>
                ))
            }
        </ul>
    )
}