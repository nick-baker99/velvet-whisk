


type Props = {
  title: string,
  subTitle?: string,
  bgImage?: string,
  bgPosition?: string
};

const HeroBanner = ({ title, subTitle = '', bgImage = '', bgPosition = '' }: Props) => {
  let styles = {};
  if (bgImage) styles = { backgroundImage: `url(${bgImage})` };
  if (bgPosition) styles = { ...styles, backgroundPosition: bgPosition };

  return (
    <section className="h-[400px] bg-cover bg-center relative text-center" style={styles}>
      <div className="w-full h-full bg-black opacity-60 absolute z-1"></div>
      <article className="max-w-2xl lg:max-w-7xl h-full flex flex-col items-center justify-center gap-7 mx-auto px-6 relative z-2">
        <h1 className="text-4xl lg:text-5xl text-white font-semibold">{title}</h1>
        <h2 className="text-lg lg:text-2xl max-w-4xl text-white font-lg">{subTitle}</h2>
      </article>
    </section>
  )
}

export default HeroBanner