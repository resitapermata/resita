import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SliderApp from "../components/Slider";
import Footer from "../components/Footer";
import Helps from "../components/Helps";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* section 1 */}
      <div className="relative bg-[url('/assets/BG_1.png')] bg-[#EEBECE] bg-no-repeat bg-cover py-[67px] px-[24px] text-center sm:bg-[url('/assets/BG_Besar.png')] sm:max-w-full mx-auto">
        <h1 className="text-white text-[52px] font-bold mb-[20px] sm:text-[62px] sm:mt-[17px] sm:px-[322px]">
          WEEKEND FROM HOME
        </h1>
        <p className="text-white text-base italic mb-[267px] text-[16px] sm:text-[21px] sm:mt-[20px]">
          Stay active with a little workout.
        </p>
        <img
          className="absolute inset-x-0 bottom-[20px] w-full object-contain h-[300px] sm:mb-[155px]"
          src="/assets/lego.png"
        />
        <div className="relative sm:mt-[514px] sm:mb-[196px]">
          <Button>Lets Go</Button>
        </div>
        <></>
      </div>

      {/* section 2 */}
      <div className="relative bg-[#EEBECE] pt-[221px] pb-[38px] px-[32px] text-right">
        <img
          className="absolute top-0 right-0 w-full object-contain object-right h-[158px]"
          src="/assets/BG_2.png"
        />
        <p className="text-black text-base text-[16px] font-bolt mb-[20px] max-w-[619px] mx-auto sm:text-[21px]">
          <span className="text-[#0B24FB] font-bold">Deffinition;</span> a
          practice or exercise to test or improve one&apos;s fitness for
          athletic competition, ability, or performance to exhaust (something,
          such as a mine) by working to devise, arrange, or achieve by resolving
          difficulties. Merriam-Webster.com Dictionary.
        </p>
        <p className="text-white font-bold italic max-w-[619px] mx-auto sm:text-[21px]">
          -weekend team
        </p>
      </div>

      {/* section 3 */}
      <div className="bg-[#EEBECE] pt-[69px] pb-[30px] px-6 relative overflow-hidden">
        <div className="bg-black inset-x-0 w-full absolute bottom-0 h-1/2" />
        <img
          className="absolute top-0 left-[57] h-[89px] w-[89px]"
          src="/assets/biru.png"
        />
        <div className="relative sm:max-w-[621px] mx-auto">
          <h2 className="text-white text-[32px] font-bold mb-[30px] sm:text-center">
            Testimonial
          </h2>
          <SliderApp />
        </div>
      </div>

      {/* section 4 */}
      <div className="relative bg-black pt-[30px] pb-[33px] px-[32px] text-left sm:text-center">
        <div>
          <h2 className="text-white text-[32px] font-bold mb-[30px]">POV</h2>
          <p className="text-white text-[16px] text-base mb-[67px] max-w-[619px] mx-auto sm:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
        </div>
        <div>
          <h2 className="text-white text-[32px] font-bold mb-[30px]">
            Resource
          </h2>
          <p className="text-white text-[16px] text-base max-w-[619px] mx-auto sm:text-[18px]">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
        </div>
      </div>

      {/* section 5 */}
      <div className="bg-black pt-[30px] pb-[33px] px-[32px] text-left sm:text-center sm:bg-[url('/assets/pink.png')] sm:bg-no-repeat sm:bg-right">
        <h2 className="text-white text-[32px] font-bold mb-[30px]">
          Help & Tips
        </h2>
        <Helps />
      </div>

      {/* section 6 */}
      <div className="relative bg-black pt-[30px] pb-[33px] px-[32px] text-left sm:text-center">
        <div>
          <h2 className="text-white text-[32px] font-bold mb-[30px]">
            Youre all set.
          </h2>
          <p className="text-white text-[16px] text-base mb-[404px] max-w-[619px] mx-auto sm:text-[18px]">
            The wise man therefore always holds in these matters to this
            principle of selection.{" "}
          </p>
          <img
            className="absolute bottom-0 left-0 h-[337px] w-[253px]"
            src="/assets/BG_3.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
