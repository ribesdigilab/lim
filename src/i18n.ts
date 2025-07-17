import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      
      anghelu_ruju: {
        cardTitle: "Necropoli di Anghelu Ruju",
        location: "Comune di Alghero",
        mainTitle: "Necropoli di Anghelu Ruju",
        descTitle: "Descrizione",
        description: "La più vasta necropoli prenuragica della Sardegna, con 38 tombe scavate nella roccia. Simbolo del profondo legame tra le comunità neolitiche e il culto dei morti.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      puttu_codinu: {
        cardTitle: "Necropoli di Puttu Codinu",
        location: "Comune di Villanova Monteleone",
        mainTitle: "Necropoli di Puttu Codinu",
        descTitle: "Descrizione",
        description: "Nove tombe ipogeiche incastonate tra i rilievi di Monte Minerva. Testimonianza dei rituali collettivi delle comunità neolitiche.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      monte_siseri: {
        cardTitle: "Necropoli di Monte Siseri / S’Incantu",
        location: "Comune di Putifigari",
        mainTitle: "Necropoli di Monte Siseri / S’Incantu",
        descTitle: "Descrizione",
        description: "Domus de janas celebri per le raffinate decorazioni interne, simboli di un profondo culto dei defunti.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      mesu_e_montes: {
        cardTitle: "Necropoli di Mesu ’e Montes",
        location: "Comune di Ossi",
        mainTitle: "Necropoli di Mesu ’e Montes",
        descTitle: "Descrizione",
        description: "Diciotto domus de janas scolpite nella roccia ai piedi del Monte Mamas, ricche di simboli e antichi rituali funerari.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      su_crucifissu_mannu: {
        cardTitle: "Necropoli di Su Crucifissu Mannu",
        location: "Comune di Porto Torres",
        mainTitle: "Necropoli di Su Crucifissu Mannu",
        descTitle: "Descrizione",
        description: "Una delle necropoli più estese della Sardegna settentrionale, con domus de janas ornate da simboli legati al culto dei defunti.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      orto_beneficio: {
        cardTitle: "Domus de janas dell’Orto del Beneficio Parrocchiale",
        location: "Comune di Sennori",
        mainTitle: "Domus de janas dell’Orto del Beneficio Parrocchiale",
        descTitle: "Descrizione",
        description: "Due domus de janas scavate nella roccia calcarea, testimonianza di rituali funerari neolitici nel cuore del centro abitato di Sennori.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      roccia_elefante: {
        cardTitle: "Domus de janas della Roccia dell’Elefante",
        location: "Comune di Castelsardo",
        mainTitle: "Domus de janas della Roccia dell’Elefante",
        descTitle: "Descrizione",
        description: "Celebre per la sua forma naturale che ricorda un elefante, la roccia ospita due domus de janas scavate nella pietra vulcanica.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      parco_petroglifi: {
        cardTitle: "Parco dei Petroglifi",
        location: "Comune di Cheremule",
        mainTitle: "Parco dei Petroglifi",
        descTitle: "Descrizione",
        description: "Un museo a cielo aperto con incisioni rupestri che raffigurano simboli e scene di vita quotidiana preistorica.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      santandrea_priu: {
        cardTitle: "Necropoli di Sant’Andrea Priu",
        location: "Comune di Bonorva",
        mainTitle: "Necropoli di Sant’Andrea Priu",
        descTitle: "Descrizione",
        description: "Una delle necropoli più monumentali della Sardegna, con domus de janas di grandi dimensioni e ambienti riccamente decorati.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      sa_pala_larga: {
        cardTitle: "Necropoli di Sa Pala Larga",
        location: "Comune di Bonorva",
        mainTitle: "Necropoli di Sa Pala Larga",
        descTitle: "Descrizione",
        description: "Ampie camere funerarie scavate nella roccia basaltica, con tracce di pitture parietali e incisioni simboliche.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      sos_forrighesos: {
        cardTitle: "Necropoli di Sos Furrighesos",
        location: "Comune di Anela",
        mainTitle: "Necropoli di Sos Furrighesos",
        descTitle: "Descrizione",
        description: "Sette domus de janas ornate da incisioni rupestri, immerse nei boschi di Anela, testimoni di antichi culti funerari.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      iloi_ispiluncas: {
        cardTitle: "Necropoli di Iloi – Ispiluncas",
        location: "Comune di Sedilo",
        mainTitle: "Necropoli di Iloi – Ispiluncas",
        descTitle: "Descrizione",
        description: "Tombe ipogeiche scavate nella roccia calcarea con decorazioni simboliche, testimoni della spiritualità delle comunità prenuragiche.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      mandras: {
        cardTitle: "Necropoli di Mandras o Mrandas",
        location: "Comune di Ardauli",
        mainTitle: "Necropoli di Mandras o Mrandas",
        descTitle: "Descrizione",
        description: "Tombe ipogeiche scavate nella roccia durante il Neolitico, con camere funerarie che testimoniano antichi rituali collettivi.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      brodu: {
        cardTitle: "Necropoli di Brodu",
        location: "Comune di Oniferi",
        mainTitle: "Necropoli di Brodu",
        descTitle: "Descrizione",
        description: "Complesso funerario prenuragico con domus de janas usate come sepolture collettive durante il Neolitico.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      istevene: {
        cardTitle: "Necropoli di Istevéne",
        location: "Comune di Mamoiada",
        mainTitle: "Necropoli di Istevéne",
        descTitle: "Descrizione",
        description: "Tombe ipogeiche con decorazioni simboliche scolpite nella roccia, legate ai culti funerari prenuragici.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      pranu_mutteddu: {
        cardTitle: "Parco Archeologico di Pranu Mutteddu",
        location: "Comune di Goni",
        mainTitle: "Parco Archeologico di Pranu Mutteddu",
        descTitle: "Descrizione",
        description: "Uno dei più vasti complessi megalitici della Sardegna, con menhir allineati e tombe preistoriche immerse nella macchia mediterranea.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      },
      montessu: {
        cardTitle: "Necropoli di Montessu",
        location: "Comune di Villaperuccio",
        mainTitle: "Necropoli di Montessu",
        descTitle: "Descrizione",
        description: "Una delle più estese necropoli della Sardegna, con domus de janas scavate nella roccia e decorazioni simboliche legate ai culti funerari.",
        pigmentTitle: "Pigmenti",
        pigmentInfoTitle: "Presenza di pigmenti",
        pigmentDescTitle: "Descrizione"
      }
    },
  
  },
  en: {
    translation: {
      anghelu_ruju: {
      cardTitle: "Necropolis of Anghelu Ruju",
      location: "Municipality of Alghero",
      mainTitle: "Necropolis of Anghelu Ruju",
      descTitle: "Description",
      description: "The largest Prenuragic necropolis in Sardinia, featuring 38 rock-cut tombs. It symbolizes the profound bond between Neolithic communities and the cult of the dead.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    puttu_codinu: {
      cardTitle: "Necropolis of Puttu Codinu",
      location: "Municipality of Villanova Monteleone",
      mainTitle: "Necropolis of Puttu Codinu",
      descTitle: "Description",
      description: "Nine hypogeal tombs nestled among the ridges of Monte Minerva. A testament to the collective rituals of Neolithic communities.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    monte_siseri: {
      cardTitle: "Necropolis of Monte Siseri / S’Incantu",
      location: "Municipality of Putifigari",
      mainTitle: "Necropolis of Monte Siseri / S’Incantu",
      descTitle: "Description",
      description: "Famous for its refined internal decorations, these domus de janas reflect a deep cult of the deceased.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    mesu_e_montes: {
      cardTitle: "Necropolis of Mesu ’e Montes",
      location: "Municipality of Ossi",
      mainTitle: "Necropolis of Mesu ’e Montes",
      descTitle: "Description",
      description: "Eighteen domus de janas carved into the rock at the foot of Monte Mamas, rich in symbols and ancient funerary rituals.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    su_crucifissu_mannu: {
      cardTitle: "Necropolis of Su Crucifissu Mannu",
      location: "Municipality of Porto Torres",
      mainTitle: "Necropolis of Su Crucifissu Mannu",
      descTitle: "Description",
      description: "One of the largest necropolises in northern Sardinia, featuring domus de janas adorned with symbols related to the cult of the dead.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    orto_beneficio: {
      cardTitle: "Domus de Janas of the Parish Benefice Garden",
      location: "Municipality of Sennori",
      mainTitle: "Domus de Janas of the Parish Benefice Garden",
      descTitle: "Description",
      description: "Two domus de janas carved into limestone, evidence of Neolithic funerary rituals in the heart of Sennori.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    roccia_elefante: {
      cardTitle: "Domus de Janas of Elephant Rock",
      location: "Municipality of Castelsardo",
      mainTitle: "Domus de Janas of Elephant Rock",
      descTitle: "Description",
      description: "Known for its natural elephant-like shape, the rock houses two domus de janas carved in volcanic stone.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    parco_petroglifi: {
      cardTitle: "Petroglyph Park",
      location: "Municipality of Cheremule",
      mainTitle: "Petroglyph Park",
      descTitle: "Description",
      description: "An open-air museum with rock engravings depicting symbols and scenes of prehistoric daily life.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    santandrea_priu: {
      cardTitle: "Necropolis of Sant’Andrea Priu",
      location: "Municipality of Bonorva",
      mainTitle: "Necropolis of Sant’Andrea Priu",
      descTitle: "Description",
      description: "One of Sardinia’s most monumental necropolises, with large domus de janas and richly decorated chambers.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    sa_pala_larga: {
      cardTitle: "Necropolis of Sa Pala Larga",
      location: "Municipality of Bonorva",
      mainTitle: "Necropolis of Sa Pala Larga",
      descTitle: "Description",
      description: "Spacious funerary chambers carved into basalt rock, showing traces of wall paintings and symbolic engravings.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    sos_forrighesos: {
      cardTitle: "Necropolis of Sos Furrighesos",
      location: "Municipality of Anela",
      mainTitle: "Necropolis of Sos Furrighesos",
      descTitle: "Description",
      description: "Seven domus de janas decorated with rock engravings, immersed in the forests of Anela, evidence of ancient funerary cults.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    iloi_ispiluncas: {
      cardTitle: "Necropolis of Iloi – Ispiluncas",
      location: "Municipality of Sedilo",
      mainTitle: "Necropolis of Iloi – Ispiluncas",
      descTitle: "Description",
      description: "Hypogeal tombs carved into limestone with symbolic decorations, bearing witness to the spirituality of Prenuragic communities.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    mandras: {
      cardTitle: "Necropolis of Mandras or Mrandas",
      location: "Municipality of Ardauli",
      mainTitle: "Necropolis of Mandras or Mrandas",
      descTitle: "Description",
      description: "Neolithic hypogeal tombs with funeral chambers testifying to ancient collective rituals.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    brodu: {
      cardTitle: "Necropolis of Brodu",
      location: "Municipality of Oniferi",
      mainTitle: "Necropolis of Brodu",
      descTitle: "Description",
      description: "Prenuragic funerary complex with domus de janas used for collective burials during the Neolithic.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    istevene: {
      cardTitle: "Necropolis of Istevéne",
      location: "Municipality of Mamoiada",
      mainTitle: "Necropolis of Istevéne",
      descTitle: "Description",
      description: "Hypogeal tombs with symbolic decorations carved in rock, related to Prenuragic funerary cults.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    pranu_mutteddu: {
      cardTitle: "Archaeological Park of Pranu Mutteddu",
      location: "Municipality of Goni",
      mainTitle: "Archaeological Park of Pranu Mutteddu",
      descTitle: "Description",
      description: "One of Sardinia’s largest megalithic complexes, with aligned menhirs and prehistoric tombs immersed in Mediterranean scrub.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
    montessu: {
      cardTitle: "Necropolis of Montessu",
      location: "Municipality of Villaperuccio",
      mainTitle: "Necropolis of Montessu",
      descTitle: "Description",
      description: "One of Sardinia’s most extensive necropolises, with domus de janas carved in rock and symbolic decorations linked to funerary cults.",
      pigmentTitle: "Pigments",
      pigmentInfoTitle: "Presence of pigments",
      pigmentDescTitle: "Description"
    },
      info: {
        title: 'Information',
        text: 'Example info text',
      },
      pigments: {
        'Rosso Scuro': 'Dark Red',
        'Marrone': 'Brown',
        'Sabbia': 'Sand',
        'Verde Oliva': 'Olive Green',
        'Nero': 'Black',
      },
      language: 'Language',
      'Scegli il pigmento:': 'Choose the pigment',
      'Scegli il simbolo': 'Choose the symbol',
      'Scegli la Domus': 'Choose the Domus',
      'Il muro dei pigmenti': 'The Wall of Pigments',
      'Tocca per continuare': 'Tap to continue',
    },
  },
  sc: {
    translation: {
      info: {
        title: 'Informatziones',
        text: 'Esempiu testu informatziones',
      },
      pigments: {
        'Rosso Scuro': 'Arrùbiu scuru',
        'Marrone': 'Brunu',
        'Sabbia': 'Arena',
        'Verde Oliva': 'Bidre Oliva',
        'Nero': 'Neru',
      },
      language: 'Limba',
      'Scegli il pigmento:': 'Scegli il pigmento',
      'Scegli il simbolo': 'Scegli su simbulu',
      'Scegli la Domus': 'Scegli sa Domus',
      'Il muro dei pigmenti': 'Su muru de is pigmentos',
      'Tocca per continuare': 'Toca pro cuntinuare',
      'Indietro': 'Indietru',
    },
    anghelu_ruju: {
      cardTitle: "Necropoli de Anghelu Ruju",
      location: "Cumune de Alghero",
      mainTitle: "Necropoli de Anghelu Ruju",
      descTitle: "Descritzione",
      description: "Sa necropoli prenuràgica prus bènghidu de sa Sardigna, cun 38 tomas scavadas in sa pedra. Simbolu de su ligàmu profundu intre is comunitades neoliticas e su cultu de is mortos.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    puttu_codinu: {
      cardTitle: "Necropoli de Puttu Codinu",
      location: "Cumune de Villanova Monteleone",
      mainTitle: "Necropoli de Puttu Codinu",
      descTitle: "Descritzione",
      description: "Nue tombas ipogeas incastonadas intre is rilievis de Monte Minerva. Testimonianza de is rituales colectivos de is comunitades neoliticas.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    monte_siseri: {
      cardTitle: "Necropoli de Monte Siseri / S’Incantu",
      location: "Cumune de Putifigari",
      mainTitle: "Necropoli de Monte Siseri / S’Incantu",
      descTitle: "Descritzione",
      description: "Domus de janas celebri pro is decoratziones interne raffinate, simbolos de un cultu profundu de is mortos.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    mesu_e_montes: {
      cardTitle: "Necropoli de Mesu ’e Montes",
      location: "Cumune de Ossi",
      mainTitle: "Necropoli de Mesu ’e Montes",
      descTitle: "Descritzione",
      description: "Diciotto domus de janas scolpidas in sa pedra a is pè de Monte Mamas, riccas de simbolos e rituales funerarios antigos.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    su_crucifissu_mannu: {
      cardTitle: "Necropoli de Su Crucifissu Mannu",
      location: "Cumune de Porto Torres",
      mainTitle: "Necropoli de Su Crucifissu Mannu",
      descTitle: "Descritzione",
      description: "Una de is necropolis prus estesas de sa Sardigna settentrionale, cun domus de janas ornate de simbolos ligados a su cultu de is mortos.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    orto_beneficio: {
      cardTitle: "Domus de janas de s’Ortu de su Benefìtziu Parrochiale",
      location: "Cumune de Sennori",
      mainTitle: "Domus de janas de s’Ortu de su Benefìtziu Parrochiale",
      descTitle: "Descritzione",
      description: "Duas domus de janas scavadas in sa pedra calcarea, testimònia de is rituales funerarios neoliticos in su core de Sennori.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    roccia_elefante: {
      cardTitle: "Domus de janas de sa Roccia de s’Elefante",
      location: "Cumune de Castelsardo",
      mainTitle: "Domus de janas de sa Roccia de s’Elefante",
      descTitle: "Descritzione",
      description: "Celebre pro sa forma naturale chi ricorda un elefante, sa roccia ospitat duas domus de janas scavadas in pedra vulcanica.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    parco_petroglifi: {
      cardTitle: "Parcu de is Petroglifos",
      location: "Cumune de Cheremule",
      mainTitle: "Parcu de is Petroglifos",
      descTitle: "Descritzione",
      description: "Un museu a cèu aperdu cun incisiones rupestres chi raffigurant simbolos e cenas de vida cotidiana preistorica.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    santandrea_priu: {
      cardTitle: "Necropoli de Sant’Andrea Priu",
      location: "Cumune de Bonorva",
      mainTitle: "Necropoli de Sant’Andrea Priu",
      descTitle: "Descritzione",
      description: "Una de is necropolis prus monumentales de sa Sardigna, cun domus de janas de grandes dimensiones e ambientes riccamente decorados.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    sa_pala_larga: {
      cardTitle: "Necropoli de Sa Pala Larga",
      location: "Cumune de Bonorva",
      mainTitle: "Necropoli de Sa Pala Larga",
      descTitle: "Descritzione",
      description: "Ambas camaras funerarias scavadas in sa pedra basaltica, cun tracas de pitturas parietales e incisiones simbolicas.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    sos_forrighesos: {
      cardTitle: "Necropoli de Sos Furrighesos",
      location: "Cumune de Anela",
      mainTitle: "Necropoli de Sos Furrighesos",
      descTitle: "Descritzione",
      description: "Sette domus de janas decorate cun incisiones rupestres, immesas in is boscos de Anela, testimònia de antiguos cultos funerarios.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    iloi_ispiluncas: {
      cardTitle: "Necropoli de Iloi – Ispiluncas",
      location: "Cumune de Sedilo",
      mainTitle: "Necropoli de Iloi – Ispiluncas",
      descTitle: "Descritzione",
      description: "Tombas ipogeas scavadas in sa pedra calcarea cun decoratziones simbolicas, testimònia de sa spiritualidade de is comunitades prenuràgicas.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    mandras: {
      cardTitle: "Necropoli de Mandras o Mrandas",
      location: "Cumune de Ardauli",
      mainTitle: "Necropoli de Mandras o Mrandas",
      descTitle: "Descritzione",
      description: "Tombas ipogeas scavadas in sa pedra durante su Neoliticu, cun camaras funerarias chi testimòniant antiguos rituales colectivos.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    brodu: {
      cardTitle: "Necropoli de Brodu",
      location: "Cumune de Oniferi",
      mainTitle: "Necropoli de Brodu",
      descTitle: "Descritzione",
      description: "Complessu funerariu prenuràgicu cun domus de janas impreadas comente sepolturas collectivas durante su Neoliticu.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    istevene: {
      cardTitle: "Necropoli de Istevéne",
      location: "Cumune de Mamoiada",
      mainTitle: "Necropoli de Istevéne",
      descTitle: "Descritzione",
      description: "Tombas ipogeas cun decoratziones simbolicas scolpidas in sa pedra, ligadas a is cultos funerarios prenuràgicos.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    pranu_mutteddu: {
      cardTitle: "Parcu Archeologicu de Pranu Mutteddu",
      location: "Cumune de Goni",
      mainTitle: "Parcu Archeologicu de Pranu Mutteddu",
      descTitle: "Descritzione",
      description: "Unu de is complessos megaliticos prus vastos de sa Sardigna, cun menhir allineados e tombas preistoricas immesas in sa macchia mediterranea.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    },
    montessu: {
      cardTitle: "Necropoli de Montessu",
      location: "Cumune de Villaperuccio",
      mainTitle: "Necropoli de Montessu",
      descTitle: "Descritzione",
      description: "Una de is necropolis prus vastas de sa Sardigna, cun domus de janas scavadas in sa pedra e decoratziones simbolicas ligadas a is cultos funerarios.",
      pigmentTitle: "Pigmentos",
      pigmentInfoTitle: "Presèntzia de pigmentos",
      pigmentDescTitle: "Descritzione"
    }
    
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'sc',
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;