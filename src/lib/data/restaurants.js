function mapsUrl(name, city) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " " + city)}`;
}

export const parisRestaurants = [
  {
    name: "Le Relais de l'Entrecôte",
    type: "Steak Frites · Montparnasse",
    tip: "No reservations. One menu only — walnut salad, unlimited steak frites with secret sauce. Go when they open (7PM). Walking distance from your Airbnb. <strong>This is your steak frites night.</strong>",
    maps: mapsUrl("Le Relais de l'Entrecôte", "Paris")
  },
  {
    name: "Crêperies on Rue du Montparnasse",
    type: "Crêpes · 2 min from Airbnb",
    tip: "20+ crêperies on one street. This is the crêpe capital of Paris — Breton-style buckwheat galettes for dinner, sweet crêpes for dessert. Try Crêperie Josselin or Crêperie Bretonne Fleurie.",
    maps: mapsUrl("Rue du Montparnasse Crêperies", "Paris")
  },
  {
    name: "Du Pain et des Idées",
    type: "Bakery · 10th arr.",
    tip: "Possibly the best boulangerie in Paris. Their <em>escargot pistache</em> pastry is life-changing. Worth the metro ride. Lines move fast.",
    maps: mapsUrl("Du Pain et des Idées", "Paris")
  },
  {
    name: "Berthillon",
    type: "Ice Cream · Île Saint-Louis",
    tip: "Legendary Parisian glacier. The salted caramel and wild strawberry are non-negotiable. Get two scoops — regret nothing.",
    maps: mapsUrl("Berthillon", "Paris")
  },
  {
    name: "Any neighborhood bistro",
    type: "French · Everywhere",
    tip: "Look for a chalkboard menu (ardoise), a terrace, and locals eating inside. Avoid any place with a photo menu or a host trying to pull you in from the street."
  },
  {
    name: "Rue Mouffetard",
    type: "Market Street · 5th arr.",
    tip: "One of the oldest market streets in Paris. Cheese, charcuterie, olives, fresh bread — build a picnic for the Jardin des Plantes. The girls will love choosing things.",
    maps: mapsUrl("Rue Mouffetard", "Paris")
  }
];

export const barcelonaRestaurants = [
  {
    name: "Tapas 24",
    type: "Tapas · Eixample (near your Airbnb)",
    tip: "Chef Carles Abellan's casual tapas bar — walking distance from Diagonal 377. The bikini sandwich (ham + truffle) and croquetas are iconic. Expect a queue — worth it.",
    maps: mapsUrl("Tapas 24", "Barcelona")
  },
  {
    name: "Cerveceria Catalana",
    type: "Tapas · Eixample (walking distance)",
    tip: "Brilliant montaditos (small open-faced bites) and fresh tapas. One of Barcelona's most beloved neighborhood spots. Always packed — go for lunch to avoid longest waits.",
    maps: mapsUrl("Cerveceria Catalana", "Barcelona")
  },
  {
    name: "Cal Pep",
    type: "Seafood Tapas · El Born",
    tip: "Counter-only, fast-moving, exceptional. The clams, baby squid, and garlicky beans are extraordinary. Dinner only. One of the best meals you'll have in Barcelona.",
    maps: mapsUrl("Cal Pep", "Barcelona")
  },
  {
    name: "Jai Ca",
    type: "Tapas · Barceloneta Beach",
    tip: "Right by the beach. Cash only, marble bar, chaotic and perfect. Order the gambas, the croquetas, and the patatas bravas. The quintessential Barceloneta lunch.",
    maps: mapsUrl("Jai Ca", "Barcelona")
  },
  {
    name: "Sartoria Panatieri",
    type: "Italian · Gràcia",
    tip: "Widely considered the best pizza in Barcelona. Slow-fermented sourdough, incredible ingredients. Book ahead or arrive when they open. Your Italian fix, sorted.",
    maps: mapsUrl("Sartoria Panatieri", "Barcelona")
  },
  {
    name: "La Pepita",
    type: "Italian/Creative · Eixample",
    tip: "Gorgeous, Instagram-famous interior but genuinely great food. Sandwiches, pasta, and sharing plates. Great for lunch with the girls — fun atmosphere, kid-friendly.",
    maps: mapsUrl("La Pepita", "Barcelona")
  },
  {
    name: "The Steak House",
    type: "Brasserie · ★ 4.7",
    tip: "Highly-rated brasserie-style steakhouse in Barcelona. A great option if you're craving a proper steak night.",
    maps: mapsUrl("The Steak House", "Barcelona")
  },
  {
    name: "Ikibana Sarrià",
    type: "Japanese · Sarrià · ★ 4.3",
    tip: "Upscale Japanese-Mediterranean fusion in the leafy Sarrià neighborhood. Beautiful presentation — a nice change of pace from tapas.",
    maps: mapsUrl("Ikibana Sarrià", "Barcelona")
  },
  {
    name: "Granja M. Viader",
    type: "Café · Gothic Quarter · ★ 4.4",
    tip: "Historic cafeteria dating back to 1870. Famous for inventing Cacaolat (chocolate milk). Great for a mid-morning hot chocolate stop with the girls.",
    maps: mapsUrl("Granja M. Viader", "Barcelona")
  },
  {
    name: "Granja & Chocolateria La Nena",
    type: "Chocolate Café · Gràcia · ★ 4.2",
    tip: "Cozy neighborhood spot in Gràcia known for thick hot chocolate and homemade pastries. Board games on the shelves — very kid-friendly.",
    maps: mapsUrl("Granja La Nena", "Barcelona")
  },
  {
    name: "El Bosc de Les Fades",
    type: "Bar · Las Ramblas · ★ 4.4",
    tip: "Fairy-tale themed bar near the wax museum — enchanted forest décor with trees, fountains, and fairies. The drinks are secondary to the atmosphere. The girls will love it.",
    maps: mapsUrl("El Bosc de Les Fades", "Barcelona")
  },
  {
    name: "NÜA Smart Restaurant",
    type: "Restaurant · ★ 4.4",
    tip: "Modern, health-conscious restaurant with creative Mediterranean dishes. Good vegetarian options.",
    maps: mapsUrl("NÜA Smart Restaurant", "Barcelona")
  },
  {
    name: "Alice Secret Garden",
    type: "Brunch · ★ 3.9",
    tip: "Alice in Wonderland-themed brunch spot with whimsical décor. Fun for a family brunch — the girls will enjoy the themed atmosphere.",
    maps: mapsUrl("Alice Secret Garden", "Barcelona")
  },
  {
    name: "Casa Alfonso",
    type: "Restaurant · ★ 4.4",
    tip: "Classic Barcelona eatery known for traditional Catalan fare. A solid, no-frills choice for authentic local food.",
    maps: mapsUrl("Casa Alfonso", "Barcelona")
  },
  {
    name: "La Flauta",
    type: "Tapas · Rambla de Catalunya · ★ 4.5",
    tip: "Popular tapas bar on Rambla de Catalunya. Known for flautas (crispy rolled tapas) and excellent montaditos. Walking distance from your Airbnb.",
    maps: mapsUrl("La Flauta Rambla de Catalunya", "Barcelona")
  },
  {
    name: "Micu Maku",
    type: "Mediterranean · ★ 4.7",
    tip: "Top-rated Mediterranean restaurant with fresh, creative dishes. One of the highest-rated spots on the list.",
    maps: mapsUrl("Micu Maku", "Barcelona")
  },
  {
    name: "La Lolita Barcelona",
    type: "Mediterranean/Halal · ★ 4.5",
    tip: "Stylish spot with Mediterranean and halal options. Great for a sit-down dinner with diverse menu choices.",
    maps: mapsUrl("La Lolita", "Barcelona")
  }
];
