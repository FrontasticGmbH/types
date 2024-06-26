import { Facet, FacetTypes } from './Facet';
import { Term } from './Term';

// TermFacets can be used for both, term and boolean facet.
export interface TermFacet extends Facet {
  type: FacetTypes.TERM | FacetTypes.BOOLEAN;
  terms?: Term[];
}
