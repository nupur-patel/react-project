import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { Appstate } from '../App'

const Header = () => {
    const useAppstate = useContext(Appstate)
    return (
        <div className='sticky z-10 header top-0 text-3xl flex justify-between items-center font-bold p-3 border-b-2 border-gray-400'>
            <Link to='/'>
                <span><span className='text-red-500 '>Filmy</span>Verse</span>
            </Link>
            {useAppstate.login ?
                <Link to='/addmovie'>
                    <h1 className='text-lg cursor-pointer flex items-center'>
                        <Button>
                            <AddIcon className='mr-3' color='secondary' />
                            <span className='text-white '>Add New</span>
                        </Button>
                    </h1>
                </Link>
                :
                <Link to='/login'>
                    <h1 className='bg-green-500 text-lg cursor-pointer flex items-center'>
                        <Button>
                            <span className='text-white font-medium text-capitalize '>Login</span>
                        </Button>
                    </h1>
                </Link>
            }

        </div>
    )
}

export default Header
