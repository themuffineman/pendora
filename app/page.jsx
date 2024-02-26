import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {Button as MButton} from '@/components/ui/moving-border'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import pendora_logo from "../public/pendora_logo.png"
import img1 from "../public/hero-images/img1.webp"
import img2 from "../public/hero-images/img2.webp"
import img3 from "../public/hero-images/img3.webp"
import img4 from "../public/hero-images/img4.webp"
import img5 from "../public/hero-images/img5.webp"
import img6 from "../public/hero-images/img6.webp"
import aston from "../public/hero-images/aston.webp"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroGridCard } from "@/components/HeroGridCard";
import styles from '@/components/components.module.css';
import FeaturesCard from "@/components/FeaturesCard";
import PricingCard from "@/components/PricingCard";
import { freePlan } from "@/utils/PricingFeatures";
import { daVinciPlan } from "@/utils/PricingFeatures";



export default function Home() {
  return (
    <main className=" min-h-screen justify-start text-center flex flex-col items-center gap-4 w-full  bg-black bg-dot-white/[0.2] relative" >
      <nav className="z-50 bg-neutral-950 w-full h-max p-4 flex justify-between items-center  bg-opacity-50 backdrop-blur-md sticky top-0">
        <div>
         <Link href="/"><Image src={pendora_logo} width="100" height="100" atl="logo"/></Link> 
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/" className="hover:text-neutral-300 text-white">Features</Link>
          <Link href="/" className="hover:text-neutral-300 text-white">Pricing</Link>
          <Link href="/" className="hover:text-neutral-300 text-white">FAQs</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/"><Button variant="primary" className="rounded-3xl border hover:border-white bg-white hover:bg-black hover:text-white font-bold">Login</Button></Link>
          <Link href="/"><Button variant="primary" className="rounded-3xl border border-transparent hover:border-white bg-pendora-yellow text-neutral-900 font-bold" >Create Account</Button></Link>
        </div>
      </nav>
      <section className=" w-full h-max flex flex-col justify-start pt-0 items-center ">
        <div className="px-4 text-center flex flex-col items-center justify-start gap-4  h-[30rem] w-full relative ">
          <h1 className="text-9xl font-font tracking-tighter  px-24  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">The canvas is your oyster</h1>
          <h3 className="text-lg px-72 font-light text-gray-500">Generate your own images create out of this world graphics all with the power of AI. Bring your imagination to life</h3>
          <div>
          <MButton borderRadius="4rem" duration={8000} className="rounded-3xl  bg-black text-white font-bold" >Try it Out</MButton>
          </div>
        </div>
        <div className=" w-full overflow-x-hidden  grid-flow-col grid-rows-1 gap-x-[2%] hidden">
          <div className={`gap-x-[4%] grid grid-flow-col border border-white`}>
            <HeroGridCard src={img1} prompt="Asian Princess"/>
            <HeroGridCard src={img2} prompt="Asian Princess"/>
            <HeroGridCard src={img3} prompt="Asian Princess"/>
            <HeroGridCard src={img4} prompt="Asian Princess"/>
            <HeroGridCard src={img5} prompt="Asian Princess"/>
            <HeroGridCard src={img6} prompt="Asian Princess"/>
          </div>
          <div className="gap-x-[4%] grid grid-flow-col border border-red-500">
            <HeroGridCard src={img1} prompt="Asian Princess"/>
            <HeroGridCard src={img2} prompt="Asian Princess"/>
            <HeroGridCard src={img3} prompt="Asian Princess"/>
            <HeroGridCard src={img4} prompt="Asian Princess"/>
            <HeroGridCard src={img5} prompt="Asian Princess"/>
            <HeroGridCard src={img6} prompt="Asian Princess"/>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-start gap-20 p-16">
        <h2 className="text-7xl font-normal tracking-tighter z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Features</h2>
        <div className="grid grid-cols-2 gap-4 gap-y-8">
          <FeaturesCard src={img1} title={"lorem Ipsum"} description={"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"}/>
          <FeaturesCard src={img2} title={"lorem Ipsum"} description={"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"}/>
          <FeaturesCard src={img3} title={"lorem Ipsum"} description={"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"}/>
          <FeaturesCard src={img3} title={"lorem Ipsum"} description={"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"}/>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center text-white w-full justify-start gap-20 p-16">
          <h3 className="text-7xl font-normal tracking-tighter z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Pricing</h3>
            <Tabs defaultValue="monthly" className="w-full mx-auto">
              <TabsList className="grid grid-cols-2 bg-neutral-700 w-[300px] mb-4  text-white">
                <TabsTrigger value="monthly" className="bg-neutral-700" >Monthly</TabsTrigger>
                <TabsTrigger value="yearly" className="bg-neutral-700">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly" className="flex gap-10">
                <PricingCard plan={freePlan} period="monthly"/>
                <PricingCard plan={daVinciPlan} period="monthly"/>
              </TabsContent>
              <TabsContent value="yearly" className="flex gap-10">
                <PricingCard plan={freePlan} period="yearly"/>
                <PricingCard plan={daVinciPlan} period="yearly"/>
              </TabsContent>
            </Tabs>
        </div>
      </section>
      <section className="w-full flex justify-center ">
      <div className="flex flex-col items-center text-white w-3/4 justify-start gap-20 p-16">
        <h3 className="text-7xl font-normal tracking-tighter z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">FAQs</h3>
        <Accordion type="single" collapsible className="w-full p-5 bg-neutral-950 bg-opacity-50 backdrop-blur-md rounded-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Whats The Refunds Policy?</AccordionTrigger>
            <AccordionContent>
              If you're not satisfied with the product after 3 days of use, we'll happily refund you no questions asked.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are the images any good?</AccordionTrigger>
            <AccordionContent>
              No, they freakin great.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What Are Community Prompts?</AccordionTrigger>
            <AccordionContent>
              It's a collection of image prompts from the community that you can use in your won generations. If someone uses your prompt in a generation you get a little compensation
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      </section>
      <section className="bg-neutral-950 bg-opacity-50 backdrop-blur-md w-full h-[10rem] p-10 flex items-center justify-start">
        <div>
          <Link href="/"><Image src={pendora_logo} width="100" height="100" atl="logo"/></Link> 
        </div>
      </section>
    </main>
  );
}
