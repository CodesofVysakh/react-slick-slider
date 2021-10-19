import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import Head from '../includes/Head';

export default function Users() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };
    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(function (response) {
                console.log(response.data.data);
                setPerson(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);

    let renderItems = () => {
        return person.map((user) => (
            <div className="container">
                <img src={user.avatar} alt="User" />
                <h6>{user.first_name} {user.last_name} </h6>
                <p>{user.email}</p>
            </div>
        ))
    }
    return (
        <>
            <Head />
            <section id="slider-container" >
                <Slider {...settings}>
                    {renderItems()}
                </Slider>
            </section>
        </>
    )
}
