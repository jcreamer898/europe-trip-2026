function mapsUrl(name, city) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " " + city)}`;
}

export const parisBars = [
  {
    name: "Harry's New York Bar",
    type: "Classic Cocktail Bar · 2nd arr.",
    tip: "Open since 1911 and one of the most famous bars in the world. Birthplace of the Bloody Mary and the French 75. Order the house cocktails and soak in 100+ years of history.",
    maps: mapsUrl("Harry's New York Bar", "Paris")
  },
  {
    name: "Bar Hemingway at The Ritz",
    type: "Luxury Cocktail Bar · 1st arr.",
    tip: "The legendary bar inside The Ritz Paris, decorated with Hemingway memorabilia. Extraordinary cocktails and history — walk in for a drink even if you're not staying at the hotel.",
    maps: mapsUrl("Bar Hemingway Ritz Paris", "Paris")
  },
  {
    name: "Candelaria",
    type: "Speakeasy · Le Marais · 3rd arr.",
    tip: "A buzzy taqueria on the outside, a hidden cocktail bar in the back. Some of the best cocktails in Paris — squeeze through the secret door. Very Paris, very cool.",
    maps: mapsUrl("Candelaria Paris", "Paris")
  },
  {
    name: "Little Red Door",
    type: "Craft Cocktail Bar · Le Marais · 3rd arr.",
    tip: "Consistently ranked among the world's best bars. Creative seasonal cocktail menus, intimate space, and excellent service. Book ahead if you can.",
    maps: mapsUrl("Little Red Door Paris", "Paris")
  },
  {
    name: "Experimental Cocktail Club",
    type: "Craft Cocktail Bar · 1st arr.",
    tip: "The bar that launched Paris's craft cocktail revolution. Prohibition-era décor, inventive drinks, and a buzzing atmosphere. A must for cocktail lovers.",
    maps: mapsUrl("Experimental Cocktail Club Paris", "Paris")
  },
  {
    name: "Le Syndicat",
    type: "French Spirits Bar · 10th arr.",
    tip: "Entirely French spirits — no imported liquor allowed. The cocktails are creative and proudly local. Unpretentious vibe in a grungy-cool part of the 10th.",
    maps: mapsUrl("Le Syndicat Paris", "Paris")
  },
  {
    name: "Moonshiner",
    type: "Speakeasy · 11th arr.",
    tip: "Hidden behind a pizza restaurant — ring the bell on the unmarked door. Dark wood, jazz, and impeccably made classic cocktails. Perfect for a late-night adventure.",
    maps: mapsUrl("Moonshiner Paris", "Paris")
  },
  {
    name: "Le Mary Celeste",
    type: "Natural Wine & Cocktail Bar · Le Marais · 3rd arr.",
    tip: "Beloved Le Marais bar known for natural wines, craft cocktails, and great small plates. Lively, young crowd and a fantastic terrace. A neighbourhood favourite.",
    maps: mapsUrl("Le Mary Celeste Paris", "Paris")
  },
  {
    name: "Sherry Butt",
    type: "Craft Cocktail Bar · Le Marais · 4th arr.",
    tip: "Intimate, dimly lit bar in the heart of Le Marais. Outstanding cocktails from a team that really cares. Great soundtrack and no attitude — just good drinks.",
    maps: mapsUrl("Sherry Butt Paris", "Paris")
  },
  {
    name: "La Fine Mousse",
    type: "Craft Beer Bar · 11th arr.",
    tip: "Paris's best craft beer bar — 20 rotating taps, all French and European independents. Excellent beer-and-cheese pairings. A must-stop if you fancy something other than wine.",
    maps: mapsUrl("La Fine Mousse Paris", "Paris")
  }
];

export const barcelonaBars = [
  {
    name: "Paradiso",
    type: "Cocktail Bar · El Born · ★ World's Best Bar 2022",
    tip: "<strong>The one you asked for.</strong> Enter through a hidden door inside a pastrami sandwich shop. Consistently ranked the world's best bar. Theatrical, inventive cocktails — book a table in advance, the queue gets long.",
    maps: mapsUrl("Paradiso Barcelona", "Barcelona")
  },
  {
    name: "Bar Marsella",
    type: "Historic Bar · El Raval · Est. 1820",
    tip: "The oldest bar in Barcelona, barely changed in 200 years. Famous for its absinthe, dusty bottles, and mirrors clouded with age. No cocktail menus — just atmosphere and history.",
    maps: mapsUrl("Bar Marsella Barcelona", "Barcelona")
  },
  {
    name: "El Xampanyet",
    type: "Cava Bar · El Born · Classic",
    tip: "A Barcelona institution since the 1920s. Order the house cava and anchovies — a perfect pairing. Tiles, barrels, and old-school charm around the corner from the Picasso Museum.",
    maps: mapsUrl("El Xampanyet Barcelona", "Barcelona")
  },
  {
    name: "Two Schmucks",
    type: "Craft Cocktail Bar · Eixample",
    tip: "Fun, irreverent cocktail bar with a punk attitude and genuinely brilliant drinks. One of Barcelona's most creative bars — ranked in the World's 50 Best. Great value too.",
    maps: mapsUrl("Two Schmucks Barcelona", "Barcelona")
  },
  {
    name: "Dry Martini",
    type: "Classic Cocktail Bar · Eixample",
    tip: "Barcelona's most iconic cocktail bar, opened in 1978. The martinis are immaculate and the white-jacketed bartenders legendary. Old-world elegance near your Airbnb on Diagonal.",
    maps: mapsUrl("Dry Martini Barcelona", "Barcelona")
  },
  {
    name: "Boadas Cocktail Bar",
    type: "Historic Cocktail Bar · Las Ramblas",
    tip: "One of the oldest cocktail bars in Barcelona, open since 1933. Tiny triangular room, classic drinks, and bartenders who've been there for decades. A quick stop on or near Las Ramblas.",
    maps: mapsUrl("Boadas Cocktail Bar Barcelona", "Barcelona")
  },
  {
    name: "Bar Calders",
    type: "Neighbourhood Bar · Sant Antoni",
    tip: "The heart of the Sant Antoni bar scene. Great vermut on the sunny terrace, excellent pintxos, and a wonderfully relaxed vibe. Perfect for a lazy afternoon drink.",
    maps: mapsUrl("Bar Calders Barcelona", "Barcelona")
  },
  {
    name: "Banker's Bar · Mandarin Oriental",
    type: "Luxury Cocktail Bar · Passeig de Gràcia",
    tip: "Sophisticated hotel bar on Barcelona's most elegant boulevard. Outstanding cocktails and a glamorous setting — worth it for a special-occasion drink on Passeig de Gràcia.",
    maps: mapsUrl("Mandarin Oriental Banker's Bar Barcelona", "Barcelona")
  },
  {
    name: "El Sortidor",
    type: "Vermouth Bar · Poble Sec",
    tip: "A beautifully restored pharmacy turned vermouth bar in the charming Poble Sec neighbourhood. Wonderful vermut, natural wines, and a gorgeous tiled interior.",
    maps: mapsUrl("El Sortidor Barcelona", "Barcelona")
  },
  {
    name: "Terraza Martini",
    type: "Rooftop Bar · Eixample",
    tip: "Sleek open-air terrace bar above the Martini flagship store on Passeig de Gràcia. Free entry, iconic views up the boulevard, and cocktails at reasonable prices.",
    maps: mapsUrl("Terraza Martini Barcelona", "Barcelona")
  }
];
