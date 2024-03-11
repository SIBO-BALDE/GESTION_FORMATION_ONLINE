// création du tableau d'objets
let formations = [
  {
    id: 1,
    titre: "JavaScript",
    Description:
      "Le langage JavaScript est incontournable lorsque vous souhaitez travailler sur des sites ou application web.Du fait de son passé et de sa mauvaise réputation, il a été largement sous-estimé par les développeurs qui ne voyaient en lui qu’un simple langage de manipulation HTML et de validation de formulaire.Les choses ont bien changé, il est maintenant absolument nécessaire de considérer JavaScript comme un langage de premier plan.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    commentaire: [],
  },
  {
    id: 2,
    titre: "PHP",
    Description:
      "Je suis ravi de vous présenter et vous parler d'une opportunité incroyable qui s'offre à vous : la formation sur le HTML, le CSS et le PHP. Ces langages informatiques sont les fondements même du développement web moderne, et ma mission aujourd'hui est de vous encourager à vous inscrire et à vous plonger dans cet univers passionnant.",
    image: "https://www.sectorlink.com/img/blog/php-web-development.jpg",
    commentaire: [],
  },
  {
    id: 3,
    titre: "HTML",
    Description:
      "La réponse est simple : c’est la plus complète que vous pouvez trouver sur internet, et c’est certainement avec moi que vous aurez le plus d’aide, car je réponds à vos questions dans la journée. Cette formation est évolutive : je rajoute tous les mois du nouveau contenu, comme par exemple des gros projets, des nouvelles notions encore plus profondes et bien d’autres choses qui sont nécessaires pour rendre cette formation ULTIME",
    image:
      "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn",
    commentaire: [],
  },
  {
    id: 4,
    titre: "JAVA",
    Description:
      "Apprenez à programmer avec Java avec ce cours de référence :Simple, rapide, ludique et pratique avec de nombreux exercices auto-corrigésCouvre l'ensemble des concepts indispensable pour réaliser votre première application JavaPrésenté par un professionnel et enseignant de près de 20 ans d'expérienceVous serez guidé pas à pas sur le chemin de la réussite grâce à une progression pédagogique efficace.Chaque chapitre traite d'un et un seul concept : un cours clair et précisChaque concept fait le plus souvent l'objet d'un atelier dédié : mettez vos nouvelles connaissances en pratique immédiatement !",
    image:
      "https://api.free-work.com/media/cache/resolve/blog_post_image_large/l-ecosysteme-java-en-profonde-mutation-quelles-consequences-sur-l-it-gZ9moKGGtQE3ER2f.jpg",
    commentaire: [],
  },
  {
    id: 5,
    titre: "CSS",
    Description:
      "CSS est le langage de style du webC'est grâce à lui que vous pourrez animer, styliser, mettre en page et structurer la disposition de vos pages. Il est incontournable.Mais CSS, c'est trop facile Cette remarque était plutôt vraie il y a une quinzaine d'années, mais CSS a énormément évolué et compte aujourd'hui des centaines de propriétés et des milliers de valeurs différentes.Tout le monde peut changer une couleur en CSS, mais combien maîtrisent vraiment ce langage ?Certes, CSS est simple à prendre en main, car tout le monde peut écrire un background-color, mais combien connaissent l'empilement des couches, les layouts et leurs particularités, tous les modules de positionnement modernes, etc ... ?.",
    image:
      "https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU",
    commentaire: [],
  },
  {
    id: 6,
    titre: "Angular",
    Description:
      "Alors comme ça, vous souhaitez vous former au développement d'applications Web avec la dernière version d'Angular ? Vous aussi, vous rêvez de construire des sites web dynamiques, qui réagissent immédiatement aux moindres interactions de vos utilisateurs, avec une performance optimale ? Eh, ça tombe bien, vous êtes au bon endroit !Nous vivons une époque excitante pour le développement Web avec JavaScript. Il y a une multitude de nouveaux Frameworks disponibles, et encore une autre multitude qui éclot jour après jour. Nous allons voir pourquoi vous devez faire le pari de vous lancer avec Angular, et ce que vous allez pouvoir faire avec ce petit bijou, sorti tout droit de la tête des ingénieurs de Google. ",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/1*dYhDHdCt0lhVRdj0IjrI7A.png",
    commentaire: [],
  },
  {
    id: 7,
    titre: "CMS",
    Description:
      "Maitrisez et familiarisez-vous avec l’un des CMS les plus populaires avec le cours le plus complet et élu « meilleure vente » sur Udemy 3 ans de suite !!Que vous soyez utilisateur débutant ou confirmé, cette formation WordPress s’adapte à tous vos besoins, qu’ils soient personnels ou professionnels. Vous disposerez de cours avec un accès à vie sans oublier que c’est satisfait ou remboursé durant 30 jours.Grâce à ces cours, vous allez découvrir les toutes premières prémices de ce CMS à la fois simple, facile et puissant qui par la suite vous donneront la capacité de mettre en place votre site web du début à la fin sans compter que vous apprendrez à développer parallèlement de nouvelles fonctionnalités pour faire de votre site une plateforme unique et performante et tout cela abstraction faite du marketing digital.",
    image:
      "https://img-0.journaldunet.com/_gaU927duii6sU9oL-urlVB8-_Y=/1500x/smart/b267c65dc9324f7aa4472a0eba21d2cf/ccmcms-jdn/39470886.jpg",
    commentaire: [],
  },
  {
    id: 8,
    titre: "JQUERY",
    Description:
      "Dans cette formation jQuery, vous découvrirez toute la puissance de cette bibliothèque Javascript, qui vous permettra de créer des applications dynamiques très rapidement et simplement. Vous apprendrez à sélectionner, manipuler et animer les éléments de vos pages web, afin d’offrir plus d’interactivité sur vos sites. Vous réaliserez aux travers de travaux pratiques, de petites applications permettant d’améliorer grandement le confort de navigation de vos visiteurs. ",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310150747/Jquery-Tutorial.jpg",
    commentaire: [],
  },
  {
    id: 9,
    titre: "REACT",
    Description:
      "Bienvenue à la Formation React JS pour Tous - L'Ultime Formation.La formation en Français qui vous permet de Maîtriser React JS, (avec les HOOKS), REDUX, FIREBASE, APIs et autres avec des exercices simples, accessibles à tous, ainsi qu'avec la réalisation d'une vraie application React JS qu'on codera ensemble, étape par étape, du début jusqu'à son déploiement sur Firebase !Dans cette description, je préfère vous épargner la littérature. Si vous êtes ici c'est que vous savez déjà ce que c'est que React JS. Je vais donc aller droit au but et vous présenter concrètement le contenu de cette formation avec le plus de détails possible.",
    image:
      "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg",
    commentaire: [],
  },
];

