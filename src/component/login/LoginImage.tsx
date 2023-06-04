export function LoginImage({ image, styles }: Image) {
  return <img src={image} alt={"background"} className={styles} />;
}

interface Image {
  image: string;
  styles: string;
}