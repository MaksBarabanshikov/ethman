import React from "react";
import Collapsible from "react-collapsible";

function ContentWiki() {
    return (
        <div className="content">
            <div className="content__header">
                <h1 className="headline">ETH-MEN Wiki</h1>
            </div>
            <div className="content__collapsible">
                <Collapsible trigger="What is ETH-MEN all about?">
                    <p>ETH-MEN are a variety of collectibles. However our primary goal is to deliver digital action figures
                        and comics on the ethereum blockchain, running 100% on IPFS! These take you back to the nostalgic
                        moments you experienced playing or gathering action figures and reading comics</p>
                </Collapsible>
                <Collapsible trigger="Is there a setbonus?">
                    <p>Most figures are part of a set. This means that if you collect all figures of that set before a
                        certain time, you will get the free setbonus as a reward. If an account completes multiple sets of
                        the same series, they will receive multiple set bonuses. Some figures are special edition or
                        collaborations. They will always have another incentive.</p>
                </Collapsible>
                <Collapsible trigger="How do I get the 3D figure?">
                    <p>You can unpack the figure by loging in on our website with metamask. Unpacking the figure initiates a
                        'burning' of the original front-card package, figure, and accessories. Followed by a minting of a
                        new replacement NFT. A 3D model (GLB-file) of the unpacked ETH-MEN figure along with it’s card-back
                        cutout.</p>
                </Collapsible>
                <Collapsible trigger="What are ETH-MEN Avatars?">
                    <p>What better way to showcase your ETH-MEN allegiance than avatars! Ultra-rare, stylishly illustrated
                        character icons. Ideal for use on Twitter, Discord, OpenSea, Rarible, all over the universe! And
                        most important: every avatar is completely unique, so you will be the only one owing that specific
                        piece. ETH-MEN avatars are auctioned. Only 12 unique individual avatars are created per ETH-MEN
                        figure!</p>
                </Collapsible>
                <Collapsible trigger="Why is the amount of certain figures and comics decreasing?">
                    <p>This is because some people are unpacking their mint action figures or comic, causing the total
                        number of mint condition NFTs to reduce. You see, when you unpack something you will burn the
                        initial packaging, and you actually mint a new token on that moment!</p>
                </Collapsible>
                <Collapsible trigger="Whats the difference between the different comics?">
                    <p>Our comics come in 4 different editions. The sketch edition is the rarest edition of all, with a
                        total of only 65 copies in existence. Amazing to see how the artist's raw sketches set the stage for
                        the extraordinary storyline. A total of 90 copies are released in Black and White, showcasing all
                        original illustrations without any color. These are pretty special!


                        A total of 125 copies are released with a special “First Edition” stamp on the cover. Unlike the
                        standard edition, these are in fact rare, valuable and desirable. Perhaps best to keep these sealed
                        and unpack/read a Standard Edition copy!


                        A total of 250 copies are released for everyday reading. The packaging and cover show a bit of wear
                        and tear.</p>
                </Collapsible>
                <Collapsible trigger="What is the migration function on the website?">
                    <p>Initially each ETH-MEN figure was purchased as a ‘front-card’ which consisted of the character figure
                        and accessories. The informational ‘card-back’ would later be sent to the owner of the front-card.
                        Though effective, after a few figure releases a more elegant approach was discovered and
                        implemented, ushering in ETH-MEN 2.0. All future releases now include front cards and card-backs
                        merged into a single NFT. You can choose to merge to the new contract, or keep them on the old
                        contract.</p>
                </Collapsible>
                <Collapsible trigger="Where can I find all different collections?">
                        <a href="https://opensea.io/assets/eth-men" target="_blank">https://opensea.io/assets/eth-men
                            (Legacy)</a>
                        <a href="https://opensea.io/assets/eth-men-2-0" target="_blank">https://opensea.io/assets/eth-men-2-0
                            (Reloaded)</a>
                        <a href="https://opensea.io/assets/eth-men-3d"
                           target="_blank">https://opensea.io/assets/eth-men-3d</a>
                        <a href="https://opensea.io/assets/eth-men-avatars"
                           target="_blank">https://opensea.io/assets/eth-men-avatars</a>
                        <a href="https://opensea.io/assets/eth-men-comics"
                           target="_blank">https://opensea.io/assets/eth-men-comics</a>
                        <a href="https://opensea.io/assets/eth-men-comics-unsealed&quot;target=&quot;_blank">https://opensea.io/assets/eth-men-comics-unsealed</a>
                        <a href="https://opensea.io/assets/eth-men-store" target="_blank">https://opensea.io/assets/eth-men-avatars
                            (Voxels)</a>
                        <a href="https://opensea.io/assets/eth-men-subscriptions"
                           target="_blank">https://opensea.io/assets/eth-men-subscriptions</a>
                </Collapsible>
                <Collapsible trigger="The Adventures of the ETH-MEN Comic WIKI">
                    <a href="https://ethmen-official.fandom.com/wiki/The_Adventures_of_the_ETH-MEN_Comic#Plot"
                       target="_blank">https://ethmen-official.fandom.com/wiki/The_Adventures_of_the_ETH-MEN_Comic#Plot</a>
                </Collapsible>
            </div>
        </div>
    )
}

export default ContentWiki