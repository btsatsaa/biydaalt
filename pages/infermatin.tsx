"use client";
import "../app/globals.css";
import Banner from "@/app/components/Banner";
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { useState, useEffect } from "react";
import RootLayout from "@/app/layout";
import Information from "@/app/components/Information";

export default function Infer() {
  return (
    <RootLayout>
      <Information></Information>
    </RootLayout>
  );
}
