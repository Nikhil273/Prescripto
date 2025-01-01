import { specialityData } from "../assets/assets"
import { Link } from "react-router-dom"
const SpecialityMenu = () => {
  return (
    <div id="specialities" className="flex flex-col gap-4 items-center py-16  text-gray-700">
      <h1 className="text-3xl font-medium">Find by Speciality </h1>
      <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.  </p>
      <div className="flex flex-wrap gap-4 pt-5 w-full overflow-scroll items-center sm:justify-center">
        {specialityData.map((item, index) => (
          <Link onClick={() => scroll(0, 0)} className=" fle flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

//1 hr 12 min

export default SpecialityMenu