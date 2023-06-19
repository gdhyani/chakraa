import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
    return (
        <section className="flex bg-white text-black sm:flex-row flex-col text-center sm:text-left items-center justify-between   py-20 px-20 mt-10 rounded-t-3xl">
            <div>
                <h1 className="text-3xl font-mono">Like what you see ?</h1>
                <h1 className="text-7xl font-black mt-3 sm:mt-0 ">Lets Work</h1>
            </div>
            <Link
                href="/contact"
                className="flex flex-row gap-3 hover:scale-110 border-redishpink  transition-all mt-12 sm:mt-0 bg-redishpink text-white rounded-xl px-10 py-4 text-2xl"
            >
                Get in Touch{" "}
                <Image
                    src="/arrow.svg"
                    className="w-14"
                    width={10}
                    height={10}
                    alt="arrow"
                />
            </Link>
        </section>
    );
}
