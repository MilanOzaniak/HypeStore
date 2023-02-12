import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'

const NaSi = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogle = () => {
        setIsOpen(!isOpen)
    }



  return (
    <>
    <Sidebar isOpen={isOpen} toogle={toogle}/>
    <Navbar toogle={toogle}/>
    </>
  );
};

export default NaSi;