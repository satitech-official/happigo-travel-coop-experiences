'use client';
import { CalendarDays, Mountain, PartyPopper, UsersRound } from 'lucide-react';
import RouteReveal from './route-reveal';
import { SectionTitle } from './reveal';

const steps = [{ icon: UsersRound, label: 'Connect', text: 'Tell us who is travelling and what matters.' }, { icon: CalendarDays, label: 'Plan', text: 'We shape the right rhythm, route and details.' }, { icon: Mountain, label: 'Experience', text: 'Your group shares moments made for remembering.' }, { icon: PartyPopper, label: 'Celebrate', text: 'Leave with stories that keep working long after.' }];
export default function Journey() { return <section className="journey section"><div className="content-wrap"><SectionTitle eyebrow="ONE SHARED JOURNEY" title={<>Our journey, <i>together.</i></>} text="A simple way to make something remarkable happen." align="center"/><div className="journey-map"><RouteReveal/>{steps.map((step, index) => { const Icon = step.icon; return <article className="journey-step" key={step.label}><span className="journey-step__count">0{index + 1}</span><div className="journey-step__icon"><Icon size={27} strokeWidth={1.5}/></div><h3>{step.label}</h3><p>{step.text}</p></article>; })}</div></div></section>; }
