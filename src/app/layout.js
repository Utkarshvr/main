import Theme from "@/styles/theme";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Utkarsh Verma",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
