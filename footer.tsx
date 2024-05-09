import React from 'react';
import './footer.css';

const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb_footer section__padding">
              <div className="sb_footer-links">
                <div className="sb__footer-links-div">
                  <h4>Resources</h4>
                    <a href="/resource">
                        <p>resource center</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="career">
                        <p>career</p>
                    </a>
                    <a href="/contact">
                        <p>contact</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Coming soon on</h4>
                    <div className="socialmedia">                     
                        <a href="https://twitter.com/902youth?lang=en">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="https://www.instagram.com/902youth/?hl=en">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Footer;