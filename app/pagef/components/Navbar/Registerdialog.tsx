// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import { LockClosedIcon } from "@heroicons/react/20/solid";

// const Register = () => {
//   let [isOpen, setIsOpen] = useState(false);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };
//   /////////////////////register data////
//   const RegisterForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//       e.preventDefault();

//       try {
//         const response = await fetch("/api/usersData", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         });

//         if (response.ok) {
//           console.log("Registration successful!");
//           // You can redirect or perform other actions upon successful registration.
//         } else {
//           console.error("Registration failed.");
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//       }
//     };
//     ////////
//     return (
//       <>
//         <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
//           <div className="hidden lg:block">
//             <button
//               className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
//               onClick={openModal}
//             >
//               Бүртгүүлэх
//             </button>
//           </div>
//         </div>

//         <Transition appear show={isOpen} as={Fragment}>
//           <Dialog as="div" className="relative z-10" onClose={closeModal}>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-black bg-opacity-25" />
//             </Transition.Child>

//             <div className="fixed inset-0 overflow-y-auto">
//               <div className="flex min-h-full items-center justify-center p-4 text-center">
//                 <Transition.Child
//                   as={Fragment}
//                   enter="ease-out duration-300"
//                   enterFrom="opacity-0 scale-95"
//                   enterTo="opacity-100 scale-100"
//                   leave="ease-in duration-200"
//                   leaveFrom="opacity-100 scale-100"
//                   leaveTo="opacity-0 scale-95"
//                 >
//                   <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                     <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                       <div className="w-full max-w-md space-y-8">
//                         <div>
//                           {/* logo */}
//                           <img
//                             className="mx-auto h-12 w-auto"
//                             src="/assets/logo/logo.svg"
//                             alt="Your Company"
//                           />
//                           <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//                             Та бүртгүүлнэ үү?
//                           </h2>
//                         </div>
//                         <form
//                           className="mt-8 space-y-6"
//                           action="#"
//                           method="POST"
//                         >
//                           <input
//                             type="hidden"
//                             name="remember"
//                             defaultValue="true"
//                           />
//                           <div className="-space-y-px rounded-md shadow-sm">
//                             <div>
//                               <label
//                                 htmlFor="email-address"
//                                 className="sr-only"
//                               >
//                                 Имейл хаяг
//                               </label>
//                               <input
//                                 id="email-address"
//                                 name="email"
//                                 autoComplete="email"
//                                 required
//                                 className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                 placeholder="Имейл хаяг"
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                               />
//                             </div>
//                             <div>
//                               <label htmlFor="password" className="sr-only">
//                                 Нууц үг
//                               </label>
//                               <input
//                                 id="password"
//                                 name="password"
//                                 autoComplete="current-password"
//                                 required
//                                 className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                 placeholder=" Нууц үг"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                               />
//                             </div>
//                           </div>

//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                               <input
//                                 id="remember-me"
//                                 name="remember-me"
//                                 type="checkbox"
//                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                               />
//                               <label
//                                 htmlFor="remember-me"
//                                 className="ml-2 block text-sm text-gray-900"
//                               >
//                                 Хадгалах
//                               </label>
//                             </div>
//                           </div>

//                           <div>
//                             <button
//                               type="submit"
//                               className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                             >
//                               <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                                 <LockClosedIcon
//                                   className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                                   aria-hidden="true"
//                                 />
//                               </span>
//                               Бүртгүүлэх
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>

//                     <div className="mt-4 flex justify-end">
//                       <button
//                         type="button"
//                         className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 "
//                         onClick={closeModal}
//                       >
//                         Баярлалаа!
//                       </button>
//                     </div>
//                   </Dialog.Panel>
//                 </Transition.Child>
//               </div>
//             </div>
//           </Dialog>
//         </Transition>
//       </>
//     );
//   };
// };

// export default Register;
/////////////////////
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/usersDataInsert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Registration successful!");
        console.log({ email }, { password });
        closeModal(); // Close the modal on successful registration
      } else {
        console.error("Registration failed1.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
        <div className="hidden lg:block">
          <button
            className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
            onClick={openModal}
          >
            Бүртгүүлэх
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="mx-auto h-12 w-auto"
                          src="/assets/logo/logo.svg"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Та бүртгүүлнэ үү?
                        </h2>
                      </div>
                      <form
                        className="mt-8 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                      >
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Имейл хаяг
                            </label>
                            <input
                              id="email-address"
                              name="email"
                              autoComplete="email"
                              required
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Имейл хаяг"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div>
                            <label htmlFor="password" className="sr-only">
                              Нууц үг
                            </label>
                            <input
                              id="password"
                              name="password"
                              autoComplete="current-password"
                              required
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder=" Нууц үг"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Хадгалах
                            </label>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span>
                            Бүртгүүлэх
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 "
                      onClick={closeModal}
                    >
                      Баярлалаа!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Register;
