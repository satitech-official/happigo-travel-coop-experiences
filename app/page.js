import Hero from '../components/hero';
import SiteShell from '../components/site-shell';
import CoopEvents from '../components/coop-events';
import Journey from '../components/journey';
import Attractions from '../components/attractions';
import ExperienceGrid from '../components/experience-grid';
import Gallery from '../components/gallery';
import Trust from '../components/trust';
import AboutLaxmi from '../components/about';
import VenusSection from '../components/venus-section';
import Testimonials from '../components/testimonials';
import Faq from '../components/faq';
import ContactSection from '../components/contact-section';

export default function Home() { return <SiteShell><Hero/><CoopEvents compact/><Journey/><Attractions/><ExperienceGrid/><Gallery limit/><Trust/><AboutLaxmi/><Testimonials/><Faq/><ContactSection/><VenusSection/></SiteShell>; }
