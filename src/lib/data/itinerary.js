import parisEiffelImg from "/assets/paris-eiffel.jpg";
import disneylandImg from "/assets/disneyland-paris.jpg";
import barcelonaImg from "/assets/barcelona.jpg";

export const parisDays = [
  {
    day: 1,
    title: "Day 1 in Paris — Tuesday, June 2",
    tag: "Arrival Day",
    theme: "paris",
    blocks: [
      { type: "heading", text: "Getting In" },
      {
        type: "callout",
        variant: "blue",
        title: "🚆 CDG → Paris: RER B to Montparnasse",
        text: "RER B to Denfert-Rochereau, then short metro to Montparnasse (~45 min total, ~€12/adult). Or grab an Uber from CDG (~€45-60, much easier with luggage after an overnight flight)."
      },
      { type: "heading", text: "Afternoon — Settle In" },
      {
        type: "list",
        items: [
          "Check into your flat on Rue Armand Moisant, unpack, freshen up",
          "Walk Rue du Montparnasse — grab your first crêpes and café crème",
          "Stock up at the nearby Monoprix for breakfast supplies"
        ]
      },
      { type: "heading", text: "Mid-Afternoon — Galeries Lafayette + Lunch" },
      {
        type: "callout",
        variant: "blue",
        title: "🛍️ <a href=\"https://maps.app.goo.gl/yH1G84trLiLFfKtU9\" target=\"_blank\" rel=\"noopener\">Galeries Lafayette Haussmann</a>",
        text: "Take the metro to Chaussée d'Antin–La Fayette (lines 7 & 9). Marvel at the iconic Art Nouveau stained-glass dome, browse the gourmet food hall for picnic supplies, and let the girls soak in the grand department store experience."
      },
      {
        type: "list",
        items: [
          "Lunch in the Haussmann/Opéra area — <strong>Bouillon Chartier</strong> (classic brasserie, great value) or grab a bite in the Galeries Lafayette food hall",
          "Pick up cheese, charcuterie, wine, and a baguette from the <strong>Galeries Lafayette Gourmet</strong> basement for the evening picnic",
          "Browse the perfume and fashion floors — the dome alone is worth the trip"
        ]
      },
      { type: "heading", text: "Evening — Cheese & Wine Picnic at the Eiffel Tower" },
      {
        type: "list",
        items: [
          "Metro to <strong>Trocadéro</strong> for the iconic Eiffel Tower view across the Seine",
          "Cross over and spread out on the <strong>Champ de Mars</strong> lawn for a proper French picnic — cheese, wine, baguette, the works",
          "Watch the tower light up gold at sunset, then sparkle on the hour after dark",
          "The girls can run on the Champ de Mars while you settle in — perfect way to shake off jet lag"
        ]
      },
      {
        type: "callout",
        variant: "green",
        title: "🧀 Picnic Tips",
        text: "Grab a blanket from the flat. Best cheeses to look for: Comté, Brie de Meaux, and a fresh chèvre. Pair with a Côtes du Rhône or a light Burgundy. The Champ de Mars is right at the base of the tower — stake out a spot facing it before the sun sets."
      },
      {
        type: "callout",
        variant: "green",
        title: "🛝 Playground: Champ de Mars",
        text: "Right at the base of the Eiffel Tower. Great equipment, soft-surface ground. The girls can run off the plane energy while you watch the tower turn gold at sunset."
      }
    ]
  }
];

