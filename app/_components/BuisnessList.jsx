"use client";
import {useSearchParams} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import GlobalApi from '../_utils/GlobalApi';
import BuisnessItem from './BuisnessItem';
import BuisnessSkeletal from './BuisnessSkeletal';

function BuisnessList() {
    const params=useSearchParams();
    const [category,setCategory]=useState('All');
    const [buisnessList,setBuisnessList]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        params&&setCategory(params.get('category'));
        params&&getBuisnessList(params.get('category'));
    },[params])
    const getBuisnessList=(category1)=>{
      setLoading(true);
      GlobalApi.GetBuisness(category1).then(resp=>{
        // console.log(resp);
        setBuisnessList(resp?.restaurants);
        setLoading(false);
      })
    }


  return (
    <div className='mt-5'>
      <h2 className='font-bold text-2xl'>Popular {category} restaurants</h2>
      <h2 className='font-bold text-primary'>{buisnessList?.length} Results</h2>
  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3'>
        {/* {console.log(buisnessList[0].banner.url)} */}
        {!loading?buisnessList.map((restaurants,index)=>(
          <div>
            <BuisnessItem key={index}
            buisness={restaurants}/>
          </div>
        )):
        [1,2,3,4,5,6,7,8].map((item,index)=>(
          <BuisnessSkeletal/>
        ))
        }
      </div>
    </div>
  )
}

export default BuisnessList
