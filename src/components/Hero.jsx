import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex  justify-centre items-centre flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://tailwindcss.com/docs/flex-direction#column")
          }
          className="black_btn"
        >
          Masoom
        </button>
      </nav>
      <h1 className="head_text ">
        Summarize Article with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">openAI GPT-4 </span>
      </h1>
      <h2 className="text-center text-lg mt-6 text-slate-500 italic ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
        ullam dignissimos. <br /> Aut, provident unde velit deleniti porro id quo nemo
        aspernatur sint, quod tenetur esse similique <br /> dolorem magni eius.
      </h2>
    </header>
  );
};

export default Hero;
