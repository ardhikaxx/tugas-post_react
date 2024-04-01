import React from "react";
import Navbar from "../landing/navbar";
import Footer from "../landing/footer";
import { useLocation } from "react-router-dom";

const AboutPageView: React.FC = () => {
  const slug = useLocation();
  return (
    <>
      {slug.pathname === "/about" ? <Navbar /> : ""}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto w-[80%] text-white text-justify ">
          <p className="text-lg mb-4">
            <span className="text-4xl font-serif text-center">
              Selamat datang di ItemServer!
            </span>
            <br />
            <br /> Kami adalah sebuah perusahaan yang berdedikasi untuk
            memberikan solusi terbaik dalam bidang layanan jual beli barang.
            Dengan komitmen kami terhadap kualitas, inovasi, dan pelayanan
            pelanggan, kami telah berhasil membangun reputasi yang kuat di
            pasar. Di ItemServer, kami memahami bahwa setiap tantangan membawa
            peluang untuk pertumbuhan. Itulah mengapa kami selalu berusaha untuk
            menjadi yang terdepan dalam menghadapi perubahan dan menawarkan
            solusi yang relevan dan inovatif kepada klien kami. Dengan tim yang
            berpengalaman dan berbakat, kami siap membantu Anda mencapai tujuan
            bisnis Anda. Dari konsultasi hingga implementasi, kami akan bekerja
            sama dengan Anda setiap langkah dalam perjalanan Anda. Kami percaya
            bahwa kolaborasi adalah kunci kesuksesan. Mari kita bangun masa
            depan bersama-sama. Jelajahi situs web kami untuk informasi lebih
            lanjut tentang layanan kami, proyek-proyek terbaru kami, dan cara
            untuk menghubungi tim kami. Kami sangat berharap dapat bekerja sama
            dengan Anda.
            <br />
            <br /> Terima kasih atas kunjungan Anda.
          </p>
        </div>
      </div>
      {slug.pathname === "/about" ? <Footer /> : ""}
    </>
  );
};

export default AboutPageView;
