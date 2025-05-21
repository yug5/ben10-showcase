import Image from "next/image";
import AlienGallery from "./comp/AlienGallery";
import Ben10Selctor from "./comp/Ben10Selctor";

export default function Home() {
  return (
    <div>
      <Ben10Selctor/>
      <AlienGallery/>
    </div>
  );
}
