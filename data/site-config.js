export const SITE_URL = 'https://satitech-official.github.io/happigo-travel-coop-experiences';

export const VENUS_WEBSITE_URL = 'https://satitech-official.github.io/venus-event-decor-premium-website/';

export const venus = {
  name: 'Venus Event & Suppliers',
  parent: 'Laxmi Ventures',
  tagline: 'We Create U Celebrate',
  description: 'A production house for all types of events, bringing polished execution and reliable event supplies to every celebration.',
  location: 'Indore, Madhya Pradesh',
  phones: ['8269371546', '7898200410', '9109304378'],
  email: 'venusevent1623@gmail.com',
  instagram: 'https://www.instagram.com/venusevent_1',
  instagramLabel: '@venusevent_1',
  facebookLabel: 'Venus Event & Suppliers',
};

export const brand = {
  name: 'Happigo',
  parent: 'Laxmi Ventures',
  tagline: 'Travel • Explore • Be Happy',
  location: 'Indore, Madhya Pradesh',
  description: 'Curated group journeys and cooperative events, thoughtfully brought together.',
};

export const contact = {
  phones: ['7898200410', '8269371546', '9109304378'],
  email: 'happigo.012@gmail.com',
  instagram: 'https://www.instagram.com/happigo.01',
  facebook: 'https://www.facebook.com/happigo.01',
  whatsappMessage: 'Hello Happigo, I would like to discuss a curated group experience or co-op event.',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Experiences', href: '/experiences', children: ['Nature Escapes', 'Cultural Trails', 'Adventure'] },
  { label: 'Co-op Events', href: '/co-op-events', children: ['Offsites', 'Member Retreats', 'Group Tours'] },
  { label: 'Destinations', href: '/destinations' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const coOpEvents = [
  { icon: 'BriefcaseBusiness', title: 'Corporate Offsites', text: 'A change of scenery for sharper collaboration and shared momentum.' },
  { icon: 'Landmark', title: 'Cooperative Meetings', text: 'Well-organised gatherings that honour people, purpose and participation.' },
  { icon: 'TentTree', title: 'Member Retreats', text: 'Unhurried escapes designed to renew connection across your community.' },
  { icon: 'Sparkles', title: 'Annual Days & Celebrations', text: 'Meaningful milestone moments, layered with warmth and personality.' },
  { icon: 'GraduationCap', title: 'Training & Workshops', text: 'Focused settings for learning, reflection and practical progress.' },
  { icon: 'Map', title: 'Group Tours', text: 'Easy-going, detail-led journeys made better by travelling together.' },
  { icon: 'UsersRound', title: 'Team-Building Experiences', text: 'Playful shared challenges that bring every voice into the journey.' },
];

export const experiences = [
  { id: 1, title: 'Himalayan Retreats', region: 'Uttarakhand & Himachal', type: 'Nature Escapes', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85', note: 'Cool air, close circles, vast horizons.' },
  { id: 2, title: 'Royal Heritage Trails', region: 'Rajasthan', type: 'Heritage', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=85', note: 'Stories in sandstone and sunset.' },
  { id: 3, title: 'Kerala Backwaters & Beyond', region: 'Kerala', type: 'Cultural Trails', image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1400&q=85', note: 'Slow water, generous tables, soulful days.' },
  { id: 4, title: 'Hidden Northeast Getaways', region: 'Meghalaya & Sikkim', type: 'Adventure', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85', note: 'A little wild, beautifully shared.' },
  { id: 5, title: 'Spiritual Journeys', region: 'Across India', type: 'Spiritual Journeys', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85', note: 'Make room for stillness and wonder.' },
  { id: 6, title: 'Community Celebration Trails', region: 'Madhya Pradesh', type: 'Community Events', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85', note: 'The best way to discover a place: together.' },
];

export const destinations = [
  { name: 'Udaipur', region: 'Rajasthan', image: experiences[1].image },
  { name: 'Munnar', region: 'Kerala', image: experiences[2].image },
  { name: 'Tawang', region: 'Arunachal Pradesh', image: experiences[3].image },
  { name: 'Rishikesh', region: 'Uttarakhand', image: experiences[0].image },
];

export const attractions = [
  { title: 'The Heritage Table', kicker: 'Culture, shared', text: 'Private evenings that turn local food, music and old stories into a shared memory.', image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Wild, but well planned', kicker: 'Nature, together', text: 'Fresh air, slow trails and just enough adventure to bring the whole group alive.', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=85' },
  { title: 'The celebration after', kicker: 'People, at the centre', text: 'Unscripted joy, beautiful tables and moments that deserve a proper toast.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85' },
];

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85', alt: 'Friends laughing together outdoors', caption: 'A good beginning: everyone arrives curious.' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85', alt: 'Team attending a cooperative meeting', caption: 'Big ideas, open notebooks, one table.' },
  { src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85', alt: 'Group team building activity', caption: 'Shared challenge, shared applause.' },
  { src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85', alt: 'People on a mountain retreat', caption: 'We brought the team. The mountains did the rest.' },
  { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85', alt: 'Dinner and celebration gathering', caption: 'Long tables, longer conversations.' },
  { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85', alt: 'Friends celebrating together', caption: 'The kind of finish everyone remembers.' },
];

export const statistics = [
  { value: 250, suffix: '+', label: 'Cooperative Groups' },
  { value: 1200, suffix: '+', label: 'Events Organized' },
  { value: 35, suffix: '+', label: 'Destinations Explored' },
  { value: 98, suffix: '%', label: 'Happy Travellers' },
];

export const testimonials = [
  { quote: 'Our retreat felt completely effortless. Every detail gave our members more time to actually be together.', name: 'Community Partner', type: 'Member Retreat', place: 'Placeholder testimonial' },
  { quote: 'A thoughtful balance of planning, play and polished execution. The group came home genuinely energised.', name: 'Corporate Team', type: 'Offsite Experience', place: 'Placeholder testimonial' },
  { quote: 'They understood what our annual gathering needed to feel like: personal, warm and very well managed.', name: 'Cooperative Group', type: 'Annual Celebration', place: 'Placeholder testimonial' },
];

export const faqs = [
  ['What types of cooperative events do you organize?', 'We plan cooperative meetings, retreats, annual days, workshops, group tours and team-building experiences with end-to-end coordination.'],
  ['Can you manage travel and event arrangements together?', 'Yes. Happigo can bring travel, stays, experiences, schedules and event moments into one considered plan.'],
  ['Do you organize corporate and group tours?', 'Yes. We design group travel for teams, member communities, institutions and family groups.'],
  ['Can events be customized according to budget?', 'Absolutely. We begin with your priorities, participant count and budget to shape the right format.'],
  ['Which locations do you currently serve?', 'We are based in Indore and create experiences across Madhya Pradesh and destinations throughout India.'],
  ['How can we request a proposal?', 'Share a few details through the enquiry form, call us, or send a WhatsApp message. We will follow up with the next steps.'],
  ['Does Happigo coordinate production through Venus Events?', 'Where relevant, Happigo can coordinate with its sister concern, Venus Event & Suppliers, for event-production and supply needs.'],
];
