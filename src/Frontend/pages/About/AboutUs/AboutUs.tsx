import AboutImg1 from "../../../../assets/about-page-img1.png";
import AboutImg2 from "../../../../assets/about-page-img2.png";
import AboutImg3 from "../../../../assets/about-page-img3.png";

function AboutUs() {
  return (
    <section className="container">
      <article className="grid grid-cols-2 gap-10 items-center py-8">
        <article className="grid grid-cols-2 gap-8">
          <img className="col-span-2" src={AboutImg1} alt="" />
          <img src={AboutImg2} alt="" />
          <img src={AboutImg3} alt="" />
        </article>
        <aside>
          <h1>About Us</h1>
          <h2>24/7 Cyber Security Attention Center </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            dolore optio veniam! Animi, id. Facilis dolorum, assumenda commodi
            soluta nisi, molestiae quidem, nihil aliquam totam perferendis
            similique molestias dolores. Tenetur dolores ullam maiores qui
            dolorem quibusdam delectus minus provident temporibus.
          </p>
          <ul className="grid grid-cols-2">
            <li>Malware Detection Removal</li>
            <li>Content Delivery Network</li>
            <li>Security Management</li>
            <li>SIEM Threat Detection</li>
            <li>Cloud Security</li>
            <li>Cyber Security</li>
            <li>Identifying Threats</li>
            <li>Server Security</li>
          </ul>
        </aside>
      </article>
    </section>
  );
}

export default AboutUs;
