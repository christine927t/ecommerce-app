import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FooterLinksMobile from './linksMobile';
import FooterLinksDesktop from './linksDesktop';

export default function Footer() {
    return (
        <footer className="bg-[#282828] text-white pt-14 pb-14 md:px-18">
            <div className="flex flex-col md:flex-row">
                <div className="text-center md:text-left mb-16 w-1/3">
                    <p className="text-[32px] tracking-[4px] md:leading-10">AWESOME HUMANS</p>
                    <p className="text-[13px] tracking-[5px]">#WEARFIGS</p>
                    <div className="flex items-center justify-center md:justify-start gap-8 mt-6">
                        <InstagramIcon sx={{fill: '#929292'}} />
                        <YouTubeIcon sx={{fill: '#929292'}}/>
                        <PinterestIcon sx={{fill: '#929292'}}/>
                    </div>
                </div>
                <FooterLinksMobile className="md:hidden" />
                <FooterLinksDesktop className="hidden md:flex flex-wrap w-2/3" />
            </div>

            <div className='px-4 pt-12 flex flex-col gap-6 items-center justify-center'>
                <div className="flex flex-col gap-3 items-center justify-center text-[#a3a3a3]">
                    <p className="text-[13px]">© 2026 FIGS, INC. ALL RIGHTS RESERVED</p>
                    <p className="text-[11px]">Terms of Use * Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}