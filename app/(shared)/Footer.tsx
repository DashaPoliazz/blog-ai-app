import React from "react";

function Footer() {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* First column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            hic reiciendis provident exercitationem impedit aperiam quae
            obcaecati similique totam dolor nihil repellat, dolore odit beatae.
            Excepturi error sint in minima!
          </p>
          <p>@ Blog of the Future All Right Reserved.</p>
        </div>
        {/* Second column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Another random latin phrase</p>
        </div>
        {/* Third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Some random link again</p>
          <p>+380 123 456 79</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
