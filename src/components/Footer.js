import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="max-w-screen bottom-0 mt-[80px] flex items-center px-14 h-[100px] z-10 bg-darkblue place-content-between">
      <div>
        <p class="text-white font-bold text-sm md:text-base">
          Copyright @ 2022
        </p>
      </div>
      <div>
        <SocialIcons color="white" />
      </div>
    </div>
  );
};

// absolute

export default Footer;
