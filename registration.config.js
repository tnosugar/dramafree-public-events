// DramaFree — Firebase config za registracionu formu vebinara.
//
// Bezbedno za commit: sigurnost se enforce-uje kroz Realtime Database rules,
// ne kroz tajne u ovom fajlu (sigurnost kroz RTDB pravila).
//
// SETUP (operator, u Firebase Console na nsc.agency nalogu):
//   1. Otvori postojeći DramaFree RTDB projekat.
//   2. Project settings (zupčanik) → Your apps → web `</>` → registruj/otvori app
//      → kopiraj firebaseConfig i zameni vrednosti ispod (apiKey, databaseURL, itd.).
//   3. Realtime Database → Rules → dodaj write-only čvor za prijave:
//
//        {
//          "rules": {
//            "registrations": { ".read": false, ".write": true }
//          }
//        }
//
//      (Posetioci mogu da upišu prijavu, ali ne i da čitaju tuđe — read je zatvoren.
//       Pooštri kasnije po potrebi, npr. Anonymous Auth ili App Check.)
//   4. Sačuvaj fajl + commit. Forma postaje funkcionalna na live URL-u.

window.DRAMAFREE_REG_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyCCqHvA97HiGlzjIOxkifdIyeQdBGI_e0g",
    authDomain: "dramafree-a9a50.firebaseapp.com",
    databaseURL: "https://dramafree-a9a50-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dramafree-a9a50",
    storageBucket: "dramafree-a9a50.firebasestorage.app",
    messagingSenderId: "1043840058914",
    appId: "1:1043840058914:web:5df92e7902eff4c06fec7b",
  },

  // RTDB putanja gde se upisuju prijave: /registrations/{push-id}
  PATH: "registrations",

  // Identifikator eventa (čuva se uz svaku prijavu radi kasnijeg filtriranja).
  EVENT: "cisti-jezik-vebinar-2026-06-17",
};
