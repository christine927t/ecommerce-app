import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
    return (
        <footer className="bg-[#282828] text-white pt-14">
            <div className="text-center">
                <p className="text-[32px]">AWESOME HUMANS</p>
                <p className="text-[13px]">#WEARFIGS</p>
                <div className="flex items-center justify-center gap-5 mt-6">
                    <InstagramIcon sx={{fill: '#929292'}} />
                    <YouTubeIcon sx={{fill: '#929292'}}/>
                    <PinterestIcon sx={{fill: '#929292'}}/>
                </div>
            </div>

        </footer>
    )
}