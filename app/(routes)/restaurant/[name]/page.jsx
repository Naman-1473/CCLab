"use client";
import GlobalApi from '@/app/_utils/GlobalApi'
import {usePathname} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import Intro from '../_components/Intro';

function RestaurantDetails() {
    const params=usePathname();
    const [restaurant,setRestaurant]=useState([]);
    useEffect(()=>{
        GetRestaurantDetail(params.split("/")[2])
    },[])
    const GetRestaurantDetail=(restroSlug)=>{
        GlobalApi.GetBuisnessDetail(restroSlug).then(resp=>{
            setRestaurant(resp?.restaurant);
        })
    }
  return (
    <div>
      <Intro restaurant={restaurant}/>
    </div>
  )
}

export default RestaurantDetails
