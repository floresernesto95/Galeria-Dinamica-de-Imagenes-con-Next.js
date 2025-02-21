import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next";
import { Alert } from "@/components/bootstrap"

export const metadata: Metadata = {
    title: "Dynamic Fetching - Next.js",
};

export const revalidate = 0

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
        {
            // cache: "no-cache" // Could "no-store" also
            // next: { revalidate: 0 } // This can also be
        }
    )
    const image: UnsplashImage = await response.json()

    const width = Math.min(500, image.width)
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page <strong>fetches data dynamically</strong>. Every time you refresh the page, you get a new image from the Unsplash API.
            </Alert>
            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description || "An image from Unsplash"}
                className="rounded shadow mw-100 h-100"
            />
            by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
        </div>
    )
}