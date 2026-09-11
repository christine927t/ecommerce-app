import { FOOTER_LINKS_DATA } from '/src/constants/footerLinks.ts'

type FooterLinksDesktopProps = {
    className?: string;
};

console.log(FOOTER_LINKS_DATA)

export default function FooterLinksDesktop({ className }: FooterLinksDesktopProps){
    return (
        <div className={className}>
            {FOOTER_LINKS_DATA.filter(link => link.details).map((link, index) => {
                return (
                    <div key={'heading-container' + index} className="ms-8">
                        <p key={'heading' + link} className="text-[11px] font-bold mb-6">{link.heading}</p>
                        {link.details ? (
                            <div>
                                {link.details?.map((detail, detailIndex) => {
                                    return (
                                        <p key={'detail' + detailIndex} className={`text-[11px] font-extralight py-1 ${detailIndex === link.details.length - 1 ? 'pb-6': ''}`}>{detail}</p>
                                    )
                                })} 
                            </div>
                        ) : <></>
                        }
                    </div>

                )
            })}
        </div>
    )
}