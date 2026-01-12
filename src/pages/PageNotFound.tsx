import { Link } from "react-router";
import Header from "../components/Header";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-6 flex flex-col justify-center items-center align-center">
        <h1 className="text-9xl text-wood-700">404</h1>
        <h2 className="text-4xl text-wood-700 font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg text-wood-700 mb-8">The page you are looking for does not exist. It might have been moved or deleted.</p>
        <Link to="/" className="bg-burgundy-500 hover:bg-burgundy-600 text-white text-lg font-semibold px-6 py-3 transition-colors duration-300">Back to Home</Link>
      </main>
    </>
  )
}

export default PageNotFound