const mongoose = require('mongoose');

const DanseSchema = mongoose.Schema(
  {
    date_lecon: String,
    titre_lecon: String,
    chapitres: {
      chapitre: {
        nom: String,
        soustitre: {
          nom: String,
          cours: String
        }
      },
      chapitre_2: {
        nom: String,
        soustitre: {
          nom: String,
          cours: String
        }
      },
      chapitre_3: {
        nom: String,
        soustitre: {
          nom: String,
          cours: String
        }
      },
      chapitre_4: {
        nom: String,
        soustitre: {
          nom: String,
          cours: String
        }
      },
      chapitre_5: {
        nom: String,
        soustitre: {
          nom: String,
          cours: String
        }
      },
      chapitre_6: {
        nom: String,
        soustitre: {
          nom: String,
          cours: String
        }
      },
      chapitre_7: {
        nom: String,
        soustitre: {
          nom: String,
          cours: String
        }
      },
      liens: String
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Danse', DanseSchema, 'danse');
