import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next";
import { Alert } from "@/components/bootstrap"

export const metadata: Metadata = {
    title: "Obtención Estática",
};

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
    const image: UnsplashImage = await response.json()

    const width = Math.min(500, image.width)
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert variant='secondary'>
                Esta página utiliza una <strong>estrategia de obtención y almacenamiento en caché durante el tiempo de compilación</strong>. Como resultado, aunque la API de Unsplash siempre devuelve una imagen diferente, verás la misma imagen al actualizar la página hasta que el proyecto sea recompilado. Esto demuestra el poder del almacenamiento en caché estático de Next.js.
            </Alert>
            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description || "An image from Unsplash"}
                className="rounded shadow mw-100 h-100"
            />
            <span className="mt-2">
                Por <Link href={"/users/" + image.user.username} className="text-decoration-none">{image.user.username}</Link>
            </span>
        </div>
    )
}