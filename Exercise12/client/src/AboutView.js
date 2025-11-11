import React from "react";
import "./View.css";

function AboutView() {
    return (
        <div className="article-container">
            <div className="article-box">
                <h1>Tiramisu</h1>
                <p><b>Mix creamy filling:</b> Beat the mascarpone, cream, sugar, and vanilla together until stiff peaks.</p>
                <p><b>Dip lady fingers:</b> Add the espresso and liqueur, dip quickly on both sides.</p>
                <p><b>Layer mascarpone:</b> Smooth a layer of mascarpone mixture over lady fingers.</p>
                <p><b>Repeat:</b> Add another layer, dust with cocoa powder.</p>

                <h1>Cookie</h1>
                <p><b>Make Dough:</b> Cream together butter and sugar, then mix in eggs, milk, and vanilla.</p>
                <p><b>Roll Out:</b> Dust counter with flour and roll to ½ inch thick.</p>
                <p><b>Bake:</b> 350°F for 8–11 minutes.</p>

                <h1>Donut</h1>
                <p><b>Make Dough:</b> Mix dry ingredients, beat butter and sugar, add yolks.</p>
                <p><b>Cut Out:</b> Roll dough ½ inch thick and cut shapes.</p>
                <p><b>Fry:</b> Heat oil to 325°F, fry until golden. Glaze and serve!</p>
                <p><br/></p>
            </div>
        </div>
    );
}

export default AboutView;