import React from "react"
import "./NewsLetter.css"

function NewsLetter() {
    return (
        <div className='newsletter'>
            <div className="module__table">
                <h2>NEWSLETTER SIGNUP</h2>
                <form action="#" id="form-send" name="form-send" method="POST">
                    <div className="module__form">
                        <div className="module__input">
                            <div className="module__cell">
                                <label>
                                    <div className="input__name">NAME</div>
                                    <input type="text" name="user[name]" className="cell" id='form-username' required/>
                                </label>
                            </div>
                            <div className="module__cell">
                                <label>
                                    <div className="input__email">EMAIL</div>
                                    <input type="email" name="user[email]" className="cell" id='form-email' required/>
                                </label>
                            </div>
                        </div>
                        <div className="module__button">
                            <noscript>
                                <div className="fieldacycaptcha">
                                    Please enable the javascript to submit this form
                                </div>
                            </noscript>
                            <input type="submit" className="btn subbutton" value="Sign me up"
                                   name="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter