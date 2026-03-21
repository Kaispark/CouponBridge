import './HeroSection.css'
import './index.css'
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function HeroSection(){
    return(
        <>
            <div className="hero">
            
               <div className="hero-container">
                    <div className="hero-insight ">Trusted by 1000000+ customers</div>
                    <div className="hero-title heading">
                        The Marketplace for Verified Discount Coupons
                    </div>
                    <p className="hero-desc-1">
                        Buy and sell authenticated coupon codes from your favorite brands.
                    </p>
                    <p className="hero-desc-2">
                        Every coupon is verified before purchase.
                    </p>
                    <div className="hero-navigate">
                        <div className="browse">Browse Coupons <KeyboardDoubleArrowRightIcon/></div>
                        <Button variant="contained" className="selling-btn">Start Selling</Button>
                    </div>
                </div>

            </div>
            <div className="hero-curtain"></div>
            <div className="main">
                <div className="hero-container">
                    <div className="hero-insight ">Trusted by 1000000+ customers</div>
                    <div className="hero-title heading">
                        The Marketplace for Verified Discount Coupons
                    </div>
                    <p className="hero-desc-1">
                        Buy and sell authenticated coupon codes from your favorite brands.
                    </p>
                    <p className="hero-desc-2">
                        Every coupon is verified before purchase.
                    </p>
                    <div className="hero-navigate">
                        <div className="browse">Browse Coupons <KeyboardDoubleArrowRightIcon/></div>
                        <Button variant="contained" className="selling-btn">Start Selling</Button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default HeroSection;