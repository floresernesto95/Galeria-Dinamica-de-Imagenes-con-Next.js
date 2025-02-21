import { Alert } from "@/components/bootstrap";

export default function Home() {
  return (
    <div>
      <Alert variant='secondary'>
        <p>
          Bienvenido a mi proyecto innovador que demuestra las capacidades avanzadas de <strong>Next.js</strong>. Explora las siguientes características de última generación:
        </p>
        <ul>
          <li>Renderizado del lado del servidor (SSR) estático y dinámico, optimizado para un rendimiento excepcional</li>
          <li>Regeneración estática incremental (ISR) para mantener tu contenido siempre actualizado</li>
          <li>Renderizado del lado del cliente con interactividad fluida y moderna</li>
          <li>Sistema avanzado de manejadores de rutas para APIs robustas y eficientes</li>
          <li>API de metadatos integrada para un SEO optimizado</li>
          <li>Y muchas más funcionalidades de vanguardia</li>
        </ul>
        <p className='mb-0'>
          Descubre cómo cada página implementa diferentes estrategias de <strong>obtención y almacenamiento en caché de datos</strong>. Te invito a explorar las diferentes secciones a través de la barra de navegación para experimentar cada funcionalidad en acción.
        </p>
      </Alert>
      <Alert variant='secondary'>
       <p className='mb-0'>Para garantizar el mejor rendimiento, ten en cuenta que el sistema tiene un límite de 50 solicitudes por hora. Te recomendamos gestionar estas solicitudes de manera eficiente para optimizar tu experiencia de desarrollo.</p>
     </Alert>
    </div>
  )
}