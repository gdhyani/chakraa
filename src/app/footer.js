import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-white text-black  flex flex-col sm:flex-row ">
            <div className="flex flex-col sm:w-1/2 p-10 sm:p-20">
                <h1 className="font-extrabold text-4xl mb-3">Chakraa</h1>
                <p className="font-mono">
                    We are dedicated to establishing brand communication through
                    sharp cutting-edge approaches, first-hand storytelling,
                    strategic engagement and polished influencer marketing.
                </p>
                <div className="flex flex-row mt-5 gap-3">
                    <Link className="" href="/">
                        <Image
                            height={30}
                            width={30}
                            className=""
                            alt="icon"
                            src="/facebook.svg"
                        />
                    </Link>
                    <Link className="" href="/">
                        <Image
                            height={30}
                            width={30}
                            className=""
                            alt="icon"
                            src="/instagram.svg"
                        />
                    </Link>
                    <Link className="" href="/">
                        <Image
                            height={30}
                            width={30}
                            className=""
                            alt="icon"
                            src="/twitter.svg"
                        />
                    </Link>
                    <Link className="" href="/">
                        <Image
                            height={30}
                            width={30}
                            className=""
                            alt="icon"
                            src="/whatsapp.svg"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex sm:w-1/2 p-10 sm:p-0">
                <div className="flex w-1/2 py-0 sm:py-20 flex-col">
                    <h1 className="font-extrabold text-xl mb-3 font-mono">
                        Quick Links
                    </h1>
                    <div className="flex flex-col">
                        <Link className="font-mono" href="/">
                            Home
                        </Link>
                        <Link className="font-mono" href="/about">
                            About
                        </Link>
                        <Link className="font-mono" href="/services">
                            Our Service
                        </Link>
                        <Link className="font-mono" href="/influencer">
                            Influencer
                        </Link>
                        <Link className="font-mono" href="/brand">
                            Brand
                        </Link>
                        <Link className="font-mono" href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 py-0 sm:py-20">
                    <h1 className="font-extrabold text-xl mb-3 font-mono">
                        Contact Details
                    </h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <Image
                                height={25}
                                width={25}
                                className=""
                                alt="icon"
                                src="/phone.svg"
                            />
                            <h1>+91 9999999999</h1>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image
                                height={25}
                                width={25}
                                className=""
                                alt="icon"
                                src="/mail.svg"
                            />

                            <h1>support@chakraa.in</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