export const disneyDays = [
  {
    day: 2,
    title: "Day 2 — Wednesday, June 3",
    tag: "Disneyland Park",
    theme: "disney",
    blocks: [
      {
        type: "callout",
        variant: "blue",
        title: "🚆 Getting There: RER A from Châtelet → Marne-la-Vallée/Chessy (~40 min)",
        text: "Covered by Navigo weekly pass (all zones). Without pass: ~€8-10/person each way. Trains run frequently — leave by 8:30 AM to beat the crowds."
      },
      { type: "heading", text: "Must-Do: Disneyland Park" },
      {
        type: "list",
        items: [
          "<strong>Big Thunder Mountain</strong> — the whole family, no debate",
          "<strong>Pirates of the Caribbean</strong> — classic and long",
          "<strong>Peter Pan's Flight</strong> — hit this FIRST, lines grow fast",
          "<strong>Buzz Lightyear Laser Blast</strong> — competitive scoring, the girls will love it",
          "<strong>Hyperspace Mountain</strong> — for Hadley (11)",
          "<strong>It's a Small World</strong> — underrated, especially the European version"
        ]
      },
      {
        type: "callout",
        variant: "purple",
        title: "💡 Strategy",
        text: "Download the Disneyland Paris app for live wait times. Head to Fantasyland (Peter Pan, Small World) the moment gates open. Parade mid-afternoon. Evening show + castle lighting — worth staying for."
      }
    ]
  },
  {
    day: 3,
    title: "Day 3 — Thursday, June 4",
    tag: "Disney Adventure World",
    theme: "disney",
    blocks: [
      { type: "heading", text: "Disney Adventure World (formerly Walt Disney Studios)" },
      {
        type: "list",
        items: [
          "<strong>🌊 World of Frozen</strong> — brand new for 2026, go straight here at park opening",
          "<strong>Ratatouille: The Adventure</strong> — shrink to rat-size in Gusteau's kitchen",
          "<strong>Avengers Campus</strong> — Spider-Man W.E.B. Adventure + character meets",
          "<strong>Cars Road Trip</strong> — great for Everly (7)"
        ]
      },
      {
        type: "callout",
        variant: "purple",
        title: "🌊 World of Frozen Alert",
        text: "This is brand new and Everly will lose her mind. Arrive at park opening and go straight there before anyone else figures out the same thing. Lines will be long all day."
      },
      { type: "heading", text: "Evening" },
      {
        type: "paragraph",
        text: "Disney Village dinner (Earl of Sandwich is solid), then RER A back to Paris. The girls will be asleep before you hit Châtelet."
      }
    ]
  }
];

export const versaillesDays = [
  {
    day: 4,
    title: "Day 4 — Friday, June 5",
    tag: "Versailles AM · Latin Quarter PM",
    theme: "paris",
    blocks: [
      { type: "heading", text: "Morning: Palace of Versailles" },
      {
        type: "callout",
        variant: "blue",
        title: "🚆 RER C from Invalides → Versailles-Rive Gauche (~35 min)",
        text: "Book your timed entry in advance at chateauversailles.fr. ~€21/adult. Kids under 18 are FREE. Head straight to the Hall of Mirrors — it fills up fast."
      },
      {
        type: "list",
        items: [
          "<strong>Hall of Mirrors</strong> — absolutely unmissable",
          "<strong>The Gardens</strong> — massive, beautiful, and the girls can run free",
          "<strong>Marie Antoinette's Estate</strong> — quieter, more intimate, highly recommended"
        ]
      },
      { type: "heading", text: "Afternoon: Latin Quarter" },
      {
        type: "list",
        items: [
          "Back on the RER — metro to <strong>Saint-Michel / Notre-Dame</strong>",
          "Walk the Latin Quarter streets — Shakespeare &amp; Company bookshop",
          "Crêpes on Rue de la Huchette or Rue Mouffetard",
          "<strong>Jardin des Plantes</strong> — beautiful botanical garden, great for the girls to roam"
        ]
      },
      {
        type: "callout",
        variant: "green",
        title: "🛝 Playground: Jardin des Plantes",
        text: "The garden has a wonderful enclosed playground area. Perfect afternoon stop after a big morning at Versailles. Also has a small zoo (Ménagerie) — ~€15/adult, ~€12 kids."
      },
      { type: "heading", text: "Evening" },
      {
        type: "callout",
        variant: "yellow",
        title: "🍽️ Dinner Reservation — 19:30",
        text: "<a href=\"https://maps.app.goo.gl/LMupgvFHxwNZeMFaA\">Brasserie Dubillot</a>"
      }
    ]
  },
  {
    day: 5,
    title: "Day 5 — Saturday, June 6",
    tag: "Latin Quarter · Steak Frites Night",
    theme: "paris",
    blocks: [
      { type: "heading", text: "Morning" },
      {
        type: "list",
        items: [
          "Slow morning — baguette and café from the corner boulangerie",
          "Walk to <strong>Luxembourg Gardens</strong> — rent toy sailboats for the fountain (~€5), world-class playground at Le Ludo Jardin (zipline, climbing structures, puppet theater)"
        ]
      },
      { type: "heading", text: "Afternoon" },
      {
        type: "list",
        items: [
          "Wander <strong>Saint-Germain-des-Prés</strong> — browse the galleries and boutiques",
          "Île Saint-Louis for the best ice cream in Paris: <strong>Berthillon</strong>",
          "Notre-Dame exterior — see the ongoing restoration up close",
          "Walk along the Seine, cross the Pont des Arts"
        ]
      },
      { type: "heading", text: "🥩 Steak Frites Dinner" },
      {
        type: "callout",
        variant: "yellow",
        title: "Le Relais de l'Entrecôte — No reservation needed",
        text: "There's one on Blvd du Montparnasse, walking distance from your Airbnb. One menu only: walnut salad, then unlimited steak frites with their secret sauce. Show up when they open (7PM) or expect a queue. Kids love it — unlimited fries. Bring cash as backup."
      },
      {
        type: "callout",
        variant: "green",
        title: "🛝 Playground: Luxembourg Gardens — Le Ludo Jardin",
        text: "One of the best playgrounds in Europe. Zipline, climbing frames, sandbox, puppet theater. Entry ~€3/child. Hadley and Everly will want to stay all day."
      }
    ]
  }
];

