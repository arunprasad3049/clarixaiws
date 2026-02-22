import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "clarixai | Agentic AI & Enterprise Engineering",
  description:
    "clarixai delivers Cloud solutions & migrations, GenAI/AI-ML & Data analysis, Agentic AI for BFSI/Health Insurance/FinTech, Cybersecurity, and DevOps & container solutions.",
  openGraph: {
    title: "clarixai",
    description: "Agentic AI & enterprise engineering for regulated industries.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
