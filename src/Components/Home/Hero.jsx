import reactImag from "/images/react.png";
import nextimg from "/images/nextjs.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="Hero block overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 pt-10 mt-1 ">
      <div className="banner bg-[url('/images/hr.png')] dark:bg-[url('/images/hr2.png')] lg:flex items-center justify-center">
        <div className="w-full pl-[5vw] text-light space-y-3">
          <main className="hero-container sm:flex">
            <p>We're 👋 Provide</p>
            <section className="animation">
              <div className="first">
                <div>Web services</div>
              </div>
              <div className="second">
                <div>SEO SERVICES</div>
              </div>
              <div className="third">
                <div>Courses</div>
              </div>
            </section>
          </main>
          <p>
            Welcome to Star Classes, where your aspirations take flight through
            the power of knowledge. Our comprehensive courses, expert
            instructors, and vibrant community provide the perfect platform for
            lifelong learning. Whether you're looking to advance in your career,
            pick up a new hobby, or pursue a passion, we're here to support you
            every step of the way. Join us and unlock your potential!
          </p>
          <Button text={"Hire Me"} />
        </div>
        <div className="w-full relative mt-10 lg:mt-0">
          <div className="blob h-[500px]">
            <img
              className="mx-auto h-full w-full object-cover"
              src="/images/woman.png"
              alt="Banner"
            />
          </div>
          <img className="absolute top-0 w-20 left-20" src={nextimg} alt="" />
          <img
            className="absolute right-20 top-0 w-20"
            src={reactImag}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