export const trainDays = [
  {
    day: 6,
    title: "Day 6 — Sunday, June 7",
    tag: "Paris → Barcelona · TGV 06:42",
    theme: "travel",
    blocks: [
      { type: "heading", text: "Pre-Dawn" },
      {
        type: "list",
        items: [
          "Set two alarms. Pack bags the night before.",
          "Taxi already booked — doors open at 05:45 AM sharp",
          "Grab a pain au chocolat from the station — Gare de Lyon has a Paul bakery open early"
        ]
      },
      { type: "heading", text: "The Journey (~6.5 hours)" },
      {
        type: "list",
        items: [
          "TGV INOUI 9711: Paris Gare de Lyon → Barcelona Sants",
          "Arrives approximately <strong>13:15</strong> Barcelona time (same time zone in June)",
          "Bring snacks, download movies for the kids, enjoy the Pyrenees scenery"
        ]
      },
      { type: "heading", text: "Afternoon: Barcelona Arrival" },
      {
        type: "list",
        items: [
          "Check into <strong>Sweett Palau Atic, Avinguda Diagonal 377</strong> — Eixample neighborhood",
          "The Eixample is Barcelona's elegant grid district — wide boulevards, gorgeous architecture",
          "Short walk or metro to the <strong>Gothic Quarter (Barri Gòtic)</strong> — wander the medieval lanes",
          "First tapas dinner in Barcelona! See food guide below"
        ]
      },
      {
        type: "callout",
        variant: "yellow",
        title: "📍 Your Neighborhood: Eixample",
        text: "Avinguda Diagonal 377 puts you right in the heart of upscale Barcelona. Passeig de Gràcia (Barcelona's Champs-Élysées) is a short walk — Gaudí's Casa Batlló and Casa Milà (La Pedrera) are right there. Great metro connections. Cerveceria Catalana and Tapas 24 are walking distance."
      }
    ]
  }
];

