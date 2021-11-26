const itemsData = [
        {
            id: "1",
            type: "comics",
            name: "A Grim Cloud - Part 1",
            address: "A_Grim_Cloud_-_Part_1",
            img: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch_small.png",
            pages: {
                1: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/1.jpg",
                2: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/2.jpg",
                3: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/3.jpg",
                4: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/4.jpg",
                5: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/5.jpg",
                6: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/6.jpg",
                7: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/7.jpg",
                8: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/8.jpg",
                9: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/9.jpg",
                10: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/10.jpg",
                11: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_Sketch/11.jpg"
            }
        },
        {
            id: "2",
            type: "comics",
            name: "A Grim Cloud - Part 1",
            address: "A_Grim_Cloud_Part_1_BW_Edition",
            img: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW_small.png",
            pages: {
                1: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/1.jpg",
                2: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/2.jpg",
                3: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/3.jpg",
                4: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/4.jpg",
                5: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/5.jpg",
                6: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/6.jpg",
                7: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/7.jpg",
                8: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/8.jpg",
                9: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/9.jpg",
                10: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/10.jpg",
                11: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/11.jpg",
                12: "https://www.eth-men.com/images/catalogue/comics/1_A_Grim_Cloud_BW/12.jpg"
            }
        },
        {
            "id": 3,
            type: "figures",
            name: "Lord Zieg",
            img: "https://www.eth-men.com/images/catalogue/figures/1_Zieg.png",
        },
        {
            "id": 4,
            type: "figures",
            name: "Godrick",
            img: "https://lh3.googleusercontent.com/2oXhRYTY6F7CRcewo2q4oFaLfkFwoOKAEbLYRE4ypItZRmvSAK0kevxYDEfyy-U4JoQo1CaZT85jNz2Et_-AdJx1=s0",
        },
        {
            "id": 5,
            type: "figures",
            name: "Pranksy",
            img: "https://lh3.googleusercontent.com/0HxGT_4yPipyv-eYE2MzKdjltMhzTKvfgv7oIlmBqzCk8CP0Qd1GgE-ON8mP6Ju8rrYTuoQPPibjoKn1AO7d6KnJ=s0",
        },
        {
            "id": 6,
            type: "figures",
            name: "CHET",
            img: "https://lh3.googleusercontent.com/kk74eIly2OuehoBlHcrxZempm_2KeeDlazdP5cWbKfZnlqt0Wf6eKPRAndI4FZiMUQqhqmMPWqeP0fNj_i9hW3EvPUnzymnvFyMe=s0",
        },
        {
            "id": 7,
            type: "figures",
            name: "5412",
            img: "https://www.eth-men.com/images/catalogue/figures/5_5412.png",
        },
        {
            "id": 8,
            type: "figures",
            name: "Nature",
            img: "https://www.eth-men.com/images/catalogue/figures/6_Nature.png",
        },
        {
            "id": 9,
            type: "figures",
            name: "Ôtomo Keshin",
            img: "https://www.eth-men.com/images/catalogue/figures/7_Otomo.png",
        },
        {
            "id": 10,
            type: "avatars",
            name: "#1",
            img: "https://www.eth-men.com/images/catalogue/avatars/1.png",
        },
        {
            "id": 11,
            type: "avatars",
            name: "#2",
            img: "https://www.eth-men.com/images/catalogue/avatars/2.png",
        },
        {
            "id": 12,
            type: "avatars",
            name: "#3",
            img: "https://www.eth-men.com/images/catalogue/avatars/3.png",
        },
        {
            "id": 13,
            type: "avatars",
            name: "#4",
            img: "https://www.eth-men.com/images/catalogue/avatars/4.png",
        },
        {
            "id": 14,
            type: "exclusive",
            name: "ETH-MEN Exclusive/1/The Showdown",
            img: "https://www.eth-men.com/images/catalogue/exclusive/2_eth-men_exclusives.png",
        },
        {
            "id": 15,
            type: "exclusive",
            name: "Eth-Men Collectors Card #1 - Zieg - Common",
            img: "https://www.eth-men.com/images/catalogue/exclusive/3_eth-men_exclusives.gif",
        },
        {
            "id": 16,
            type: "exclusive",
            name: "Eth-Men Collectors Card #2 - Zieg - Rare",
            img: "https://www.eth-men.com/images/catalogue/exclusive/4_eth-men_exclusives.gif",
        },
        {
            "id": 17,
            type: "exclusive",
            name: "Eth-Men Collectors Card #5 - Murthre - Special Edition",
            img: "https://www.eth-men.com/images/catalogue/exclusive/17_eth-men_exclusives.gif",
        },
        {
            "id": 18,
            type: "cryptovoxels",
            name: "Lord Zieg´s Ur Laserblaster",
            img: "https://www.eth-men.com/images/catalogue/cryptovoxels/lord_ziegs_ur_laserblaster.gif",
        },
        {
            "id": 19,
            type: "cryptovoxels",
            name: "Godrick´s Hair and Mask",
            img: "https://www.eth-men.com/images/catalogue/cryptovoxels/godricks_hair_and_mask.gif",
        },
        {
            "id": 20,
            type: "reavers",
            name: "Space Reavers - #1 - Gal Gebra",
            img: "https://www.eth-men.com/images/catalogue/reavers/1.jpg",
        },
        {
            "id": 21,
            type: "reavers",
            name: "Space Reavers - #2 - Aldo Sec",
            img: "https://www.eth-men.com/images/catalogue/reavers/2.jpg",
        },
        {
            "id": 22,
            type: "reavers",
            name: "Space Reavers - #3 - Dalgo Gosch",
            img: "https://www.eth-men.com/images/catalogue/reavers/3.gif",
        },
        {
            "id": 23,
            type: "related",
            name: "#022 - Super (Crypto Dolphins x ETH-MEN)",
            img: "https://www.eth-men.com/images/catalogue/related/crypto_dolphins-eth-men.gif",
        },
        {
            "id": 24,
            type: "3D",
            name: "Lord Zieg",
            img: "https://www.eth-men.com/images/catalogue/3d/1_zieg.png",
        },
        {
            "id": 25,
            type: "3D",
            name: "Godrick",
            img: "https://www.eth-men.com/images/catalogue/3d/2_godrick.png",
        },
        {
            "id": 26,
            type: "3D",
            name: "Pranksy",
            img: "https://www.eth-men.com/images/catalogue/3d/3_pranksy.png",
        },
        {
            "id": 27,
            type: "3D",
            name: "CHET",
            img: "https://www.eth-men.com/images/catalogue/3d/4_chet.png",
        }
]

export default itemsData

