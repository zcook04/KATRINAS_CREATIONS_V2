import React from 'react'
import './Footer.css'

const Footer = ({email, company}) => {



    return (
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <section className="footer-contact-us">
                        <h3>Contact Us</h3>
                        <p className="footer-contact-us-text">Have an inquiry, a special request, feedback, or just want to chat?  Send Us a message.  We will respond within 24 hours.</p>
                        <p><a href="_blank">
                            <svg className="footer-email-svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7L2 2H18L10 7Z" fill-opacity="0.3"/>
                                <path d="M18 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H18C18.5523 15 19 14.5523 19 14V2C19 1.44772 18.5523 1 18 1Z" stroke-width="2" stroke-linecap="round"/>
                                <path d="M1 2.5L10 8L19 2.5" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            {email}
                        </a></p>
                        <p className="footer-contact-us-text">Want to see what other people say about us?  Visit our <a href="https://www.katrinascreationsde.store">Etsy</a> or <a href="https://www.katrinascreationsde.store">Shopify</a> pages and follow us on social media!</p>
                        <section className="footer-social-container">
                        <svg width="34" height="34" viewBox="0 0 34 34"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1513 12.6608V14.6116H13.7233V16.9958H15.1513V24.0834H18.0866V16.9958H20.0558C20.0558 16.9958 20.2414 15.8526 20.3306 14.6017H18.0979V12.9725C18.0979 12.7274 18.4181 12.4002 18.7354 12.4002H20.3334V9.91675H18.1588C15.079 9.91675 15.1513 12.3038 15.1513 12.6608Z" />
                            <path d="M8.49998 5.66659C7.74853 5.66659 7.02786 5.9651 6.49651 6.49645C5.96516 7.0278 5.66665 7.74847 5.66665 8.49992V25.4999C5.66665 26.2514 5.96516 26.972 6.49651 27.5034C7.02786 28.0347 7.74853 28.3333 8.49998 28.3333H25.5C26.2514 28.3333 26.9721 28.0347 27.5034 27.5034C28.0348 26.972 28.3333 26.2514 28.3333 25.4999V8.49992C28.3333 7.74847 28.0348 7.0278 27.5034 6.49645C26.9721 5.9651 26.2514 5.66659 25.5 5.66659H8.49998ZM8.49998 2.83325H25.5C27.0029 2.83325 28.4442 3.43027 29.5069 4.49298C30.5696 5.55569 31.1666 6.99703 31.1666 8.49992V25.4999C31.1666 27.0028 30.5696 28.4442 29.5069 29.5069C28.4442 30.5696 27.0029 31.1666 25.5 31.1666H8.49998C6.99709 31.1666 5.55575 30.5696 4.49304 29.5069C3.43034 28.4442 2.83331 27.0028 2.83331 25.4999V8.49992C2.83331 6.99703 3.43034 5.55569 4.49304 4.49298C5.55575 3.43027 6.99709 2.83325 8.49998 2.83325V2.83325Z" />
                        </svg>
                        <svg width="35" height="34" viewBox="0 0 35 34"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5833 18.6008V23.8382H21.5474V18.9507C21.5474 17.7239 21.1082 16.8866 20.0089 16.8866C19.1702 16.8866 18.6702 17.4505 18.4506 17.9973C18.3712 18.1928 18.35 18.4648 18.35 18.7368V23.8382H15.3127C15.3127 23.8382 15.3537 15.562 15.3127 14.705H18.35V15.9984L18.3302 16.0281H18.35V15.9998C18.7537 15.3765 19.4734 14.4896 21.087 14.4896C23.0845 14.4896 24.5833 15.7958 24.5833 18.6008V18.6008ZM12.1351 10.3005C11.0967 10.3005 10.4167 10.9834 10.4167 11.8787C10.4167 12.757 11.0768 13.4583 12.0954 13.4583H12.1152C13.1749 13.4583 13.8337 12.7556 13.8337 11.8787C13.8138 10.9834 13.1749 10.3005 12.1351 10.3005ZM10.5966 23.8382H13.6339V14.705H10.5966V23.8382V23.8382Z" />
                                <path d="M9.00001 5.66659C8.24856 5.66659 7.52789 5.9651 6.99654 6.49645C6.46519 7.0278 6.16668 7.74847 6.16668 8.49992V25.4999C6.16668 26.2514 6.46519 26.972 6.99654 27.5034C7.52789 28.0347 8.24856 28.3333 9.00001 28.3333H26C26.7515 28.3333 27.4721 28.0347 28.0035 27.5034C28.5348 26.972 28.8333 26.2514 28.8333 25.4999V8.49992C28.8333 7.74847 28.5348 7.0278 28.0035 6.49645C27.4721 5.9651 26.7515 5.66659 26 5.66659H9.00001ZM9.00001 2.83325H26C27.5029 2.83325 28.9442 3.43027 30.0069 4.49298C31.0697 5.55569 31.6667 6.99703 31.6667 8.49992V25.4999C31.6667 27.0028 31.0697 28.4442 30.0069 29.5069C28.9442 30.5696 27.5029 31.1666 26 31.1666H9.00001C7.49712 31.1666 6.05578 30.5696 4.99307 29.5069C3.93037 28.4442 3.33334 27.0028 3.33334 25.4999V8.49992C3.33334 6.99703 3.93037 5.55569 4.99307 4.49298C6.05578 3.43027 7.49712 2.83325 9.00001 2.83325V2.83325Z" />
                            </svg>
                            <svg width="34" height="34" viewBox="0 0 34 34"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6908 2.83325H11.2583C9.02439 2.83588 6.88279 3.72454 5.30334 5.30425C3.72389 6.88397 2.83559 9.02572 2.83334 11.2596L2.83334 22.6921C2.83597 24.926 3.72463 27.0675 5.30434 28.647C6.88406 30.2265 9.02581 31.1148 11.2597 31.117H22.6922C24.926 31.1144 27.0676 30.2257 28.6471 28.646C30.2265 27.0663 31.1148 24.9245 31.1171 22.6907V11.2582C31.1145 9.0243 30.2258 6.8827 28.6461 5.30325C27.0664 3.7238 24.9246 2.8355 22.6908 2.83325V2.83325ZM28.2724 22.6907C28.2724 23.4237 28.1281 24.1495 27.8475 24.8267C27.567 25.5039 27.1559 26.1192 26.6376 26.6375C26.1193 27.1558 25.504 27.567 24.8268 27.8475C24.1496 28.128 23.4238 28.2723 22.6908 28.2723H11.2583C9.77816 28.272 8.3588 27.6837 7.31234 26.637C6.26588 25.5903 5.67801 24.1708 5.67801 22.6907V11.2582C5.67839 9.77806 6.26662 8.35871 7.31334 7.31225C8.36007 6.26579 9.77957 5.67792 11.2597 5.67792H22.6922C24.1723 5.67829 25.5916 6.26653 26.6381 7.31325C27.6846 8.35998 28.2724 9.77948 28.2724 11.2596V22.6921V22.6907Z" />
                                <path d="M16.9745 9.66016C15.0357 9.66315 13.1772 10.4348 11.8064 11.8058C10.4356 13.1769 9.6643 15.0356 9.66168 16.9744C9.66393 18.9137 10.4352 20.773 11.8064 22.1444C13.1775 23.5158 15.0366 24.2875 16.9759 24.2901C18.9155 24.2878 20.7749 23.5163 22.1464 22.1449C23.5179 20.7734 24.2893 18.914 24.2916 16.9744C24.2886 15.0351 23.5166 13.1762 22.1449 11.8053C20.7732 10.4344 18.9138 9.66345 16.9745 9.66157V9.66016ZM16.9745 21.4454C15.7891 21.4454 14.6523 20.9745 13.814 20.1363C12.9758 19.2981 12.5049 18.1612 12.5049 16.9758C12.5049 15.7904 12.9758 14.6536 13.814 13.8154C14.6523 12.9771 15.7891 12.5062 16.9745 12.5062C18.1599 12.5062 19.2968 12.9771 20.135 13.8154C20.9732 14.6536 21.4441 15.7904 21.4441 16.9758C21.4441 18.1612 20.9732 19.2981 20.135 20.1363C19.2968 20.9745 18.1599 21.4454 16.9745 21.4454V21.4454Z" />
                                <path d="M24.3044 11.468C25.2722 11.468 26.0568 10.6834 26.0568 9.71555C26.0568 8.74772 25.2722 7.96313 24.3044 7.96313C23.3365 7.96313 22.5519 8.74772 22.5519 9.71555C22.5519 10.6834 23.3365 11.468 24.3044 11.468Z" />
                            </svg>
                            <svg width="35" height="34" viewBox="0 0 35 34"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5833 12.6748C24.062 12.9015 23.5024 13.0574 22.9145 13.1254C23.5152 12.7712 23.9742 12.2102 24.1923 11.5429C23.6199 11.8765 22.9954 12.1112 22.345 12.2371C22.0714 11.9503 21.7423 11.7223 21.3776 11.5669C21.013 11.4115 20.6206 11.332 20.2242 11.3333C18.6192 11.3333 17.3187 12.6154 17.3187 14.1949C17.3187 14.4188 17.3442 14.6369 17.3937 14.8466C16.2425 14.7919 15.1152 14.4979 14.0839 13.9832C13.0526 13.4685 12.1399 12.7445 11.4041 11.8574C11.1456 12.2925 11.0095 12.7893 11.0102 13.2954C11.0102 14.287 11.5245 15.1653 12.3037 15.6768C11.8425 15.6623 11.3911 15.5395 10.9862 15.3183V15.3538C10.9905 16.0188 11.2253 16.6618 11.6505 17.1733C12.0756 17.6847 12.6649 18.033 13.318 18.1588C12.8892 18.2721 12.4406 18.2886 12.0047 18.2069C12.1948 18.7791 12.5582 19.2779 13.0446 19.634C13.531 19.9902 14.1163 20.1861 14.7191 20.1945C13.6849 20.9915 12.4151 21.422 11.1094 21.4185C10.8757 21.4185 10.6447 21.4043 10.4167 21.3788C11.749 22.2222 13.2939 22.6688 14.8707 22.6666C20.2172 22.6666 23.1397 18.3061 23.1397 14.5236L23.1298 14.1524C23.6997 13.7519 24.1922 13.2513 24.5833 12.6748V12.6748Z" />
                                <path d="M9.00001 5.66659C8.24856 5.66659 7.52789 5.9651 6.99654 6.49645C6.46519 7.0278 6.16668 7.74847 6.16668 8.49992V25.4999C6.16668 26.2514 6.46519 26.972 6.99654 27.5034C7.52789 28.0347 8.24856 28.3333 9.00001 28.3333H26C26.7515 28.3333 27.4721 28.0347 28.0035 27.5034C28.5348 26.972 28.8333 26.2514 28.8333 25.4999V8.49992C28.8333 7.74847 28.5348 7.0278 28.0035 6.49645C27.4721 5.9651 26.7515 5.66659 26 5.66659H9.00001ZM9.00001 2.83325H26C27.5029 2.83325 28.9442 3.43027 30.0069 4.49298C31.0697 5.55569 31.6667 6.99703 31.6667 8.49992V25.4999C31.6667 27.0028 31.0697 28.4442 30.0069 29.5069C28.9442 30.5696 27.5029 31.1666 26 31.1666H9.00001C7.49712 31.1666 6.05578 30.5696 4.99307 29.5069C3.93037 28.4442 3.33334 27.0028 3.33334 25.4999V8.49992C3.33334 6.99703 3.93037 5.55569 4.99307 4.49298C6.05578 3.43027 7.49712 2.83325 9.00001 2.83325V2.83325Z"/>
                            </svg>
                        </section>




                    <div className="footer-copyright-container">
                        <p className="footer-copyright">Copyright 2020 &copy; {company}.  All rights reserved.</p>
                    </div> 
                    </section>
                </div>
                <div className="footer-middle">
                    <section className="footer-useful-links">
                        <h3>Useful Links</h3>
                        <section className="footer-shop-links">
                            <p><a href="_blank">Shop All</a></p>
                            <p><a href="_blank">Shop Womens</a></p>
                            <p><a href="_blank">Shop Infant</a></p>
                            <p><a href="_blank">Shop Headbands</a></p>
                        </section>
                        <section className="footer-about-links">
                            <p><a href="_blank">About</a></p>
                            <p><a href="_blank">Contact Us</a></p>
                            <p><a href="_blank">Terms And Conditions</a></p>
                        </section>
                        <section className="footer-faq-links">
                            <p><a href="_blank">Frequently Asked Questions</a></p>
                            <p><a href="_blank">Testimonials</a></p>
                        </section>
                    </section>
                </div>
                <div className="footer-right">
                    <section className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <p className="footer-newsletter-text">Stay in the loop on sales, exclusives, upcoming products, and more!</p>
                        <form>
                            <input type="text" name="name" id="name" placeholder="Name"/>
                            <input type="text" name="email" id="email" placeholder="Email"/>
                            <button action="submit">Sign Me Up!</button>
                        </form>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer
