"use client"

import { UnsplashImage } from "@/models/unsplash-image"
import { Form, Button, Spinner, Alert } from "react-bootstrap"
import { FormEvent, useState } from "react"
import styles from "./SearchPage.module.css"
import Image from "next/image"

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(null)
    const [searchResultsLoading, setSearchResultsLoading] = useState(false)
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const query = formData.get("query")?.toString().trim()

        if (query) {
            try {
                setSearchResults(null)
                setSearchResultsLoadingIsError(false)
                setSearchResultsLoading(true)
                const response = await fetch("/api/search?query=" + query)
                const images: UnsplashImage[] = await response.json()
                setSearchResults(images)
            } catch (error) {
                console.error(error)
                setSearchResultsLoadingIsError(true)
            } finally {
                setSearchResultsLoading(false)
            }
        }
    }

    return (
        <div>
            <Alert variant="secondary">
                Esta página obtiene datos del <strong>lado del cliente</strong>. Para proteger las credenciales de la API,
                la solicitud se envía a un <strong>manejador de rutas</strong> de Next.js que se ejecuta en el servidor.
                Este manejador obtiene los datos de la API de Unsplash y los devuelve al cliente de forma segura.
            </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="search-input">
                    <Form.Label>¿Qué deseas buscar?</Form.Label>
                    <Form.Control
                        name="query"
                        placeholder="Ej: naturaleza, tecnología, ..."
                    />
                </Form.Group>
                <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
                    {searchResultsLoading ? 'Buscando...' : 'Buscar'}
                </Button>
            </Form>
            <div className="d-flex flex-column align-items-center">
                {searchResultsLoading && <Spinner animation="border" />}
                {searchResultsLoadingIsError && <p>Ha ocurrido un error. Por favor, inténtalo de nuevo.</p>}
                {searchResults?.length === 0 && <p>No se encontraron resultados. ¡Prueba con otra búsqueda!</p>}
            </div>

            {searchResults &&
                <>
                    {searchResults.map(image => (
                        <Image
                            src={image.urls.raw}
                            width={250}
                            height={250}
                            alt={image.description || "Imagen de Unsplash"}
                            key={image.urls.raw}
                            className={styles.images}
                        />
                    ))}
                </>
            }
        </div>
    )
}