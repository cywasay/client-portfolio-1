import ContactHero from './_components/ContactHero';
import ContactCards from './_components/ContactCards';
import ContactForm from './_components/ContactForm';
import SocialGrid from './_components/SocialGrid';
import ContactCta from './_components/ContactCta';

export default function Contact() {
  return (
    <main id="top" className="interiorPage">
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <SocialGrid />
      <ContactCta />
    </main>
  );
}
