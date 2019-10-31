export default {
  data: function () {
    return {
      contentSelectionsFR: [
        {
          type: 'video',
          title: 'Nothing to hide',
          thumbnailName: 'nothing-to-hide.jpg',
          url: 'https://media.zat.im/videos/watch/35badfed-5322-48ac-b5c1-71b1ad88262e',
          tags: [ '#privacy', '#documentaire', '#capitalisme-de-surveillance' ],
          description: 'Nothing to Hide (2017) est un film documentaire franco-allemand de Marc Meillassoux et Mihaela Gladovic, qui s\'intéresse aux effets de la surveillance de masse sur les individus et la société. Proposant un regard critique à propos des lois sur le renseignement mises en place par de nombreux États ces dernières années, le film nous rappelle à quel point le débat sur l’usage des données personnelles est actuel et questionne les fondements de nos démocraties.'
        },

        {
          type: 'video',
          title: 'Démocratie(s)',
          thumbnailName: 'democraties.jpg',
          tags: [ '#democratie', '#politique', '#elections' ],
          description: 'Ce film d\'Henri Poulain, Julien Goetz et Sylvain Lapoix (les créateurs de la série DataGueule) met en évidence les travers de notre démocratie représentative et propose des  alternatives qui fonctionnent et dont nous pourrions nous inspirer. Objectif : explorer son passé pour mieux comprendre cette "crise démocratique" qui est sur toutes les lèvres.',
          url: 'https://peertube.datagueule.tv/videos/watch/0b04f13d-1e18-4f1d-814e-4979aa7c9c44'
        },

        {
          type: 'channel',
          title: 'DataGueule',
          thumbnailName: 'datagueule.jpg',
          description: 'DataGueule, c’est une websérie documentaire créée en 2014 qui présente à chaque épisode, de façon simple et imagée, une problématique sociétale à l’aide de données statistiques soigneusement sélectionnées et commentées (les datas). Un⋅e invité⋅e spécialiste du thème sélectionné enrichit de façon complémentaire l’argumentaire chiffré déjà solide, tout en proposant des solutions qui profiteraient au plus grand nombre. Un excellent moyen de se sensibiliser aux questions et problématiques qui secouent notre civilisation !',
          tags: [ '#DataJournalisme', '#documentaire', '#société' ],
          url: 'https://peertube.datagueule.tv/video-channels/c2fbac48-b069-42dd-b24c-7969c14a1374/videos'
        },

        {
          type: 'channel',
          title: 'Hygiène Mentale',
          thumbnailName: 'hygiene-mentale.jpg',
          description: 'La chaîne Hygiène Mentale se donne pour objectif de nous apprendre à nous forger un esprit critique face aux flux permanents d’informations qui prétendent tous détenir les clés de la vérité. En nous dispensant divers conseils basiques pour ne pas nous laisser tromper par des arguments fallacieux, Christophe Michel (le créateur de la chaîne) nous permet de développer des méthodes d\'autodéfense intellectuelle et de nous faire découvrir les instruments critiques pour nous protéger de la désinformation.',
          tags: [ '#VulgarisationScientifique', '#zététique', '#désinformation' ],
          url: 'https://skeptikon.fr/video-channels/ecf58044-ecfd-46b8-bf6f-d8206bbace38/videos'
        },

        {
          type: 'instance',
          title: 'Académie de Lyon',
          thumbnailName: 'academie-lyon.jpg',
          description: 'L\'instance de l\'Académie de Lyon propose à tous les enseignants des établissements scolaires du territoire d\'héberger les vidéos produites lors de leurs activités pédagogiques. On y trouve donc des vidéos sur des thèmes aussi variés que les mathématiques, l\'informatique et les enjeux du numérique,  les méthodes pédagogiques, la coiffure ou la cuisine. Et les formes aussi sont très variables : tutoriels, captations, reportages, témoignages, interviews, etc.',
          tags: [ '#enseignement', '#pédagogie', '#tutoriel' ],
          url: 'https://tube.ac-lyon.fr/'
        },

        {
          type: 'instance',
          title: 'Colibri Outils Libres',
          thumbnailName: 'colibris.jpg',
          description: 'Cette instance, maintenue et modérée par l\'association Colibris, diffuse des vidéos sur les thèmes de la transition écologique. On y retrouve les nombreuses vidéos utilisées dans les différents Moocs créés par l\'association, des reportages et documentaires sur la nature et l\'écologie, mais aussi des vidéos de Jean-Michel Cornu de la chaîne Trucs d\'animation sur les techniques d\'animation et de facilitation.',
          tags: [ '#écologie', '#permaculture', '#monnaies' ],
          url: 'https://video.colibris-outilslibres.org/videos/local'
        }
      ]
    }
  }
}
