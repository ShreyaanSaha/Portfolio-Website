const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677384/Portfolio/linkedin_yq19rz.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677385/Portfolio/twitter_a9kyhd.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677384/Portfolio/facebook_i5oafr.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677384/Portfolio/instagram_an0u8z.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
