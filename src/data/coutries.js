const countries = {
  ZA: 'Afrique du Sud',
  AL: 'Albanie',
  DZ: 'Algérie',
  DE: 'Allemagne',
  AD: 'Andorre',
  AO: 'Angola',
  AI: 'Anguilla',
  AG: 'Antigua-et-Barbuda',
  AN: 'Antilles néerlandaises',
  SA: 'Arabie saoudite',
  AR: 'Argentine',
  AM: 'Arménie',
  AW: 'Aruba',
  AU: 'Australie',
  AT: 'Autriche',
  AZ: 'Azerbaïdjan',
  BS: 'Bahamas',
  BH: 'Bahreïn',
  BB: 'Barbade',
  BE: 'Belgique',
  BZ: 'Belize',
  BJ: 'Bénin',
  BM: 'Bermudes',
  BT: 'Bhoutan',
  BY: 'Biélorussie',
  BO: 'Bolivie',
  BA: 'Bosnie-Herzégovine',
  BW: 'Botswana',
  BR: 'Brésil',
  BN: 'Brunéi Darussalam',
  BG: 'Bulgarie',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodge',
  CM: 'Cameroun',
  CA: 'Canada',
  CV: 'Cap-Vert',
  CL: 'Chili',
  C2: 'Chine',
  CN: 'Chine',
  CY: 'Chypre',
  CO: 'Colombie',
  KM: 'Comores',
  CG: 'Congo-Brazzaville',
  CD: 'Congo-Kinshasa',
  KR: 'Corée du Sud',
  CR: 'Costa Rica',
  CI: 'Côte d’Ivoire',
  HR: 'Croatie',
  DK: 'Danemark',
  DJ: 'Djibouti',
  DM: 'Dominique',
  EG: 'Égypte',
  SV: 'El Salvador',
  AE: 'Émirats arabes unis',
  EC: 'Équateur',
  ER: 'Érythrée',
  ES: 'Espagne',
  EE: 'Estonie',
  VA: 'État de la Cité du Vatican',
  FM: 'États fédérés de Micronésie',
  US: 'États-Unis',
  ET: 'Éthiopie',
  FJ: 'Fidji',
  FI: 'Finlande',
  FR: 'France',
  GA: 'Gabon',
  GM: 'Gambie',
  GE: 'Géorgie',
  GI: 'Gibraltar',
  GR: 'Grèce',
  GD: 'Grenade',
  GL: 'Groenland',
  GP: 'Guadeloupe',
  GT: 'Guatemala',
  GN: 'Guinée',
  GW: 'Guinée-Bissau',
  GY: 'Guyana',
  GF: 'Guyane française',
  HN: 'Honduras',
  HU: 'Hongrie',
  NF: 'Île Norfolk',
  KY: 'Îles Caïmans',
  CK: 'Îles Cook',
  FO: 'Îles Féroé',
  FK: 'Îles Malouines',
  MH: 'Îles Marshall',
  PN: 'Îles Pitcairn',
  SB: 'Îles Salomon',
  TC: 'Îles Turques-et-Caïques',
  VG: 'Îles Vierges britanniques',
  IN: 'Inde',
  ID: 'Indonésie',
  IE: 'Irlande',
  IS: 'Islande',
  IL: 'Israël',
  IT: 'Italie',
  JM: 'Jamaïque',
  JP: 'Japon',
  JO: 'Jordanie',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KG: 'Kirghizistan',
  KI: 'Kiribati',
  KW: 'Koweït',
  RE: 'La Réunion',
  LA: 'Laos',
  LS: 'Lesotho',
  LV: 'Lettonie',
  LI: 'Liechtenstein',
  LT: 'Lituanie',
  LU: 'Luxembourg',
  MK: 'Macédoine',
  MG: 'Madagascar',
  MY: 'Malaisie',
  MW: 'Malawi',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malte',
  MA: 'Maroc',
  MQ: 'Martinique',
  MU: 'Maurice',
  MR: 'Mauritanie',
  YT: 'Mayotte',
  MX: 'Mexique',
  MD: 'Moldavie',
  MC: 'Monaco',
  MN: 'Mongolie',
  ME: 'Monténégro',
  MS: 'Montserrat',
  MZ: 'Mozambique',
  NA: 'Namibie',
  NR: 'Nauru',
  NP: 'Népal',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigéria',
  NU: 'Niue',
  NO: 'Norvège',
  NC: 'Nouvelle-Calédonie',
  NZ: 'Nouvelle-Zélande',
  OM: 'Oman',
  UG: 'Ouganda',
  PW: 'Palaos',
  PA: 'Panama',
  PG: 'Papouasie-Nouvelle-Guinée',
  PY: 'Paraguay',
  NL: 'Pays-Bas',
  PE: 'Pérou',
  PH: 'Philippines',
  PL: 'Pologne',
  PF: 'Polynésie française',
  PT: 'Portugal',
  QA: 'Qatar',
  HK: 'R.A.S. chinoise de Hong Kong',
  DO: 'République dominicaine',
  CZ: 'République tchèque',
  RO: 'Roumanie',
  GB: 'Royaume-Uni',
  RU: 'Russie',
  RW: 'Rwanda',
  KN: 'Saint-Christophe-et-Niévès',
  SM: 'Saint-Marin',
  PM: 'Saint-Pierre-et-Miquelon',
  VC: 'Saint-Vincent-et-les-Grenadines',
  SH: 'Sainte-Hélène',
  LC: 'Sainte-Lucie',
  WS: 'Samoa',
  ST: 'Sao Tomé-et-Principe',
  SN: 'Sénégal',
  RS: 'Serbie',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapour',
  SK: 'Slovaquie',
  SI: 'Slovénie',
  SO: 'Somalie',
  LK: 'Sri Lanka',
  SE: 'Suède',
  CH: 'Suisse',
  SR: 'Suriname',
  SJ: 'Svalbard et Jan Mayen',
  SZ: 'Swaziland',
  TJ: 'Tadjikistan',
  TW: 'Taïwan',
  TZ: 'Tanzanie',
  TD: 'Tchad',
  TH: 'Thaïlande',
  TG: 'Togo',
  TO: 'Tonga',
  TT: 'Trinité-et-Tobago',
  TN: 'Tunisie',
  TM: 'Turkménistan',
  TR: 'Turquie',
  TV: 'Tuvalu',
  UA: 'Ukraine',
  UY: 'Uruguay',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Vietnam',
  WF: 'Wallis-et-Futuna',
  YE: 'Yémen',
  ZM: 'Zambie',
  ZW: 'Zimbabwe'
}

export {
  countries
}