/* eslint-disable react/prop-types */
function ItemGallery({src,title}) {
    return (
        <div className="bg-pink-300 flex flex-col rounded-[10%] w-[72] md:w-[45%] lg:w-[22%]">
            <img className="flex-none md:w-full md:object-cover" src={src} alt={"Centro Estetico - Un ' ora per te " + title} />
            <div className="flex flex-col flex-grow items-center justify-center">
                <p className="title-gallery-homepage pt-3 pb-3 lg:pt-1 lg:pb-1">{title}</p>
            </div>
        </div>
    )
}

export default ItemGallery
