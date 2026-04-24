import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"; // Swapping fonts
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, createTheme, MantineColorsTuple, MantineProvider } from "@mantine/core";

// 1. Initialize the new fonts
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const logoBlue: MantineColorsTuple = [
  '#e9f3fb', '#d1e4f5', '#a1c7eb', '#6fa8e1', '#488fd9', 
  '#2a77cc', '#075395', '#054681', '#04396a', '#03264a',
];

export const theme = createTheme({
  primaryColor: 'logoBlue',
  // 2. Link the fonts to Mantine
  fontFamily: jakarta.style.fontFamily,
  fontFamilyMonospace: mono.style.fontFamily,
  
  colors: {
    logoBlue,
    slate: [
      '#f3f5f7', '#e2e7eb', '#c5ced6', '#a7b4c1', '#8ca1b3',
      '#6e84a2', '#50657a', '#3f4f60', '#2e3a47', '#1d252e'
    ],
    sand: [
      '#fdfaf3', '#f9f3e6', '#f6ebcf', '#ecdcb0', '#e3cd91',
      '#c9b99f', '#b1a186', '#988a70', '#80745a', '#685e48'
    ],
  },
  defaultRadius: 'md',
  white: '#ffffff',
  components: {
    Button: {
      defaultProps: { color: 'logoBlue' },
    },
  },
});

export const metadata: Metadata = {
  title: "My New Site",
  description: "Modernized with Mantine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Apply the font variables to the html tag
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}