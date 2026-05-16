export const bookings = [
  {
    icon: "✈️",
    label: "Delta Flights",
    value: "Conf# G9BB2X",
    details:
      "Jun 1: BNA→ATL (DL3142 2:47PM) → CDG (DL8703 8:05PM, arrives Jun 2 10:35AM)<br>Jun 12: BCN→ATL (DL195 11AM) → BNA (DL1490 6:30PM, arrives 6:52PM)",
    confirmed: "✅ Confirmed · $1,287.93/person",
    link: null
  },
  {
    icon: "🏠",
    label: "Paris Airbnb",
    value: "Conf# HMS4SWE2D5",
    details:
      "4 Rue Armand Moisant, 75015 Paris<br>Cozy flat w/ Jacuzzi · 2BR 2WC · Host: Baudouin<br>Jun 2–7 · 5 nights · $477.61/night",
    confirmed: "✅ Confirmed · $2,757.34 total",
    link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMS4SWE2D5"
  },
  {
    icon: "🏠",
    label: "Barcelona Airbnb",
    value: "Conf# HMX9ER8FEP",
    details:
      "Avinguda Diagonal 377, Eixample<br>Sweett Palau Atic · Host: Sweett<br>Jun 7–12 · 5 nights · Early bird -$778 applied",
    confirmed: "✅ Confirmed · $3,194.75 total",
    link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMX9ER8FEP"
  },
  {
    icon: "🚆",
    label: "TGV Paris → Barcelona",
    value: "Conf# 8K9GR2",
    details:
      "TGV INOUI 9711 · Jun 7 · 6 passengers<br>Jonathan, Lynnsey, Hadley, Everly,<br>Donald &amp; Karen Nugent · €644 total",
    confirmed: "✅ Confirmed · ⚠️ Departs 06:42",
    link: null
  },
  {
    icon: "🎡",
    label: "Sagrada Família",
    value: "Tickets In Hand",
    details: "Family of 4 · Tower access included<br>Monday June 8",
    confirmed: "✅ Confirmed · ~$195",
    link: null
  }
];

export const trainWarning = {
  icon: "🚨",
  title: "Train Alert — June 7 · TGV 9711 · Departs 06:42",
  text: "Platform at Gare de Lyon closes at <strong>06:40</strong> — zero buffer. Your Airbnb at 4 Rue Armand Moisant (15th arr.) is a 20-minute taxi ride away. <strong>Leave the apartment by 05:45 AM. Book your taxi the night before.</strong> Do NOT take the metro at that hour — first trains won't even be running. All 6 passengers must be present: Jonathan, Lynnsey, Hadley, Everly, Donald &amp; Karen."
};
