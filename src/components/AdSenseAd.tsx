import React, { useEffect } from 'react';

interface AdSenseAdProps {
    adSlot: string;
    adFormat?: string;
    fullWidthResponsive?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    style,
    className = ''
}) => {
    useEffect(() => {
        try {
            // Check if adsbygoogle is available
            if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []);

    return (
        <div className={`adsense-container ${className}`}>
            <ins
                className="adsbygoogle"
                style={{
                    display: 'block',
                    ...style
                }}
                data-ad-client="ca-pub-3077203436679622"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
};

export default AdSenseAd;