import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import DonationProcess from "@/components/about/DonationProcess";

const AboutPage = () => {
  return (
    <div>
      <BannerBreadcrumb
        items={[
          {
            label: "About",
          },
        ]}
        title="About Us"
        image="/assets/blood-donor-bg.png"
      />
      <DonationProcess />
      about
    </div>
  );
};

export default AboutPage;