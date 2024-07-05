/* eslint-disable react/prop-types */
import Sidenavbar from "../navbar/sidenavbar"

function ContainerNavbar({title}) {
    return (
        <div className="bg-pink-100">
            <div className="container">
                <Sidenavbar />
                {title ? <h1 className="text-center heading-playfair my-10 md:text-left md:my-5 md:leading-[55px] capitalize py-6">{title}</h1> : null}
        </div>
        </div>
    )
}

export default ContainerNavbar
