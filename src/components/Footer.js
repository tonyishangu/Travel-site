import React from 'react'

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription">
                    Join the  Adventure Newsletter to recieve our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    you can unsubscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" className="footer-input" placeholder="enter email"/>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
