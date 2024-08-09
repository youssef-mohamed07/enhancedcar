import { MdOutlineInventory } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline  } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

export default () => {

  const features = [
      {
          icon:
          <MdOutlineInventory className="text-3xl text-yellow-600" />,
          title: "Car Inventory",
          desc: "A comprehensive listing of all available cars, including detailed information such as make, model, year, price, and specifications."
      },
      {
          icon:
              <CiSearch className="text-3xl text-yellow-600" /> ,
          title: "Search and Filter Options",
          desc: "Allows users to search and filter cars based on various criteria like price range, brand, type, and more."
      },
      {
          icon:
              <IoCarSportOutline  className="text-3xl text-yellow-600" />,
          title: "Test Drive",
          desc: "Clients can experience a  test drive of selected cars."
      },
      {
          icon:
              <IoShieldCheckmarkOutline className="text-3xl text-yellow-600" />,
          title: "Insurance Options",
          desc: "A feature that provides users with information about various car insurance plans and coverage options. Users can compare different insurance providers, get quotes, and even purchase or apply for insurance directly through the website, ensuring they have the right protection for their new vehicle."
      },
      {
          icon:
              <MdOutlineReviews className="text-3xl text-yellow-600" />,
          title: "Customer Reviews and Ratings ",
          desc: "A section where customers can leave reviews and ratings for cars and dealership services."
      },
      {
          icon:
              <IoTimeOutline className="text-3xl text-yellow-600" />,
          title: "Appointment Booking",
          desc: "Enables users to schedule appointments for test drives, maintenance, or consultations directly through the website."
      },
  ]

  return (
      <section className="py-14" id="features">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <div className="relative max-w-2xl mx-auto sm:text-center">
                  <div className="relative z-10">
                      <h3 className="text-yellow-600 text-3xl font-semibold sm:text-4xl">
                          Features
                      </h3>
                  </div>
                  <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
              </div>
              <div className="relative mt-12">
                  <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {
                          features.map((item, idx) => (
                              <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                                  <div className=" pb-3">
                                      {item.icon}
                                  </div>
                                  <h4 className="text-lg text-gray-800 font-semibold">
                                      {item.title}
                                  </h4>
                                  <p>
                                      {item.desc}
                                  </p>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
      </section>
  )
}