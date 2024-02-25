import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import vercel from "../public/vercel.svg"
import grim from "../public/hero-images/grim.png"
import aston from "../public/hero-images/aston.webp"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start relative  bg-neutral-900">
      <nav className="z-50 w-full h-max p-4 flex justify-between items-center bg-black bg-opacity-50 backdrop-blur-md sticky top-0">
        <div>
          <Image src={vercel} width="100" height="100" atl="logo"/>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/" className="hover:text-gray-600 text-white">Features</Link>
          <Link href="/" className="hover:text-gray-600 text-white">Pricing</Link>
          <Link href="/" className="hover:text-gray-600 text-white">FAQs</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/"><Button variant="primary" className="rounded-3xl border hover:border-white bg-white hover:bg-black hover:text-white font-bold">Login</Button></Link>
          <Link href="/"><Button variant="primary" className="rounded-3xl border border-transparent hover:border-white bg-green-400 text-black font-bold" >Create Account</Button></Link>
        </div>
      </nav>
      <section>
        <div className="p-16 text-center flex flex-col items-center gap-4">
          <h1 className="text-8xl font-normal tracking-tighter text-white px-24">The canvas is your oyster</h1>
          <h3 className="text-md px-72 font-light text-white">Generate your own images, edit and style them to create out of this world graphics all with the power of AI. Turn your imagination into reality</h3>
          <div>
          <Link href="/"><Button variant="primary" className="rounded-3xl border border-transparent hover:border-white bg-yellow-200 text-black font-bold" >Try it Out</Button></Link>
          </div>
        </div>
        <div className="flex justify-center w-full gap-4">
          <div className="relative w-64 h-64">
            <Image
              src={grim}  
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 rounded-md"
            />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="bg-transparent border border-white backdrop-blur-md text-white rounded-md p-2">
                The grim reaper in a cafe
              </div>
            </div>
          </div>
          <div className="relative w-64 h-64">
            <Image
              src={aston}  
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 rounded-md"
            />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="bg-transparent border border-white backdrop-blur-md text-white rounded-md p-2">
                The new aston martin
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-20 mt-40">
        <h2 className="text-7xl font-normal tracking-tighter text-white">Features</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className=" rounded-md flex flex-col w-96 h-[30rem] text-white border border-gray-500 hover:border-white">
            <div className="w-full h-[80%] relative ">
            <Image
                src={aston}  
                layout="fill"
                objectFit="cover"
                className="rounded-md rounded-b-none"
              />
            </div>
            <div className="w-full h-[20%] text-white p-4 ">
              <h3 className="text-xl">Built-in Optimizations</h3>
              <p className="text-sm text-gray-500 text-ellipsis">Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.</p>
            </div>
          </div>
          <div className=" rounded-md flex flex-col w-96 h-[30rem] text-white border border-gray-500 hover:border-white">
            <div className="w-full h-[80%] relative ">
            <Image
                src={aston}  
                layout="fill"
                objectFit="cover"
                className="rounded-md rounded-b-none"
              />
            </div>
            <div className="w-full h-[20%] text-white p-4 ">
              <h3 className="text-xl">Built-in Optimizations</h3>
              <p className="text-sm text-gray-500 text-ellipsis">Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.</p>
            </div>

        </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center text-white w-full  p-4 gap-20">
          <h3 className="text-7xl font-normal tracking-tighter text-white">Pricing</h3>
          
            <Tabs defaultValue="monthly" className="w-full mx-auto">
              <TabsList className="grid grid-cols-2 bg-neutral-700 w-[300px] mb-4  text-white">
                <TabsTrigger value="monthly" className="bg-neutral-700" >Monthly</TabsTrigger>
                <TabsTrigger value="yearly" className="bg-neutral-700">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly" className="flex gap-10">
                <div className="pricing_card flex flex-col gap-4 p-2">
                  <div className="p-4 border border-neutral-300 flex flex-col rounded-md items-start gap-4">
                    <h3 className="text-md tracking-tight text-white">Poverty Plan</h3>
                    <p className="text-lg tracking-tight text-white font-bold">$0</p>
                  </div>
                  <div>
                    <ul className="list-item">
                      <li>✅10 image credits per day</li>
                      <li>✅Prompter Program</li>
                      <li>❌Background Remover</li>
                      <li>❌Super Resolution</li>
                      <li>❌Access to Community Prompts</li>
                    </ul>
                  </div>
                  <Button variant="primary" className="w-full bg-green-400 text-black p-4 rounded-3xl hover:border-white hover:border ">Subscribe</Button>
                </div>
                <div className="pricing_card flex flex-col gap-4 p-2">
                  <div className="p-4 border border-neutral-300 flex flex-col rounded-md items-start gap-4">
                    <h3 className="text-md tracking-tight text-white">Balling Plan</h3>
                    <p className="text-lg tracking-tight text-white font-bold">$10 /month</p>
                  </div>
                  <div>
                    <ul className="list-item">
                      <li>✅10 image credits per day</li>
                      <li>✅Prompter Program</li>
                      <li>✅Background Remover</li>
                      <li>✅Super Resolution</li>
                      <li>✅Access to Community Prompts</li>
                    </ul>
                  </div>
                  <Button variant="primary" className="w-full bg-green-400 text-black p-4 rounded-3xl hover:border-white hover:border ">Subscribe</Button>
                </div>
              </TabsContent>
              <TabsContent value="yearly" className="flex gap-10">
                  <div className="pricing_card flex flex-col gap-4 p-2">
                    <div className="p-4 border border-neutral-300 flex flex-col rounded-md items-start gap-4">
                      <h3 className="text-md tracking-tight text-white">Balling Plan</h3>
                      <p className="text-lg tracking-tight text-white font-bold">$8 /month</p>
                    </div>
                    <div>
                      <ul className="list-item">
                        <li>✅10 image credits per day</li>
                        <li>✅Prompter Program</li>
                        <li>✅Background Remover</li>
                        <li>✅Super Resolution</li>
                        <li>✅Access to Community Prompts</li>
                      </ul>
                    </div>
                    <Button variant="primary" className="w-full bg-green-400 text-black p-4 rounded-3xl hover:border-white hover:border ">Subscribe</Button>
                  </div>
                  <div className="pricing_card flex flex-col gap-4 p-2">
                    <div className="p-4 border border-neutral-300 flex flex-col rounded-md items-start gap-4">
                      <h3 className="text-md tracking-tight text-white">Balling Plan</h3>
                      <p className="text-lg tracking-tight text-white font-bold">$8 /month</p>
                    </div>
                    <div>
                      <ul className="list-item">
                        <li>✅10 image credits per day</li>
                        <li>✅Prompter Program</li>
                        <li>✅Background Remover</li>
                        <li>✅Super Resolution</li>
                        <li>✅Access to Community Prompts</li>
                      </ul>
                    </div>
                    <Button variant="primary" className="w-full bg-green-400 text-black p-4 rounded-3xl hover:border-white hover:border ">Subscribe</Button>
                  </div>
              </TabsContent>
          </Tabs>
          
        </div>
        <div></div>
      </section>
      <section className="w-full flex justify-center ">
      <div className="flex flex-col items-center text-white w-3/4 p-4 gap-20">
        <h3 className="text-7xl font-normal tracking-tighter text-white">FAQs</h3>
        <Accordion type="single" collapsible className="w-full px-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      </section>
    </main>
  );
}
