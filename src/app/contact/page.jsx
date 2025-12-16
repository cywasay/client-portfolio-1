import ContactHero from './_components/ContactHero';
import ContactCards from './_components/ContactCards';
import ContactForm from './_components/ContactForm';
import SocialGrid from './_components/SocialGrid';
import ContactCta from './_components/ContactCta';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <SocialGrid />
      <ContactCta />
    </main>
  );
}