import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  // { name: 'Home', href: '/', current: true },
  // { name: 'Courses', href: '#courses', current: false },
  // { name: 'Mentor', href: '#mentor', current: false },
  // { name: 'Group', href: '#/', current: false },
  // { name: 'Testimonial', href: '#testimonial', current: false },
  { name: " chuhal zvil", href: "#/", current: true },
  { name: "Сургалтууд", href: "#courses", current: false },
  { name: "Багш нар", href: "#mentor", current: false },
  { name: "Түнш", href: "#companies", current: false },
  // { name: 'Testimonial', href: '#testimonial', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
    return (
        {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "text-black hover:opacity-100"
                  : "hover:text-black hover:opacity-100",
                "py-1 text-lg font-normal opacity-75 block"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
    )}