// insertion du tableau de formations dans le localSorage
if (
  localStorage.getItem("formations") == null ||
  localStorage.getItem("formations") == undefined
) {
  localStorage.setItem("formations", JSON.stringify(formations));
}
function contentFormation(item) {
  candidater_carte.innerHTML += `
        <div class="card" style="width: 18rem; height:94%;" >
        <img src="${item.image}" class="card-img-top" alt="..." id="img-formation">
        <div class="card-body text-center" style="height: 100%;">
            <p class="card-title" style="font-size: 16px;"> ${item.titre}</p>
            <div class="inf d-flex">
    
                <div class="inf1 d-flex mt-2"><img
                        src="https://yt3.googleusercontent.com/oYOaUPpYjb58Bn1PeV7GKJq3eEMGqQF0TSsDy4qYAzhnB8WQVk6KuzL89WDwMtaxIkRY-23dh7A=s1000-c-k-c0x00ffffff-no-rj"
                        alt="" class="rounded-circle " style="width:30px; height:30px;">
                    &nbsp;<p style="font-size: 10px;">Darray Technologie</p>&nbsp;
                </div>
                <div class="inf2">
                    <p class="icon mt-2 ">
    
                        <a href=""><img
                                src="https://t3.ftcdn.net/jpg/06/56/46/30/240_F_656463080_rP5yQCIXVgUzcyjsSmqyDSNeya8Cc8ZL.jpg"
                                alt="" style="width: 30px;height: 30px;"></a>
                                <button class=" clr buttonModal" data-modal="modalTwo"  >
                                <img src="../public/images/formations/commenter.png" onclick="formationClique(${item.id})" alt=""
                                    style="width: 24px;height: 24px;"></button>
                                    <button class=" clr buttonModal" data-modal="modalOne">
                                    <img src="../public/images/formations/voircomment.png" onclick="formationClique(${item.id}),afficherCommentaire()"  alt="" ></button>
                    </p>
                </div>
            </div>
            <div class="btn3 bd-black ">
    
                <a href="../details-formation/details-formation-html.html" class="btn btn-primary"><button><button>ouvrir</button></button></a>
                <p class="star"><i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="0"></i>
                    <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="1"></i>
                    <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="2"></i>
                    <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="3"></i>
                    <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="4"></i>
                </p>
    
                
            </div>
        </div>
    
    </div>
        `;
  // empêche la fermeture du popup au click du button publier
  // document.getElementById('btnPublier').removeAttribute('class');

  let modalBtns = [...document.querySelectorAll(".buttonModal")];
  // le destructuring
  // let [btn1, btn2] = [...document.querySelectorAll(".buttonModal")];
  // console.log(btn1);
  // console.log(btn2);
  modalBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
    };
  });
  let closeBtns = [...document.querySelectorAll(".close")];
  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.closest(".modal");
      modal.style.display = "none";
      champsEmail.value=""
      champsMessage.value=""
      starPosition(0)
    };
  });
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
      champsEmail.value=""
      champsMessage.value=""
      starPosition(0)
    }
  };
}
// affichage des formations

