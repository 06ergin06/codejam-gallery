function Picture(props) {
  return (
    <div className={"download-button-cont"}>
      {/* Bu kısım resimleri indirebileceğimiz butonun kodudur */}
      <a className={"download-button"} href={props.download} download>
        <img src="/icons8-down-arrow-256.png" alt="download" />
      </a>
      <div className={"pictures "}>
        {/* Burası da resimlerin bulunduğu yerdir */}
        <img
          className={"picture"}
          src={props.src}
          alt={props.text}
          loading={"lazy"}
        />
      </div>
    </div>
  );
}
export default Picture;
