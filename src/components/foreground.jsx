import React, { useRef } from 'react'
import Card from './card'
const card_data=
[{
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    filesize:"2.5mb",
    close: true,
    tagdetails:{
        isopen:true,
        tag_title:"DOWNLOAD NOW",
        color:"green"
    },
},
{
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    filesize:"0.5mb",
    close: true,
    tagdetails:{
        isopen:true,
        tag_title:"DOWNLOAD NOW",
        color:"green"
    },
},
{
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    filesize:"0.8mb",
    close: true,
    tagdetails:{
        isopen:false,
        tag_title:"DOWNLOAD NOW",
        color:"green"
    },
},
{
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    filesize:"0.9mb",
    close: true,
    tagdetails:{
        isopen:true,
        tag_title:"UNINSTALL",
        color:"red"
    },
},
]

const foreground = () => {
    const ref=useRef(null);
  return (
      <div ref={ref} className='h-[100vh] w-full z-[3] relative flex flex-wrap gap-10 overflow-hidden'>
        {
            card_data.map((item,index)=>(
                <Card data={item} reference={ref}/>
            ))
        }
      </div>
  )
}

export default foreground
