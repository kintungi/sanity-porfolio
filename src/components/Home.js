import image from "../hero.jpg"

export default function About() {
    return (
        <main>
          <img src={image} alt="a bunch of leaves" className="absolute object-cover w-full h-full" />
          <section className=" relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
              <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                  Hello. I'm Francis
              </h1>
          </section>
        </main>
    )
}