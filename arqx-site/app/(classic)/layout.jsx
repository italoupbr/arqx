/* Layout das páginas v1 (mundo do protótipo original).
   O chrome antigo (Header/Footer/MobileNav) vive aqui até cada página
   migrar para o mundo v2 da nova home. */
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import MobileNav from "@/components/chrome/MobileNav";
import Reveal from "@/components/Reveal";

export default function ClassicLayout({ children }) {
  return (
    <div className="classic-shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileNav />
      <Reveal />
    </div>
  );
}
