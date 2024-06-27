/* eslint-disable react/prop-types */
function ItemGallery({src,title}) {
    return (
        <div className="rounder-lg bg-pink-300 rounded-[10%]">
            <img src={src} alt={"Centro Estetico - Un ' ora per te " + title} />
            <p className="title-gallery-homepage pt-3 pb-3">{title}</p>
        </div>
    )
}

export default ItemGallery
