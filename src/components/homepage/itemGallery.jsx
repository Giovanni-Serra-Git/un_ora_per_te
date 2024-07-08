/* eslint-disable react/prop-types */
function ItemGallery({src,title}) {
    return (
        <div className="bg-pink-400 rounded-[22px] w-[90%] md:w-[45%] lg:w-[30%]">
        <div className="flex flex-col items-center justify-center h-[100%]">
            <img className="object-cover w-full" src={src} alt={"Centro Estetico - Un ' ora per te " + title} />
            <div className="flex flex grow items-center py-3 md:py-4 lg:py-4">
                <p className="title-gallery-homepage grow">{title}</p>
            </div>
        </div>
        </div>
    )
}

// function ItemGallery({src,title}) {
//     return (
//         <div className="bg-pink-300 flex flex-col w-[80%] rounded-[10%]  md:w-[45%] lg:w-[22%]">
//         <div className="bg-pink-300 flex flex-col rounded-[10%] md:w-[45%] lg:w-[22%]">
//             <img className="w-full flex-none md:w-full md:object-cover" src={src} alt={"Centro Estetico - Un ' ora per te " + title} />
//             <div className="flex flex-col flex-grow items-center justify-center">
//                 <p className="title-gallery-homepage pt-3 pb-3 lg:pt-1 lg:pb-1">{title}</p>
//             </div>
//         </div>
//         </div>
//     )
// }

export default ItemGallery
