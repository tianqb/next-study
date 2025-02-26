import React from "react";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata:Metadata={
  title:"Home"
}

export default function Page(){
  return(
    <Hero imgUrl = "/home.jpg" altTxt="Home" content="Professional Cloud Hosting" />
  );
}