import { StaticImageData } from "next/image";
import photo3 from './photos/p3.jpg'
import photo4 from './photos/p4.jpg'

export type ImageType = {
    id:string,
    name:string,
    src:StaticImageData,
    photographer:string,
    location:string
}

const ImageLists: ImageType[] = [
    {
        id:"1",
        name:"Eiffel Tower",
        src:photo3,
        photographer:"Photo By Temam Hashim",
        location:"Ethiopia"
    },
     {
        id:"2",
        name:"Sara Jemal",
        src:photo4,
        photographer:"Photo By Sara Jemal",
        location:"Singapore"
    }
]


export default ImageLists;