export const barcelonaDays = [
  {
    day: 7,
    title: "Day 7 — Monday, June 8",
    tag: "El Born · Ciutadella Park · Sagrada Família",
    theme: "bcn",
    blocks: [
      { type: "heading", text: "Morning & Afternoon: El Born + Ciutadella Park" },
      {
        type: "list",
        items: [
          "<strong>Mercat de Santa Caterina</strong> — colorful mosaic roof, beautiful market, less touristy than Boqueria",
          "Wander <strong>El Born</strong> neighborhood — boutiques, coffee, the best tapas bars",
          "<strong>Parc de la Ciutadella</strong> — Barcelona's central park, right next to El Born. Rowboats on the lake (~€6/30 min), grand fountain (Cascada), playground, and wide paths for the girls to run around",
          "<strong>Basílica de Santa Maria del Mar</strong> — stunning Gothic church, free entry"
        ]
      },
      {
        type: "callout",
        variant: "blue",
        title: "🚇 Barcelona Metro",
        text: "Get a <strong>T-Casual card</strong> (10 trips, ~€11.35, shareable). Kids under 4 free. Sagrada Família = stop \"Sagrada Família\" on L2/L5."
      },
      {
        type: "callout",
        variant: "yellow",
        title: "💡 Gaudí Centenary — June 10",
        text: "June 10, 2026 is the <strong>100th anniversary of Antoni Gaudí's death</strong>. You'll be in Barcelona for one of the most significant cultural events in the city's recent history. Expect special events, exhibitions, and massive crowds at all Gaudí sites."
      },
      { type: "heading", text: "Late Afternoon: Sagrada Família — 5:45 PM Entry" },
      {
        type: "list",
        items: [
          "Timed entry: <strong>17:45 on June 8</strong> — don't be late, they're strict on slots",
          "Towers included — take the Nativity Tower for golden-hour views over the city",
          "The late afternoon light through the stained glass is extraordinary — warm reds and oranges on the west side",
          "Gaudí designed this to take 200 years to build; it's still ongoing and stunning",
          "Spend 2-2.5 hours — you'll be out by ~8 PM, perfect for dinner"
        ]
      },
      { type: "heading", text: "Evening: Pintxos in El Born" },
      {
        type: "list",
        items: [
          "Head back to El Born (~15 min metro) for a pintxos crawl — you already know the neighborhood from this morning"
        ]
      },
      {
        type: "callout",
        variant: "purple",
        title: "🍸 Late Night: Two Schmucks (after girls are asleep)",
        text: "Your second adults-only night out. <strong>Two Schmucks</strong> in Eixample — irreverent, punk-attitude cocktail bar ranked in the World's 50 Best. Brilliant drinks, great value, no reservations needed. ~10 min taxi from El Born."
      }
    ]
  },
  {
    day: 8,
    title: "Day 8 — Tuesday, June 9",
    tag: "Tibidabo · Gràcia · Paradiso 🍸",
    theme: "bcn",
    blocks: [
      { type: "heading", text: "Morning: Tibidabo Amusement Park" },
      {
        type: "list",
        items: [
          "Europe's oldest amusement park, on a hill overlooking all of Barcelona",
          "Views are spectacular — you can see the whole city and the sea",
          "Vintage rides + modern attractions — Hadley and Everly will love the mix",
          "Check opening days at tibidabo.cat — sometimes closed Tuesday in shoulder season",
          "Getting there: FGC train from Plaça Catalunya to Peu del Funicular, then funicular up"
        ]
      },
      {
        type: "callout",
        variant: "green",
        title: "🛝 Tibidabo = Giant Playground",
        text: "This is essentially an amusement park on a mountaintop. The girls are going to think it's the coolest thing they've ever seen. Budget 4-5 hours."
      },
      { type: "heading", text: "Evening: Dinner in Gràcia" },
      {
        type: "list",
        items: [
          "FGC down from Tibidabo drops you right into <strong>Gràcia</strong> — bohemian neighborhood with a village feel",
          "Stroll <strong>Plaça del Sol</strong> and <strong>Plaça de la Virreina</strong> — locals gather here at dusk, kids run around",
          "Tapas dinner at a terrace — tons of options along Carrer de Verdi and the plazas",
          "Gelato stop before heading back — the girls earned it after a full day"
        ]
      },
      {
        type: "callout",
        variant: "purple",
        title: "🍸 Late Night: Paradiso (after girls are asleep)",
        text: "Once the grandparents are on duty, head to <strong>Paradiso</strong> in El Born (~15 min by metro). Enter through a hidden door inside a pastrami sandwich shop. World's Best Bar 2022 — theatrical, inventive cocktails. <strong>Book a table in advance</strong> — the queue gets long. Worth every minute."
      }
    ]
  },
  {
    day: 9,
    title: "Day 9 — Wednesday, June 10 🎉",
    tag: "GAUDÍ CENTENARY · Sitges Day Trip",
    theme: "gaudi",
    blocks: [
      {
        type: "callout",
        variant: "yellow",
        title: "🎉 June 10, 2026 — 100th Anniversary of Gaudí's Death",
        text: "This is a massive cultural milestone for Barcelona. Expect special exhibitions, free entry periods, live music, and city-wide events. Check visitbarcelona.com for the official program. Your Sagrada Família visit was yesterday — perfect timing."
      },
      { type: "heading", text: "Sitges Day Trip 🏖️" },
      {
        type: "callout",
        variant: "blue",
        title: "🚆 Train: Barcelona Sants → Sitges (~35 min, ~€4.50/person)",
        text: "Sitges is a gorgeous whitewashed beach town 35km southwest of Barcelona. Quieter than Barceloneta, beautiful old town, clear water. Great day trip especially with kids. Trains run every 20-30 minutes."
      },
      {
        type: "list",
        items: [
          "Church of Sant Bartomeu overlooking the sea — iconic photo spot",
          "Long sandy beach — calmer, cleaner, and less crowded than Barceloneta",
          "Great seafood restaurants on the promenade — paella for lunch",
          "Wander the old town streets — boutiques, ice cream, churros",
          "Head back to Barcelona in the late afternoon — catch centenary events in the evening if anything catches your eye"
        ]
      }
    ]
  },
  {
    day: 10,
    title: "Day 10 — Thursday, June 11",
    tag: "La Boqueria · Barceloneta Beach · Montjuic · Magic Fountains ✨",
    theme: "bcn",
    blocks: [
      { type: "heading", text: "Morning: La Boqueria Market 🍓" },
      {
        type: "list",
        items: [
          "<strong>Mercat de la Boqueria</strong> on La Rambla — Barcelona's most famous food market",
          "Go early (before 10 AM) for the best experience — less crowded, freshest produce",
          "Fresh fruit cups, jamón ibérico, fresh juice, pastries — breakfast here is unbeatable",
          "The girls will love the colors — walls of candy, tropical fruit towers, enormous seafood displays",
          "Pick up beach snacks: fruit, nuts, olives, cured meats for later"
        ]
      },
      { type: "heading", text: "Late Morning & Afternoon: Barceloneta Beach 🏖️" },
      {
        type: "list",
        items: [
          "Metro L4 to <strong>Barceloneta</strong> — 5 minutes from the city center to the beach",
          "Rent sunbeds and umbrella (~€12-15 for two), swim, build sandcastles",
          "The girls will be in heaven — Mediterranean water in June is warm (~22°C)",
          "Walk the Barceloneta promenade — outdoor showers, ice cream kiosks, beach bars"
        ]
      },
      {
        type: "callout",
        variant: "blue",
        title: "🍽️ Beach Lunch: Jai Ca",
        text: "Classic Barceloneta tavern right by the beach. Order the gambas al ajillo (garlic prawns), patatas bravas, and croquetas. Very local, very good. Cash preferred."
      },
      { type: "heading", text: "Late Afternoon: Montjuic Cable Cars 🚡" },
      {
        type: "list",
        items: [
          "<strong>Montjuic Cable Car</strong> (Teleféric de Montjuïc) — sweeping views over the port (~€15/person round trip)",
          "<strong>Castell de Montjuïc</strong> — old fortress at the summit, great views, free entry to grounds",
          "Walk down through the gardens toward the Magic Fountains — beautiful at sunset"
        ]
      },
      { type: "heading", text: "Evening: Magic Fountains ⛲" },
      {
        type: "callout",
        variant: "green",
        title: "⛲ Magic Fountains of Montjuic — FREE",
        text: "June–September: Thursday–Sunday evenings, ~9:30–10:30 PM. Spectacular water, light, and music show at the foot of Montjuic. The perfect grand finale to your Barcelona trip — sit on the steps of the MNAC with the city glittering behind you."
      }
    ]
  },
  {
    day: 11,
    title: "Day 11 — Friday, June 12",
    tag: "Fly Home · BCN → ATL → BNA",
    theme: "travel",
    blocks: [
      { type: "heading", text: "Morning" },
      {
        type: "list",
        items: [
          "DL195 departs Barcelona El Prat at <strong>11:00 AM</strong>",
          "Leave apartment by <strong>8:30 AM</strong> — allow 30 min to airport + 90 min for international check-in",
          "Taxi or Aerobus from Plaça de Catalunya (~€6/person, ~35 min) or taxi (~€35 flat rate)",
          "Quick coffee and one last <em>croissant de mantequilla</em> at the airport"
        ]
      },
      { type: "heading", text: "The Journey Home" },
      {
        type: "list",
        items: [
          "BCN → ATL: DL195, arrives Atlanta 3:08 PM",
          "ATL → BNA: DL1490 6:30 PM, arrives Nashville 6:52 PM",
          "Back in Tennessee by dinner time — with a suitcase full of memories and chocolate"
        ]
      }
    ]
  }
];

