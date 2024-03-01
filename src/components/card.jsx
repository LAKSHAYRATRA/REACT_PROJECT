import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"

const card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.5}} className='bg-gray-900 flex-shrink-0 h-[40vh] w-[15vw] rounded-[15%] text-white relative overflow-hidden p-4'>
        <FaFileAlt/>
        <div>{data.desc}</div>
        <div className='absolute bottom-0 left-0'>
            <div className='flex justify-between w-[15vw] px-2'>
            <h4>{data.filesize}</h4>
            {data.close?<IoCloseCircle />:<FaInfoCircle />}
            </div>
            {
                data.tagdetails.isopen?(
                <div className={`${data.tagdetails.color==="green"?"bg-green-600":"bg-red-600"} text-center`}>
                <h3>{data.tagdetails.tag_title}</h3>
                </div>):null
            }
        </div>
    </motion.div>
  )
}

export default card
