import {
    AnimatedCircles,
    HealthSvg,
    LayeredCircles,
    SwapSvgIcon,
} from "@/components/svgs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export default function Page() {
    return (
        <div className="mx-auto max-w-6xl sm:py-20 py-10 sm:px-12">
            {/* Intro Section */}
            <section className="flex flex-col gap-4 mb-16">
                <div className="flex flex-col justify-center gap-6 items-center px-3 py-10">
                    <h1 className="text-3xl sm:text-4xl font-medium text-neutral-800">
                        Meet Liblio
                    </h1>
                    <p className="text-xl text-center text-neutral-600">
                        Library management system for worldwide schools
                    </p>
                </div>
                <div className="grid grid-rows-1 w-full gap-16">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-0 px-3">
                        <div className="relative w-full h-[300px]">
                            {/* <Image
                                src={`/static/minerals.jpg`}
                                alt="Minerals in vehicle"
                                fill
                                className="rounded-2xl border border-white hover:shadow-md transition-all cursor-pointer"
                            /> */}
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-medium text-neutral-800 mt-4">
                                Reading as A Culture
                            </h2>
                            <p className="text-neutral-600">
                                Book Inventories stored and kept securely with no risk of data loss of altering!!
                            </p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-0 px-3">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-medium text-neutral-800 mt-6">
                                {/* Shortfall Secured */}
                            </h2>
                            <p className="text-neutral-600">
                                The Liblio secured with a backstop against
                                protocol insolvency. No book record will ever leak. It's a deal!!
                            </p>
                        </div>
                        <div className="relative w-full h-[300px]">
                            {/* <Image
                                src={`/static/people-in-mine.jpeg`}
                                alt="People in mining site"
                                fill
                                className="rounded-2xl border border-white hover:shadow-md transition-all cursor-pointer"
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Features section */}
            <section id="solutions">
                <div className="space-y-4 sm:px-0 px-3">
                    <h2 className="text-4xl font-medium">Trust, Unlocked.</h2>
                    <p className="text-xl">
                        Liblio can be trusted with these powerful features.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-[300px_300px] grid-rows-[300px_300px_300px_300px] mt-12 gap-10 sm:px-0  px-3">
                    <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
                        
                        <p className="text-xl font-medium text-neutral-800">
                            Swap
                        </p>
                        <p className="text-neutral-600">
                          Swap and exchange ownership of books and power in the chain
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
                        <AnimatedCircles />
                        <p className="text-xl font-medium text-neutral-800">
                            Stake
                        </p>
                        <p className="text-neutral-600">
                            Earn rewards for securing the protocol(Klayr)
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
                        <HealthSvg />
                        <p className="text-xl font-medium text-neutral-800">
                            Traceability
                        </p>
                        <p className="text-neutral-600">
                            Easily track the books borrowed from a library
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 justify-end p-8 rounded-xl relative shadow">
                        <div>
                            <LayeredCircles />
                        </div>
                        <p className="text-xl font-medium text-neutral-800">
                            Multi-Network
                        </p>
                        <p className="text-neutral-600">
                           Javascript powered environment
                        </p>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section
                className="grid sm:grid-cols-3 grid-cols-1 mt-12 gap-1"
                id="faq"
            >
                <div className="p-4">
                    <h1 className="text-4xl animate-fade-down">FAQs</h1>
                </div>
                <div className="col-span-2 sm:px-0 px-3">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                What is Liblio?
                            </AccordionTrigger>
                            <AccordionContent>
                                It is a Decentralized platform for managing books and libraries in schools!
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                How are books and libraries managed in a network                            </AccordionTrigger>
                            <AccordionContent>
                                They are managed on the network and monitored by nodes in a network powered by Klayr
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Does Libliohave risks?
                            </AccordionTrigger>
                            <AccordionContent>
                               Nope! Currently, there are no known risks associated with Liblio
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Why should I trust Liblio?
                            </AccordionTrigger>
                            <AccordionContent>
                                Liblio is built on Klayr blockchain that ensures integrity and traceability of books across the whole chain!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    )
}
