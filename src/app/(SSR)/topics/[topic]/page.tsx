import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import styles from "./TopicPage.module.css"
import { InferGetStaticPropsType } from "next"
import { Alert } from "@/components/bootstrap"
import { Metadata } from "next"

// export const revalidate = 0

// export const dynamicParams = false

interface PageProps {
    params: InferGetStaticPropsType<typeof generateStaticParams>;
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
    return {
        title: "Categorías"
    }
}

export async function generateStaticParams() {
    return ["health", "fitness", "coding"].map(topic => ({ topic }))
}

export default async function Page({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const images: UnsplashImage[] = await response.json()

    const topicTranslations: { [key: string]: string } = {
        'health': 'Salud',
        'fitness': 'Bienestar',
        'coding': 'Desarrollo'
    }

    return (
        <div>
            <Alert variant="secondary">
                Esta página utiliza <strong>generateStaticParams</strong> para renderizar y almacenar en caché páginas estáticas durante el proceso de compilación, incluso cuando la URL tiene un parámetro dinámico.
                Las páginas no incluidas en generateStaticParams se generarán en el primer acceso y luego se almacenarán en caché para solicitudes posteriores (esta característica puede desactivarse).
            </Alert>

            <h1>{topicTranslations[topic] || topic}</h1>
            {
                images.map(image => (
                    <Image
                        src={image.urls.raw}
                        width={250}
                        height={250}
                        alt={image.description || "Imagen de Unsplash"}
                        key={image.urls.raw}
                        className={styles.image}
                    />
                ))
            }
        </div>
    )
}