// recuperation de la balise qui contient toutes les cates
let candidater_carte = document.getElementById("candidater_carte");
// la fonction qui affiche toutes les formation
function afficherFormation() {
  formations.forEach((item) => {
    contentFormation(item);
  });
}
afficherFormation();

// le code qui recherche
let champs = document.getElementById("searchBar");
let nombre_formation = document.getElementById("nombre_formation");
champs.addEventListener("input", () => {
  // nombre_formation.innerHTML="contenu changé"
  candidater_carte.innerHTML = "";
  let compteur = 0;
  let isExisting = false;
  formations.forEach((element) => {
    if (element.titre.toLowerCase().includes(champs.value.toLowerCase())) {
      compteur++;
      isExisting = true;
      contentFormation(element);
      //   candidater_carte.innerHTML += `
      //     <div class="card" style="width: 18rem; height:94%;" >
      //     <img src="${element.image}" class="card-img-top" alt="..." id="img-formation">
      //     <div class="card-body text-center" style="height: 100%;">
      //         <p class="card-title" style="font-size: 16px;"> ${element.titre}</p>
      //         <div class="inf d-flex">

      //             <div class="inf1 d-flex mt-2"><img
      //                     src="https://yt3.googleusercontent.com/oYOaUPpYjb58Bn1PeV7GKJq3eEMGqQF0TSsDy4qYAzhnB8WQVk6KuzL89WDwMtaxIkRY-23dh7A=s1000-c-k-c0x00ffffff-no-rj"
      //                     alt="" class="rounded-circle " style="width:30px; height:30px;">
      //                 &nbsp;<p style="font-size: 10px;">Darray Technologie</p>&nbsp;
      //             </div>
      //             <div class="inf2">
      //                 <p class="icon mt-2 ">

      //                     <a href=""><img
      //                             src="https://t3.ftcdn.net/jpg/06/56/46/30/240_F_656463080_rP5yQCIXVgUzcyjsSmqyDSNeya8Cc8ZL.jpg"
      //                             alt="" style="width: 30px;height: 30px;"></a>
      //                             <button class=" clr button" data-modal="modalTwo"><img src="../public/images/formations/commenter.png" alt=""
      //                                 style="width: 24px;height: 24px;"></button>
      //                                 <button class=" clr button" data-modal="modalOne"><img src="../public/images/formations/voircomment.png" alt=""></button>
      //                 </p>
      //             </div>
      //         </div>
      //         <div class="btn3 bd-black ">

      //             <a href="../details-formation/details-formation-html.html" class="btn btn-primary"><button><button>ouvrir</button></button></a>
      //             <p class="star"><i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="0"></i>
      //                 <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="1"></i>
      //                 <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="2"></i>
      //                 <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="3"></i>
      //                 <i class="fa-solid fa-star" style="color: #e8e8e8;" data-index="4"></i>
      //             </p>

      //         </div>
      //     </div>

      // </div>
      //     `;
    }
  });

  if (isExisting != true) {
    // alert('recherche introuvable');
    // afficherFormation()
    // champs.value=""
    candidater_carte.innerHTML =
      "<h3 id='error_message'>recherche introuvable</h3>";
  }
  if (compteur > 1) {
    nombre_formation.innerHTML = compteur + " formations";
  } else {
    nombre_formation.innerHTML = compteur + " formation";
  }
});
// recuperation de l'identifiant de la formation cliquée
let currentFormationId = 0;
function formationClique(id) {
  currentFormationId = id;
  // alert("vous avez cliqué sur la formation "+id)
}
// let closePopup=document.getElementById('closePopup');
let champsEmail = document.getElementById("champsEmail");
let champsMessage = document.getElementById("champsMessage");
function envoyerCommentaire() {
  let tableauTmp = JSON.parse(localStorage.getItem("formations"));
  console.warn(tableauTmp);
  // permet de recuperer l'element spécifique sur un tableau
  // const formationTrouvee = tableauTmp.find((element) => element.id==currentFormationId);
  // console.log(formationTrouvee);
  if (champsEmail.value == "" || champsMessage.value == "") {
    Swal.fire("Désolé!!!", "Renseignez les champs sil vous plaît", "error");
  } else {
    if (nbEtoile == 0) {
      // alert('la note est obligatoire')
      Swal.fire("Désolé!!!", "la note est obligatoire", "error");
    } else {
      let commentaire = {
        note: nbEtoile,
        email: champsEmail.value,
        message: champsMessage.value,
      };
      console.warn(commentaire);

      tableauTmp.forEach((element) => {
        if (element.id == currentFormationId) {
          element.commentaire.push(commentaire);
        }
      });
      // champsEmail=""
      // champsMessage=""
      localStorage.setItem("formations", JSON.stringify(tableauTmp));
      Swal.fire("Merci!!!", "commantaire bien envoyé", "success");
      document.getElementById('modalTwo').style.display='none';
      champsEmail.value=""
      champsMessage.value=""
      starPosition(0)
    }
  }
}

