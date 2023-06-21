import GetInTouch from "../components/getInTouch";
import "../page.css";
import Image from "next/image";
export default function Brand() {
    return (
        <main>
            <section className="px-5 mx-5 ">
                <div className="my-36 pt-20">
                    <h1 className="text-7xl font-extrabold">Brands</h1>
                    <h1 className="text-2xl font-mono mt-12">
                        No matter what brand you are, we have influencers for
                        you
                    </h1>
                </div>
            </section>
            <section className="py-20 flex flex-row">
                <div className="w-full sm:w-2/3 px-5 mx-5 flex flex-col gap-10">
                    <div className="">
                        <h1 className="bg-redishpink w-max px-3">Why Us</h1>
                        <h1 className="text-7xl font-bold outlineShadow">
                            Change the Way You{" "}
                            {/* <span className="bg-redishpink m-2 outlineShadow2"> */}
                            Influence
                            {/* </span> */}
                        </h1>
                    </div>
                    <h1 className="text-2xl font-mono">
                        We understand your brand needs and select the best
                        suited influencers from our pool of talents matching to
                        needs of your brand & products.
                    </h1>
                    <div className="flex flex-row gap-10">
                        <ul className="flex gap-10 flex-col">
                            <li><span className="dot"></span>Understand Your Audience</li>
                            <li><span className="dot"></span>Reach Your Audience</li>
                        </ul>
                        <ul className="flex gap-10 flex-col">
                            
                            <li><span className="dot"></span>Sell More</li>
                            <li><span className="dot"></span>Social Media Analytics</li>
                        </ul>
                    </div>
                </div>
                <div className="w-0 sm:w-1/2  ">
                    <Image
                        className="m-auto"
                        src="./svgexport-11.svg"
                        width={300}
                        height={300}
                    ></Image>
                </div>
            </section>
            <GetInTouch />
        </main>
    );
}
