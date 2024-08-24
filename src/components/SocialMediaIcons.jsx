const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/shreyaan-saha-30b3321ba/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677384/Portfolio/linkedin_yq19rz.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/SahaShreyaan"
        target="_blank"
        rel="noreferrer"
      >
        <img class="w-7 h-7" alt="twitter-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1724488557/Portfolio/X_logo_2023__white_gpfb56.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ShreyaanSaha"
        target="_blank"
        rel="noreferrer"
      >
        <img class="w-7 h-7" alt="github-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1724486422/Portfolio/pngfind.com-github-logo-png-1766942_cvonbn.png" />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677384/Portfolio/facebook_i5oafr.png" />
      </a> */}
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677384/Portfolio/instagram_an0u8z.png" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
