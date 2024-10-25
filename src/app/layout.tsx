import type { Metadata } from "next";
import { Roboto, Josefin_Sans, Bebas_Neue, Bricolage_Grotesque, Lato} from "next/font/google";
import "./globals.css";

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-roboto',
})

const lato_init = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400','700', '900'],
  variable: '--font-lato',
})

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable:'--font-bricolage',
})

const josefin_sans_init = Josefin_Sans({
  subsets:['latin'],
  weight: ['100', '300', '400', '500'],
  variable: '--font-josefin',
})

const bebas_neue_init = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: "Living Stone Fire And Revival Outreach",
  description: "Raising an army of a wealthy kingdom-minded people!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${lato_init.variable} ${bricolage_grotesque_init.variable} ${josefin_sans_init.variable} ${bebas_neue_init.variable}`}>{children}</body>
    </html>
  );
}
