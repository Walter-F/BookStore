import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="welcome-label">Добро пожаловать в книжный магазин!</h1>
      <Image className="main-image"
          src={"/assets/MainImage.jpg"}
          alt="Main Image"
          width={960}
          height={640}
      />
    </div>
    )
}
