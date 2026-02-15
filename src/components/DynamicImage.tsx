import useImage from '../hooks/useImage';

type Props = {
  fileName: string,
  alt: string,
  className: string
}

const Image = ({ fileName, alt, className, ...rest }: Props) => {
  const { loading, error, image } = useImage(fileName)

  if (error) return <p>{alt}</p>

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <img
          className={`Image${
            className
              ? className.padStart(className.length + 1)
              : ''
          }`}
          src={image}
          alt={alt}
          {...rest}
        />
      )}
    </>
  )
}

export default Image