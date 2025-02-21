import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next";
import { Alert } from "@/components/bootstrap"

export const metadata: Metadata = {
   title: "REI",
};

export const revalidate = 15

export default async function Page() {
   const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
       {
           // next: { revalidate: 15 } // También puede ser así
       }
   )
   const image: UnsplashImage = await response.json()

   const width = Math.min(500, image.width)
   const height = (width / image.width) * image.height

   return (
       <div className="d-flex flex-column align-items-center">
           <Alert variant="secondary">
               Esta página utiliza <strong>regeneración estática incremental</strong>. Se obtiene una nueva imagen cada 15 segundos 
               (después de actualizar la página) y durante ese intervalo se sirve desde el caché, optimizando así el rendimiento 
               y la experiencia del usuario.
           </Alert>
           <Image
               src={image.urls.raw}
               width={width}
               height={height}
               alt={image.description || "Imagen de nuestra colección"}
               className="rounded shadow mw-100 h-100"
           />
           <span className="mt-2">
               Por <Link href={"/users/" + image.user.username} className="text-decoration-none">{image.user.username}</Link>
           </span>
       </div>
   )
}