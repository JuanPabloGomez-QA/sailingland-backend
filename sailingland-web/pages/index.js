import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <Head>
        <title>SailingLand</title>
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-blue-600">Bienvenido a SailingLand 🚤</h1>
        <p className="mt-4 text-lg text-gray-700">Este es el inicio de tu nueva plataforma.</p>
      </main>
    </div>
  )
}
