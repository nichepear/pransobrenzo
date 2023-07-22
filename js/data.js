/**
 * All the restaurant information used across the site
 *
 * 01 Restaurants
 * - Home page (opening now) - index.js
 * - Find your lunch (Results) - find-your-lunch.js
 * - Locations (Map and informations) - locations.js
 * 
 * 02 suggestionGallery
 * - Home page (for highlights menus) - index.js
 * 
 * 03 tastingEvents
 * - Home page (Tasting event section) - index.js
 * 
 */

var restaurantInfoData = {
    /* ==========================================================================
    01 RESTAURANTS
    ========================================================================== */
    restaurants: [
        {
            name: "Da Roberto",
            //manage the location on map in Location page
            id: "la-taverna-di-roberto",
            x: 811,
            y: 283,
             //manage the details in list on Location page
            address: "via San Vitale 11",
            hours: [
                "Mon: 9:00 - 14:00, 19:00 - 24:00",
                "Tue: 9:00 - 14:00, 19:00 - 24:00",
                "Wed: Closed",
                "Thu: 9:00 - 14:00, 19:00 - 24:00",
                "Fri: 9:00 - 14:00, 19:00 - 24:00",
                "Sat: 9:00 - 14:00, 19:00 - 24:00",
                "Sun: 9:00 - 14:00, 19:00 - 24:00"
            ],
            info: "https://www.thefork.it/ristorante/la-taverna-di-roberto-r72128",
            //manage visibility on find your lunch page
            category: "bolognese",
            menu: "Gramigna di Salsiccia",
            lunchpic: "images/menu-gramigna.png",
            feature: true
        },
        {
            name: "Ragu'",
            //manage the location on map in Location page
            id: "ragu",
            x: 584,
            y: 36,
             //manage the details in list on Location page
            address: "Via Goito 9/b",
            hours: [
                "Mon: 12:00 - 15:00",
                "Tue: 12:00 - 15:00, 19:00 - 22:30",
                "Wed: 12:00 - 15:00, 19:00 - 22:30",
                "Thu: 12:00 - 15:00, 19:00 - 22:30",
                "Fri: 12:00 - 15:00, 19:00 - 23:00",
                "Sat: 12:00 - 15:00, 19:00 - 23:00",
                "Sun: 12:00 - 15:00, 19:00 - 22:30"
            ],
            info: "https://ragubologna.it",
            //manage visibility on find your lunch page
            category: "bolognese",
            menu: "Cotolettina Bolognese",
            lunchpic: "images/menu-cotolettine.png",
            feature: false
        },
        {
            name: "Sfoglia Rina",
            //manage the location on map in Location page
            id: "sfoglia-rina",
            x: 687,
            y:402,
             //manage the details in list on Location page
            address: " Via Castiglione 5/b",
            hours: [
                "Mon: 9:00 - 21:00",
                "Tue: 9:00 - 21:00",
                "Wed: 9:00 - 21:00",
                "Thu: 9:00 - 21:00",
                "Fri: 9:00 - 21:00",
                "Sat: 9:00 - 21:00",
                "Sun: 9:00 - 21:00"
            ],
            info: "https://www.sfogliarina.it"
            ,
            //manage visibility on find your lunch page
            category: "bolognese",
            menu: "Tortelloni Burro Salvia",
            lunchpic: "images/menu-tortelloni.png",
            feature: true
        },
        {
            name: "La Prosciutteria",
             //manage the location on map in Location page
             id: "la-prosciutteria",
             x: 651,
             y:129,
             //manage the details in list on Location page
            address: "via San Vitale 11",
            hours: [
                "Mon: 11:45 - 23:00",
                "Tue: 11:45 - 23:00",
                "Wed: 11:45 - 23:00",
                "Thu: 11:45 - 23:00",
                "Fri: 11:45 - 23:00",
                "Sat: 11:45 - 23:00",
                "Sun: 11:45 - 23:00"
            ],
            info: "https://www.laprosciutteria.com/ristorante-bologna-oberdan/",
            //manage visibility on find your lunch page
            category: "aperitivo",
            menu: "Tagliere misto",
            lunchpic: "images/menu-tagliere.png",
            feature: false
        },
        {
            name: "La Baita",
             //manage the location on map in Location page
             id: "la-baita-vecchia-malga",
             x: 540,
             y:423,
             //manage the details in list on Location page
            address: "via Pescherie Vecchie 3a",
            hours: [
                "Mon: 9:00 - 23:00",
                "Tue: 9:00 - 23:00",
                "Wed: 9:00 - 23:00",
                "Thu: 9:00 - 23:00",
                "Fri: 9:00 - 23:00",
                "Sat: 9:00 - 23:00",
                "Sun: 10:00 - 23:00"
            ],
            info: "https://vecchiamalga.com/",
            //manage visibility on find your lunch page
            category: "aperitivo",
            menu: "Tagliere Italia",
            lunchpic: "images/menu-aperitivo.png",
            feature: true
        },
        {
            name: "Scampo",
             //manage the location on map in Location page
             id: "scampo",
             x: 348,
             y:11,
            //manage the details in list on Location page
            address: "via Galliera 11g",
            hours: [
                "Mon: 10:00 - 23:00",
                "Tue: 10:00 - 23:00",
                "Wed: 10:00 - 23:00",
                "Thu: 10:00 - 23:00",
                "Fri: 10:00 - 23:00",
                "Sat: 10:00 - 23:00",
                "Sun: 10:00 - 23:00"
            ],
            info: "https://scampopm.com/",
            //manage visibility on find your lunch page
            category: "seafood",
            menu: "Fritti Misti",
            lunchpic: "images/menu-fritto-misto.png",
            feature: false
        },
        {
            name: "Sottobanco",
             //manage the location on map in Location page
             id: "sottobanco",
             x: 1133,
             y: 352,
            //manage the details in list on Location page
            address: "P.za Aldrovandi 15/2b",
            hours: [
                "Mon: 11:30 - 14:30, 17:00 - 23:00",
                "Tue: 11:30 - 14:30, 17:00 - 23:00",
                "Wed: 11:30 - 14:30, 17:00 - 23:00",
                "Thu: 11:30 - 14:30, 17:00 - 23:00",
                "Fri: 11:30 - 14:30, 17:00 - 23:00",
                "Sat: 11:30 - 14:30, 17:00 - 23:00",
                "Sun: Closed"
            ],
            info: "https://www.facebook.com/sottobanco2017/",
            //manage visibility on find your lunch page
            category: "streetfood",
            menu: "Panini Furto",
            lunchpic: "images/menu-sottobanco.png",
            feature: false
        },
        {
            name: "Miro'",
             //manage the location on map in Location page
             id: "panini-di-miro",
             x: 1083,
             y: 465,
             //manage the details in list on Location page
            address: "Piazza Aldrovandi 5/2a",
            hours: [
                "Mon: 11:00 - 15:30, 17:00 - 23:00",
                "Tue: 11:00 - 15:30, 17:00 - 23:00",
                "Wed: 11:00 - 15:30, 17:00 - 23:00",
                "Thu: 11:00 - 15:30, 17:00 - 23:00",
                "Fri: 11:00 - 15:30, 17:00 - 23:00",
                "Sat: 11:00 - 23:00",
                "Sun: Closed"
            ],
            info: "https://www.ipaninidimiro.it/",
            //manage visibility on find your lunch page
            category: "streetfood",
            menu: "Piadina di Porchetta",
            lunchpic: "images/menu-miro.png",
            feature: false
        },
        {
            name: "Berbere'",
             //manage the location on map in Location page
             id: "berbere",
             x: 1083,
             y: 208,
             //manage the details in list on Location page
            address: "via Giuseppe Petroni 9c",
            hours: [
                "Mon: 12:00 - 14:00, 17:00 - 23:30",
                "Tue: 12:00 - 14:00, 17:00 - 23:30",
                "Wed: 12:00 - 14:00, 17:00 - 23:30",
                "Thu: 12:00 - 14:00, 17:00 - 23:30",
                "Fri: 12:00 - 14:00, 17:00 - 23:30",
                "Sat: 12:00 - 14:00, 17:00 - 23:30",
                "Sun: 12:00 - 14:00, 17:00 - 23:30"
            ],
            info: "https://www.berberepizza.it",
            //manage visibility on find your lunch page
            category: "pizza",
            menu: "Pizza Napoli",
            lunchpic: "images/menu-pizza.png",
            feature: false
        }
    ],
    /* ==========================================================================
    01 SUGGESTION GALLERY (HOME)
    ========================================================================== */
    suggestionGallery: [
        {
            order: "1", // Appears in the first slot
            menu: "Fried mini pizza",
            restaurant: "Berberé",
            photo: "images/menu-pizza-fritta.png"
        },
        {
            order: "2", // Appears in the second slot
            menu: "Cottolettine Bolognesi",
            restaurant: "Ragū",
            photo: "images/menu-cotolettine.png"
        },
        {
            order: "3", // Appears in the third slot
            menu: "Gramigna in Salsiccia",
            restaurant: "Sfoglia Rina",
            photo: "images/menu-gramigna.png"
        },
        {
            order: "4", // Appears in the forth slot
            menu: "Tortellini in Brodo",
            restaurant: "Da Roberto",
            photo: "images/menu-tortellini.png"
        }
    ],
     /* ==========================================================================
    03 TASTING EVENTS (HOME)
    ========================================================================== */
    tastingEvents: [
        {
            order: "1", // Appears in the first slot
            event: "Wine Tasting",
            restaurant: "Vineria Favalli",
            date: "26 Sep 2022",
            website: "http://vineriafavalli.it",
            photo: "images/tasting-wine.png"
        },
        {
            order: "2", // Appears in the second slot
            event: "Picnic in winery",
            restaurant: "Fienile Fluò",
            date: "30 Sep 2022",
            website: "https://www.fienilefluo.it",
            photo: "images/tasting-picnic-mountain.png"
        },
        {
            order: "3", // Appears in the third slot
            event: "Gelato Tour",
            restaurant: "Cremeria Santo Stefano",
            date: "17 oct 2022",
            website: "https://www.instagram.com/cremeriasantostefano/",
            photo: "images/tasting-gelato.png"
        }
    ]
};


