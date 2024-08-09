import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";

export default () => {

  const ContactUs = [
      {
          icon:
          <CiMail className="text-2xl text-yellow-600" />
          ,
          contact: "Support@example.com"
      },
      {
          icon:
          <CiPhone className="text-2xl text-yellow-600" />
          ,
          contact: "+1 (555) 000-000"
      },
      {
          icon:
          <CiLocationOn className="text-2xl text-yellow-600"/>
          ,
          contact: "Mountain View, California, United State."
      },
  ]

  return (
      <main className="py-14 bg-gray-200" id="contact-us">
        <h3 className="text-yellow-600 text-3xl font-semibold sm:text-4xl text-center mb-12"> Contact </h3>
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                  <div className="max-w-lg space-y-3">
                      
                      <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                          Let us know how we can help
                      </p>
                      <p>
                          We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                      </p>
                      <div>
                          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                              {
                                  ContactUs.map((item, idx) => (
                                      <li key={idx} className="flex items-center gap-x-3">
                                          <div className="flex-none text-gray-400">
                                              {item.icon}
                                          </div>
                                          <p>{item.contact}</p>
                                      </li>
                                  ))
                              }
                          </ul>
                      </div>
                  </div>
                  <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                      <form
                          onSubmit={(e) => e.preventDefault()}
                          className="space-y-5"
                      >
                          <div>
                              <label className="font-medium">
                                  Full name
                              </label>
                              <input
                                  type="text"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-white  outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                              />
                          </div>
                          <div>
                              <label className="font-medium">
                                  Email
                              </label>
                              <input
                                  type="email"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                              />
                          </div>
                          
                          <div>
                              <label className="font-medium">
                                  Message
                              </label>
                              <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-white outline-none border focus:border-yellow-600 shadow-sm rounded-lg"></textarea>
                          </div>
                          <button
                              className="w-full px-4 py-2 text-white font-medium bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-600 rounded-lg duration-150"
                          >
                              Submit
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </main>
  )
}