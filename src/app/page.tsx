import Image from "next/image";

import Navbar from "@/components/Navbar";
import walking from "../assets/walking-rice.jpg";
import { BiBowlRice, BiPhoneCall } from "react-icons/bi";
import {
  FaRegAddressCard,
  FaShippingFast,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex justify-evenly">
        <Navbar />
      </div>
      <div className="bg-emerald-600 absolute left-0 top-0 h-96 w-1/3 -z-10"></div>
      <main className="flex flex-col px-24 py-6">
        <div className="h-96 flex flex-row justify-between" id="hero">
          <div className="mt-20 w-1/2">
            <Image src={walking} alt="rice-image" width={400} height={200} />
          </div>
          <div className="flex flex-col justify-center mt-20 ml-10 w-1/2">
            <h1>Welcome to Brice!</h1>
            <p>
              Discover the Essence of Flavour with Our Premium Basmati Rice.
              Elevate your culinary experience with our exquisite selection of
              Basmati rice, renowned for its aromatic fragrance and long,
              delicate grains. Experience the finest quality that enriches every
              meal. Explore the taste of perfection Brice Basmati!
            </p>
            <button className="p-2 border-black bg-emerald-500 shadow-xl rounded-md mt-8">
              Order Our Rice Now
            </button>
          </div>
        </div>
        <div className="flex flex-col my-8 py-6" id="order">
          <h2 className="text-center">
            Order in <strong className="text-emerald-600">Four</strong> Simple
            Steps
          </h2>
          <div className="flex flex-row w-full max-w-5xl justify-between gap-x-2 my-8 ">
            <div className="bg-[#fcfcfc] rounded-sm shadow-xl p-4 w-[450px]">
              <BiBowlRice
                className="text-emerald-600 flex justify-center mx-auto py-4"
                size="80px"
              />
              <p className="my-10">
                1. Identify which Brice product you want to purchase
              </p>
            </div>
            <div className="bg-[#fcfcfc] rounded-sm shadow-xl p-4 w-[450px]">
              <BiPhoneCall
                className="text-emerald-600 flex justify-center mx-auto py-4"
                size="80px"
              />
              <p className="my-10">
                2. Notify the admin through your preferred channel
              </p>
              <div className="flex flex-row justify-center gap-x-4 -mb-0">
                <FaWhatsapp className="text-emerald-800" />
                <FaInstagram className="bg-gradient-to-b from-red-400 to-blue-600 rounded-md" />
                <FaFacebook className="text-blue-900" />
              </div>
            </div>
            <div className="bg-[#fcfcfc] rounded-sm shadow-xl p-4 w-[450px]">
              <FaRegAddressCard
                className="text-emerald-600 mx-auto py-4"
                size="80px"
              />
              <p className="my-10">
                3. Indicate your shipping address naming the following:
                <ol>
                  <li>Name</li>
                  <li>City/Town</li>
                  <li>Phone Number</li>
                </ol>
              </p>
            </div>
            <div className="bg-[#fcfcfc] rounded-sm shadow-xl p-4 w-[450px]">
              <FaShippingFast
                className="text-emerald-600 flex justify-center mx-auto py-4"
                size="80px"
              />
              <p className="my-10">
                4. After confirmation of your order, your rice will shipped by
                one of our riders within stipulated time.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col shadow-xl justify-center bg-emerald-500 p-10 rounded-md"
          id="products"
        >
          <div className="flex rounded-md shadow-xl p-8 w-[300px] bg-[#fcfcfc] mx-auto gap-x-2 ">
            <div>
              <BiBowlRice className="text-emerald-500" size="2xl" />
            </div>
            <div>
              <p>
                <em>2.5kg</em> @ <strong>Kes. 880/= only</strong>
              </p>
              <p>
                With an offer you cannot say no to, ready tasty meals at home
                with our 2.5kg package.
              </p>
            </div>
          </div>
          <div className="flex flex-row rounded-md shadow-xl p-8 w-[300px] bg-[#fcfcfc] mx-auto gap-x-2">
            <div>
              <p>
                <em>5kg</em> @ <strong>Kes. 1750/= only</strong>
              </p>
              <p>
                More rice at a lower price! Change your diet with our 5kg rice.
              </p>
            </div>
            <div>
              <BiBowlRice className="text-emerald-500" size="2xl" />
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl rounded-md p-6 my-8" id="about">
          <h2 className="text-center text-emerald-500">
            <strong>About Brice Basmati</strong>
          </h2>
          <p className="leading-loose py-8">
            Welcome to Brice Basmati – Your Ultimate Rice Destination. We
            specialize in sourcing the finest Basmati rice, offering unbeatable
            quality, competitive prices, and swift delivery to your doorstep.
            Elevate your dining experience with us, where the best rice meets
            affordability and convenience.
          </p>
          <p className="leading-loose py-8">
            Established in 2023, Brice Basmati emerged with a clear vision: to
            redefine your rice choices. We strive to provide households with the
            highest quality Basmati rice, making every meal exceptional. Our
            goal is to blend tradition with modern convenience, offering not
            only premium grains but also seamless and swift delivery, all at
            affordable prices. Elevate your dining experience with Brice
            Basmati.
          </p>
        </div>
        <div id="#contact">
          <h3 className="text-center font-bold text-emerald-500">Contact Us</h3>
          <form className="flex flex-col gap-y-2 rounded-md p-8 shadow-xl">
            <div className="flex flex-row gap-x-4 p-3 w-full">
              <p className="font-bold basis-3">Name:</p>
              <input className="border-emerald-500 basis-8" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
