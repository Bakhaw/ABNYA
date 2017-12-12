const mongoose = require('mongoose');

const AnalyseSchema = mongoose.Schema(
  {

    // LEÇON

    date_lecon: String,
    titre_lecon: String,
    liens: String,

    // CHAPITRES

    chapitres: {

      // CHAPITRE 1
      chapitre: {
        nom: String,

        // SOUS-TITRE 1
        soustitre: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 2
        soustitre_2: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 3
        soustitre_3: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 4
        soustitre_4: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 5
        soustitre_5: {
          nom: String,
          cours: String,
        },
      },

      // CHAPITRE 2
      chapitre_2: {
        nom: String,

        // SOUS-TITRE 1
        soustitre: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 2
        soustitre_2: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 3
        soustitre_3: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 4
        soustitre_4: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 5
        soustitre_5: {
          nom: String,
          cours: String,
        },
      },

      // CHAPITRE 3
      chapitre_3: {
        nom: String,

        // SOUS-TITRE 1
        soustitre: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 2
        soustitre_2: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 3
        soustitre_3: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 4
        soustitre_4: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 5
        soustitre_5: {
          nom: String,
          cours: String,
        },
      },

      // CHAPITRE 4
      chapitre_4: {
        nom: String,

        // SOUS-TITRE 1
        soustitre: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 2
        soustitre_2: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 3
        soustitre_3: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 4
        soustitre_4: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 5
        soustitre_5: {
          nom: String,
          cours: String,
        },
      },

      // CHAPITRE 5
      chapitre_5: {
        nom: String,

        // SOUS-TITRE 1
        soustitre: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 2
        soustitre_2: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 3
        soustitre_3: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 4
        soustitre_4: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 5
        soustitre_5: {
          nom: String,
          cours: String,
        },
      },

      // CHAPITRE 6
      chapitre_6: {
        nom: String,

        // SOUS-TITRE 1
        soustitre: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 2
        soustitre_2: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 3
        soustitre_3: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 4
        soustitre_4: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 5
        soustitre_5: {
          nom: String,
          cours: String,
        },
      },

      // CHAPITRE 7
      chapitre_7: {
        nom: String,

        // SOUS-TITRE 1
        soustitre: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 2
        soustitre_2: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 3
        soustitre_3: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 4
        soustitre_4: {
          nom: String,
          cours: String,
        },

        // SOUS-TITRE 5
        soustitre_5: {
          nom: String,
          cours: String,
        },
      },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Analyse', AnalyseSchema, 'analyse');
