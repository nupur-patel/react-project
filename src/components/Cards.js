import React, { useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import { getDocs } from 'firebase/firestore';
import { Audio } from 'react-loader-spinner';
import { moviesRef } from '../firebase/Firebase';
import { Link } from 'react-router-dom';

//             name: "Harry Potter",
//             year: '2001',
//             rating: 5,
//             img: "https://media.harrypotterfanzone.com/philosophers-stone-theatrical-poster.jpg"

const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false)
    useEffect(() => {
        async function getData() {
            setloading(true);
            const _data = await getDocs(moviesRef);
            _data.forEach((doc) => {
                setData((prv) => [...prv, { ...doc.data(), id: doc.id }])
            })
            console.log(_data);

        }
        getData();
        setloading(false)
    }, [])
    return (
        <div className='flex flex-wrap justify-between mt-2 p-3 '>
            {/* {loading ? <TailSpin /> :} */}
            {loading ? <div className='w-full flex justify-center items-center min-h-screen'><Audio height={40} color='white' /></div> :

                data.map((e, i) => {
                    return (
                        <Link to={`/detail/${e.id}`}>
                            <div key={i} className='card 
                                font-medium
                                shadow-lg 
                                p-2 hover:-translate-y-2 
                                cursor-pointer
                                transition-all
                                duration-500
                                mt-6'>
                                <img className='h-60 md:h-72' src={e.image} alt='blank' />
                                <h1>
                                    <span className='text-red-500'> Name </span>: {e.title}
                                </h1>
                                <h1 className='flex items-center'>
                                    <span className='text-red-500 mr-1'>Rating </span>:
                            <ReactStars
                                        size={20}
                                        half={true}
                                        value={e.rating / e.rated}
                                        edit={false}
                                        className='ml-1'
                                    />
                                </h1>
                                <h1>
                                    <span className='text-red-500'>Year </span>: {e.year}
                                </h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Cards
