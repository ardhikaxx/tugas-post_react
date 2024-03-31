import React from "react";
import InputFields from "./components/input-fields";
import Navbar from "../landing/navbar";
import Footer from "../landing/footer";
import { Link } from "react-router-dom";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Navbar />

        <div className="mx-auto w-[70%] h-screen m-20">
          <h1 className="text-5xl font-medium font-sans text-white text-center">
            WE ARE HERE FOR YOU
          </h1>
          <div className="container my-10 mx-auto md:px-6">
            <section className="mb-32">
              <div className="block rounded-lg bg-gray-700 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex flex-wrap items-cente align-topr">
                  <div className="w-full lg:w-6/12 xl:w-8/12">
                    <h1 className="my-5 mx-5 text-5xl font-serif text-white">
                      Kepuasan Anda selalu menjadi prioritas kami
                    </h1>
                    <p className="mx-5 mr-10 text-white text-sm">
                      Untuk pertanyaan lebih lanjut, jangan ragu untuk
                      menghubungi kami menggunakan formulir dibawah ini. Kami
                      akan menghubungi Anda sesegera mungkin.
                    </p>

                    <div className="mx-5 pt-12 pb-12 md:pb-0 lg:pt-0">
                      <InputFields label={"Email"} type={"input"} />
                      <div className="flex gap-5">
                        <InputFields label={"Name"} type={"input"} />
                        <InputFields label={"Phone"} type={"input"} />
                      </div>
                      <InputFields label={"Description"} type={"area"} />
                    </div>
                    <button className="mx-5 my-5 bg-transparent hover:bg-gray-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                      Submit
                    </button>
                  </div>
                  <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                    <div className="h-[500px] w-full">
                      <img
                        src="/contact.jpg"
                        alt=""
                        className="left-0 top-0 h-full w-full rounded-r-lg lg:rounded-tr-lg lg:rounded-br-lg bg-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
