import Container from "../components/Container"
import metadata from "../data/metadata";
import RecentPosts from "../components/RecentPosts";

export default function Home() {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          {/* <Image
            src={`/home.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          /> */}
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            {/* {metadata.title} */}
          </span>
        </div>
        <RecentPosts />
      </div>
    </Container>
  );
};