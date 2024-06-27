/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

function Button({title,url}) {
    return (
        <div className="bg-pink-300 text-white capitalize rounded-full min-w-[180px] fit-content mx-auto py-2.5 px-3 my-8 cursor-pointer hover:bg-pink-400 transition duration-200 linear text-center">
            <NavLink to={url}>{title}</NavLink>
        </div>
    )
}

export default Button
