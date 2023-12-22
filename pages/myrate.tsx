import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { useState, useEffect } from "react";
import RootLayout from "@/app/layout";
import Information from "@/app/components/Information";
import MyRate from "@/app/components/Ranking/myRate";
import MyDetail from "@/app/components/Detail";

export default function CourseRat() {
  return (
    <RootLayout>
      <MyDetail />
    </RootLayout>
  );
}
