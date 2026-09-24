// Estimation du CO2 évité grâce aux livraisons à vélo cargo.
//
// Hypothèses (données par Lou Tandem, 24/09/2026) :
// - depuis le 1er juin 2026 ;
// - 32 km par jour de livraison, faits à vélo au lieu d'un véhicule motorisé classique ;
// - 5 jours par semaine : du mardi au samedi (jours d'activité du brief) ;
// - pendant une journée en cours, le compteur avance de 7 h 30 à 14 h (horaires habituels).
// Facteur d'émission : voiture thermique, 0,218 kg CO2e/km (ADEME, impactco2.fr).
// Le vélo cargo est compté à 0 ; les jours fériés et congés ne sont pas déduits.

export const CO2 = {
  start: { y: 2026, m: 6, d: 1 }, // 1er juin 2026
  kmPerDay: 32,
  kgPerKm: 0.218,
  workDays: [2, 3, 4, 5, 6], // mardi → samedi (0 = dimanche)
  dayStart: 7.5, // 7 h 30
  dayEnd: 14, // 14 h
  timeZone: 'Europe/Paris',
} as const;

/** Date et heure actuelles à Nice, quel que soit le fuseau du visiteur. */
function nowInNice(now: Date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: CO2.timeZone,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  return { y: get('year'), m: get('month'), d: get('day'), hours: get('hour') + get('minute') / 60 + get('second') / 3600 };
}

/** Nombre de journées de livraison effectuées (la journée en cours compte au prorata). */
export function deliveryDays(now = new Date()): number {
  const t = nowInNice(now);
  const today = Date.UTC(t.y, t.m - 1, t.d);
  const DAY = 86_400_000;
  let days = 0;
  for (let ts = Date.UTC(CO2.start.y, CO2.start.m - 1, CO2.start.d); ts <= today; ts += DAY) {
    if (!(CO2.workDays as readonly number[]).includes(new Date(ts).getUTCDay())) continue;
    if (ts < today) days += 1;
    else days += Math.min(1, Math.max(0, (t.hours - CO2.dayStart) / (CO2.dayEnd - CO2.dayStart)));
  }
  return days;
}

export function co2Stats(now = new Date()) {
  const days = deliveryDays(now);
  const km = days * CO2.kmPerDay;
  return { days, km, kg: km * CO2.kgPerKm };
}