export const trainSectionWarning = {
  icon: "⏰",
  title: "05:45 AM — Leave Apartment. No Exceptions.",
  text: "Your train departs <strong>Gare de Lyon at 06:42</strong>. Platform closes at 06:40. Taxi from 4 Rue Armand Moisant = ~20 minutes. <strong>Book your taxi the night before.</strong> Uber/G7 Taxi both work. First metro of the day doesn't run early enough — taxi only. All 6 passengers: Jonathan, Lynnsey, Hadley, Everly, Donald &amp; Karen Nugent."
};

export const sections = [
  {
    id: "paris",
    title: "🇫🇷 Paris",
    subtitle: "5 Nights · 4 Rue Armand Moisant, 75015 (Montparnasse) · Jun 2–7",
    image: {
      src: parisEiffelImg,
      alt: "Eiffel Tower Paris",
      caption: "Eiffel Tower and Champ de Mars, Paris · Photo: Wikimedia Commons"
    },
    introCallout: {
      variant: "yellow",
      title: "📍 Your Neighborhood: Montparnasse (15th arr.)",
      text: "This is actually a great base — very local, not touristy. <strong>Rue du Montparnasse</strong> is lined with crêperies (it's the crêpe street of Paris — seriously, 20+ in a row). The big Montparnasse train station is walkable for the RER to Versailles and Disneyland. Bonus: the famous <strong>Le Relais de l'Entrecôte</strong> (steak frites) has a location nearby on Blvd du Montparnasse."
    },
    trainSectionWarning: null,
    days: parisDays
  },
  {
    id: "disney",
    title: "🎠 Disneyland Paris",
    subtitle: "2 Days · June 3–4 · RER A from Châtelet",
    image: {
      src: disneylandImg,
      alt: "Disneyland Paris castle",
      caption: "Sleeping Beauty Castle, Disneyland Paris · Photo: Wikimedia Commons"
    },
    introCallout: null,
    trainSectionWarning: null,
    days: disneyDays
  },
  {
    id: "versailles",
    title: "🏛️ Versailles + Latin Quarter",
    subtitle: "Friday, June 5",
    image: null,
    introCallout: null,
    trainSectionWarning: null,
    days: versaillesDays
  },
  {
    id: "train",
    title: "🚄 The Train to Barcelona",
    subtitle: "Sunday, June 7 · TGV INOUI 9711 · Conf# 8K9GR2",
    image: null,
    introCallout: null,
    trainSectionWarning,
    days: trainDays
  },
  {
    id: "barcelona",
    title: "🇪🇸 Barcelona",
    subtitle: "5 Nights · Avinguda Diagonal 377, Eixample · Jun 7–12",
    image: {
      src: barcelonaImg,
      alt: "Barcelona Spain",
      caption: "Barcelona, Spain · Photo: Unsplash"
    },
    introCallout: null,
    trainSectionWarning: null,
    days: barcelonaDays
  }
];
