// Ajutoare comune pentru afișarea spectacolelor (arhivă și evenimente
// viitoare), care vin din baza de date cu text liber pentru dată și
// categorie — folosite de UpcomingShowCard, ShowCard și ShowDetail.

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' });
}

export type CategoryKey = 'concert' | 'theater' | 'eveniment' | 'other';

// Categoria vine liberă din baza de date (fără validare la nivel de schemă,
// și uneori în română — „teatru” — alteori în engleză — „theater”), deci
// acceptăm orice text: recunoaștem sinonimele cunoscute pentru filtrare și
// afișare, iar restul îl arătăm exact cum a fost scris.
const CATEGORY_MAP: Record<string, { key: CategoryKey; label: string }> = {
  concert: { key: 'concert', label: 'Concert' },
  teatru: { key: 'theater', label: 'Teatru' },
  theater: { key: 'theater', label: 'Teatru' },
  eveniment: { key: 'eveniment', label: 'Eveniment' },
  opera: { key: 'eveniment', label: 'Operă' },
  dans: { key: 'eveniment', label: 'Dans' },
  other: { key: 'other', label: 'Eveniment' },
};

export function categoryInfo(categorie: string) {
  return CATEGORY_MAP[categorie?.toLowerCase()] ?? { key: 'other' as const, label: categorie };
}
