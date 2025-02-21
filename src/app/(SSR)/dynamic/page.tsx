import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next";
import { Alert } from "@/components/bootstrap"

export const metadata: Metadata = {
    title: "Obtención Dinámica",
};

export const revalidate = 0

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
        {
            // cache: "no-cache" // También podría ser "no-store"
            // next: { revalidate: 0 } // Esta es otra opción
        }
    )
    const image: UnsplashImage = await response.json()

    const width = Math.min(500, image.width)
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert variant='secondary'>
                Esta página implementa un sistema de <strong>obtención dinámica de datos</strong>. Cada vez que actualices la página,
                se mostrará una nueva imagen aleatoria de nuestra colección, brindando una experiencia única en cada visita.
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