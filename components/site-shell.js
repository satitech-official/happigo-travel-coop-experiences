import Navigation from './navigation';
import Footer from './footer';
export default function SiteShell({ children }) { return <><Navigation/><main>{children}</main><Footer/></>; }
