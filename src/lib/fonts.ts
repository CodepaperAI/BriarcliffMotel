import { Fraunces, Public_Sans } from "next/font/google";

export const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-next",
  display: "swap",
});

export const fontBody = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-next",
  display: "swap",
});