// la fonction qui affiche les commentaires de la formation
let moy=0;
let listeCommentaire = document.getElementById("listeCommentaire");
function afficherCommentaire() {
  listeCommentaire.innerHTML = "";
  let tableauTmp = JSON.parse(localStorage.getItem("formations"));

  const formationTrouvee = tableauTmp.find(
    (element) => element.id == currentFormationId
  );
  let som=0;
  for (let i = 0; i < formationTrouvee.commentaire.length; i++) {
    // som+=formationTrouvee.commentaire[i].note;
      som=som+formationTrouvee.commentaire[i].note;
        listeCommentaire.innerHTML += `
      <div class="comment-item">
      <span>${formationTrouvee.commentaire[i].email}</span>
      <p>${formationTrouvee.commentaire[i].message}</p>
      <span id="setStar">${formationTrouvee.commentaire[i].note} etoiles</span>

      
    </div>
    `;
    // listNoteUser(formationTrouvee.commentaire[i].note);
    // alert(formationTrouvee.commentaire[i].email)
    
    
  }
  console.warn(som);
  if(formationTrouvee.commentaire.length==0){
    moy=0;
  }else{

    moy = Math.floor(som/formationTrouvee.commentaire.length);
  }
  document.getElementById('moyNote').innerHTML="la moyenne des notes est : "+moy;
  console.warn(moy);

  // alert('la liste des commentaires');
}



// la fonction qui affiche la note sous format etoile
let starNotes = document.querySelectorAll("#starNote"); 
function listNoteUser(note) {

  console.error(starNotes);
  for (let i = 0; i < note; i++) {
    starNotes[i].setAttribute("class", "bi bi-star-fill");
  }
  
}

// systeme d'etoile
let nbEtoile = 0;
let stars = document.querySelectorAll("#star");
function starPosition(id) {
  nbEtoile = id;
  //  enleve le background de l'etoile
  stars.forEach((star) => {
    star.setAttribute("class", "bi bi-star");
  });
  // alert('etoile '+id+" cliquée");
  //  remet le background de l'etoile

  for (let i = 0; i < id; i++) {
    stars[i].setAttribute("class", "bi bi-star-fill");
  }
}



// ancien code
// const searchBar = document.querySelector("#searchInput");
// searchBar.addEventListener("keyup", (e) => {

//     const searchedLetters = e.target.value;
//     const cards = document.querySelectorAll(".card");

//     filterElements(searchedLetters, cards)
// });

// function filterElements(letters, elements) {
//     if (letters.length > 2) {
//         for (let i = 0; i < elements.length; i++) {

//             if (elements[i].textContent.toLowerCase().includes(letters)) {
//                 elements[i].style.display = "";
//             }
//             else {
//                 elements[i].style.display = "none";
//             }
//     }

// }
// }
// ---------
// function search_formations() {
//     let input = document.getElementById('searchBar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('card');
//     // if (letters.length > 2) {

//         for (i = 0; i < x.length; i++) {
//             if (!x[i].innerHTML.toLowerCase().includes(input)) {
//                 x[i].style.display = "none";
//             }
//             else {
//                 x[i].style.display = "list-items";
//             }
//         }
//     // }
// }
