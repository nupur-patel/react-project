import { React, useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/Firebase'
import { doc, getDoc } from 'firebase/firestore'
import { Bars } from 'react-loader-spinner'
import Reviews from './Reviews'

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        title: "",
        year: "",
        img: "",
        description: "",
        rating: 0,
        rated: 0,
    })
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function getData() {
            setLoading(true)
            const _doc = doc(db, "movies", id)
            const _data = await getDoc(_doc)
            setData(_data.data());
        }
        getData();
        setLoading(false);
    }, [])
    return (
        <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start justify-center w-full'>
            {loading ? <div className='h-96 flex w-full justify-center items-center'><Bars height={25} color='white' /></div> :
                <>
                    <img className='h-96 md:sticky top-24' src={data.image} alt="" />
                    <div className='md:ml-4 ml-0 md:w-1/2 w-full'>
                        <h1 className='text-2xl font-bold text-gray-300'>{data.title} <span className='text-xl'>({data.year})</span></h1>
                        <ReactStars
                            size={20}
                            half={true}
                            value={data.rating / data.rated}
                            edit={false}
                            className='ml-1'
                        />
                        <p className='mt-2'>{data.description}</p>
                        <Reviews id={id} prevRating={data.rating} userRated={data.rated} />
                    </div>
                </>
            }
        </div>
    )
}

export default Detail
