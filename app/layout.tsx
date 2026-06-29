import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bebas = Bebas_Neue({
	variable: "--font-bebas",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Barber 93 — Le style, c'est sérieux. | Aulnay-sous-Bois",
	description:
		"Barber 93, le barbershop d'Aulnay-sous-Bois (93600). Coupe homme, barbe, coupe enfant. Prends rendez-vous, le style c'est sérieux.",
	generator: "v0.app",
	icons: {
		icon: [
			{
				url: "/icons/light-logo.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icons/dark-logo.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icons/dark-logo.png",
				type: "image/svg+xml",
			},
		],
		apple: "/dark-logo.png",
	},
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#0a0a0a",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={`dark ${inter.variable} ${bebas.variable} bg-background`}>
			<body className="font-sans antialiased">
				{children}
				{process.env.NODE_ENV === "production" && <Analytics />}
			</body>
		</html>
	);
}
