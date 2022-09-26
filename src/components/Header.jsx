import "animate.css";
function Header() {
  return (
    <div className={"header-cont"}>
      <img className={"background "} src="/bg2.webp" alt="" />
      {/* Girişte bizi karşılayan arka plan resmi */}
      <h1 className={"header1  animate__animated animate__zoomInDown"}>
        {/*
           Buradaki animasyon kodları anime.css'den alınmıştır
           */}
        Galeri
      </h1>
      <h2 className={"header2 animate__animated animate__zoomInDown font-bold"}>
        {/*
           Buradaki animasyon kodları anime.css'den alınmıştır
           */}
        Yazılımcı Mekanı Codejam Yarışması İçin İbrahim Hakkı Ergin Tarafından
        Yapılmıştır.
      </h2>
      <h3 className={"header2 animate__animated animate__zoomInDown"}>
        Reactjs, Tailwindcss, animate.css, Vite ve yarn kullanılarak
        yapılmıştır. Resimlerin optimizasyonu için kalite, çözünürlük düşürmesi
        ve tinypng sitesinden boyut düşürmesi yapılmıştır.(Resimler orijinal
        kalite ve çözünürlükte indiriliyor.)
      </h3>
    </div>
  );
}
export default Header;
