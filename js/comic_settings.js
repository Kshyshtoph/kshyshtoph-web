//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 15; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files.
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_"; //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "jpg"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs"; //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png"; //file extension of thumbnails
const thumbDefault = "default"; //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First", "Previous", "Next", "Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png"; //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {
  pg = maxpg;
} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
  {
    pgNum: 1, //what page number it is
    title: "The First Page Title", //the title of the page (leaving this blank will default it to "Page X")
    date: writeDate(2021, 3, 16), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
    altText: "Here's some alt text!", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
    imageFiles: 1, //how many image files this page is split into
    authorNotes: `
            <p>If you want to write an author notes section, this'd be the place to do it.</p>
            <p>You can even use whatever html tags you want in here to format it, the script called on your html page should spit out anything you type between these backticks.</p>
            `,
  },
  {
    pgNum: 2,
    title: "The Second Page Title",
    date: writeDate(2021, 3, 17),
    altText: "Here's some more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>You can have different author notes for every page.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
            `,
  },
  {
    pgNum: 3,
    title: "The Third Page Title",
    date: writeDate(2021, 3, 18),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
  },
  {
    pgNum: 4,
    title: "Even If The Title of a Page Is Really Long, It'll Wrap",
    date: writeDate(2021, 3, 19),
    altText: "So much alt text...",
    imageFiles: 1,
    authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
  },
  {
    pgNum: 5,
    title:
      "Also if you don't feel like coming up with a title for every page, you don't have to.",
    date: writeDate(2021, 3, 20),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
  },
  {
    pgNum: 6,
    title: `Unnamed pages won't display a title, and they'll show up as "Page [X]" when listed in the archive`,
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
  },
  {
    pgNum: 7,
    title: "Zeus (jako satyr) i Antiope",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Antiope była wysoko urodzoną niewiastą. Nie jest wprawdzie jasne z kim jej ojca zmajstrował Posejdon ani jakim Polis ówże ojciec dowodził, ale ogólnie historia jakich wiele - piękna księżniczka porwana i zbałamucona przez Zeusa - nota bene posejdonowego brata, ale kto by się zgłębiał w genealogię - pod postacią czegokolwiek mu tym razem przyszło do głowy, celem zapewne rozjuszenia Hery i spłodzenia królewskiego potomstwa. 
	</p><p>Zdaje się jednak, że plan nie zakładał, że po sześciu latach, jakie zeszły parce na figlach, ojciec nie obsypie cudownie odnalezionej córki różami. Nikteusz (optymistyczne miano swoją drogą) kazał ją zaciukać swojemu bratu. Brat zaciukać jej nie chciał, oddał ją na służbę swojej żonie. Ta jednak nie polubiła się z Antiope i wtrąciła ją do lochu, co z kolei nie spodobało się Zeusowi, który obdarzył ją siłą potrzebną do spierdolki z więzienia. Potem poszło gładko, odnalazła synów z Zeusem spłodzonych, wjechali do rodzinki na pełnej i z łokciami, pomordowali wszystkich co ważniejszych i objęli władzę. 
	</p>Ostatni raz tyle zwrotów akcji na raz napotkałem w bajce jak kot palił fajkę. </p>  `,
  },
  {
    pgNum: 8,
    title: "Eos i Titonos",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p> Ku mojemu rozczarowaniu greka nie działa jak nieślubne dziecko polszczyzny i angielskiego, więc Titonos nie zasłynął z wąchania przypadkowo napotkanych cycków. Jego historia jest jednak interesującym przykładem szczególnie niefortunnego kolesia.</p></br><p>
U podstaw jego problemu leżał fakt, że wpadł w oko bogini jutrzenki Eos. Zasadniczo wygryw, kto by nie chciał zostać kochankiem laski dosłownie nie z tego świata. Okazał się wyjątkowo sprawny, nie miał jednak świadomości o drobnej fantazji Eos, która była najwyraźniej mocno into starsi faceci.</p></br><p>
Prosząc Zeusa o nieśmiertelność dla Titonosa, nasza świetlista "zapomniała" wspomnieć, że dobrze byłoby gdyby przy okazji się nie starzał. Zeus, znany ze swoich zapędów naukowych (które dotychczas realizował przeważnie sprawdzając jaki penis ma interfejs zgodny z pochwą ludzkiej kobiety) bardzo chętnie zaangażował się w eksperyment mający na celu zbadanie co się stanie z człowiekiem, który starzeje się, a nie umiera.</p></br><p>
Całe love story kończy się tym, że żyli długo. Ciężko mi rozważać szczęście Titonosa, który ze starości skurczył się do rozmiarów świerszcza, i świerszczem ostatecznie został, bo tak działają greckie mity.</p>
 `,
  },
  {
    pgNum: 9,
    title: "Amor i Psyche",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Ta opowieść uczy, że z ostrymi przedmiotami należy obchodzić się ostrożnie, bo można przypadkiem się hajtnąć.</p></br><p>
	Psyche była obłędnie piękną córką króla (brzmi znajomo, ale greccy bogowie mieli najwyraźniej jasno określony gust). Bogini urody, Afrodyta była z tego tytułu strasznie niezadowolona, bo zamiast spuszczać się na jej ołtarz wierni pocierali się przez kieszeń na widok Psyche. Wysłała więc synka, Amora, Erosa, Kupidyna, zwał jak zwał, żeby bezczelną smarkulę zakochał swoją magiczną strzałą w jakimś paskudniku. Przypadkiem (lub nie) jednak, ukłuwszy już królewnę sam dźgnął się drugą połową swojego grotu, co zaowocowało obustronną chucią.</p></br><p>
	 Z racji, że młody bał co matka odstawi, jak się dowie, że spieprzył powierzone zadanie, postanowił spółkować z wybranką tylo w formie niewidzialnej. Plan był taki, żeby nie mogła wykrakać, kto z umiejących znikać śmiertelnikom z oczu uczynił jej ten zaszczyt. Oczywiście będąc z natury ciekawska, oblała go olejem z lampy, olej oblepił ciało i była go w stanie zidentyfikować, co dowodzi całkiem niezłej wprawy boskich portrecistów.</p></br><p>
	Ostatecznie historia zakończyła się dobrze, po tym jak Afrodyta przeczołgała Psyche przez ścieżkę zdrowia swojego projektu, wszyscy nażarli się nektaru, opili ambrozją i żyli wiecznie i szczęśliwie.  </p></br><p>
  `,
  },
  {
    title: "Sokrates i Ksantypa",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Jeśli wierzyć przekazom imię Karen wywodzi się bezpośrednio od równie negatywnie nacechowanego miana Ksantypa. I choć to pierwsze całkiem dokładnie określa background babsztyla, którego dotyczy, jest zdecydowanie mniej precyzyjne niż odpowiednik rodem z antycznej Grecji.</p></br><p>
	Żona Sokratesa była opisywana jako strasznie wredna raszpla, do tego stopnia, że ziomeczkom filozofa zdarzyło się rzekomo zasugerować, żeby jej pedagogicznie przypier...wszej okazji wyjaśnił, że tak nie wypada.</p></br><p>
	Sokrates jednak, będąc chytrym huncwotem uznał, że piarowo lepiej dla niego będzie robić z siebie męczennika niż przyznać, że jest bardziej maso niż sado, i teraz uchodzi za ojca zachodniej filozofii.    </p>`,
  },
  {
    title: "Min i całe miasto",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
          <p> W niektórych religiach do boskości dochodzi się na drodze postu i wyrzeczeń. U starożytnych Egipcjan bóg płodności obrał nieco inną ścieżkę.</p></br><p>
<p>	Nasz bohater karierę zaczął jako wierny poddany Ramzesa Wielkiego. Nie opierdalał się w obowiązkach i po jednej z epickich bitew wrócił do domu bez rączki i nóżki. Smutkom nie było końca.</p></br><p>
	Właściwie to były, bo całkiem rychło waleczny faraon zapomniał o tragedii podwładnego i wyruszył na kolejną batalię. Rzecz jasna wszyscy zdolni do służby wojskowej byli na niej potrzebni. Min w sposób oczywisty zdolny nie był, z jakiegoś powodu wojacy postanowili też, że sami sobie będą gotować i prać gacie ( to nie ja tu jestem seksistowski, takie czasy były ). Chociaż może i pod tymi śmiesznymi zawijańcami gaci się nie nosiło...</p></br><p>
	Z pewnością nie miał czasu ich założyć jedyny posiadacz członka, który pod nieobecność wojujących Egipcjan zabrał się z wyprzedzeniem za odbudowę strat w liczebności armii. Po powrocie z wojny Ramzes z niejakim zdziwieniem skonstatował, że większość kobiet, z jego małżonką na czele, stała się ciężarna. Z racji, że niepokalane poczęcie zagościło w popkulturze dopiero jakieś 13 wieków później, jurny kaleka został skazany na śmierć.</p></br><p>
	A potem został wcielony w panteon. Jakoś.</p> `,
  },
  {
    title: "Lilith",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Pół legenda. Pół prawda. Pół gówno prawda. </p></br><p>
	Próbując dojść skąd się Lilith wzięła, czym zasłynęła i za co właściwie kojarzy się z czymkolwiek się kojarzy można zaiste doznać kociokwiku. Odważnym polecam przejrzenie Wikipedii, ale ostrzegam - sam zgubiłem się w odnośnikach.</p></br><p>
	Pozwolę sobie zatem zaproponować wersję syntetyczną - Lilith jest arcywrogiem większości znanych i kochanych religii, głównie przez to, że Istocie Wszechmogącej i Nieomylnej pierwszy prototyp towarzyszki życia dla mężczyzny wyszedł tak źle, że Adam nie mając dosłownie żadnego punktu odniesienia zgłosił reklamację.</p></br><p>
	Treść owej była cokolwiek absurdalna, dowody wadliwości zawierały, lecz nie kończyły się na: preferencji do pozycji jeździeckiej względem misjonarskiej, nawoływanie do równouprawnienia i szukanie szczęścia w życiu na własną rękę (czytaj: ucieczkę z patologicznego związku)</p></br><p>
	Szczęście znalazła ostatecznie z Samaelem. Dla tych, którzy o Samaelu wcześniej nie słyszeli - Lucyfer rozpętął pierwszą wojnę niebiańską, Samael drugą.</p></br><p>
	Nam pozostaje żywić nadzieję, że pierwsza feministka nie podzieliła losu Ewy Braun.     </p> `,
  },
  {
    title: "Zeus (jako łabędź) i Leda",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Łabędź jaki jest każdy widzi. Z daleka piękny i majestatyczny, ale jak już podpłynie po tę bułkę, którą od dzieciństwa tłuką Ci do głowy, żeby mu nie rzucać, nagle dociera do Ciebie, że to nie dla jego dobra, a po to, żebyś nie musiał wnętrza jego dzioba oglądać.</p></br><p>
	Cholera jedna wie zatem, co podkusiło Ledę i naprawdę nie mam ochoty jej motywów zgłębiać. Za to jej motyw jest całkiem ciekawy, nieczęsto właściwie słyszy się o ornitofilii.</p></br><p>
	Rzadkość występowania tego odchylenia całkiem przekonująco tłumaczy wersja, w której celem porodu Zeusowych dzieci Leda była zmuszona znieść 2 jaja + urodzić dziecko swojemu mężkowi, z którym zdecydowała się współżyć podczas tego samego cyklu. A że Grecja jest rzekomo ojczyzną matematyki:</p></br><p>
	Przy trojaczkach waga niemowlęcia wynosi zazwyczaj około 1.5kg. Jajo, które mieści półtora litra, przy założeniu, że jest idealnie elipsoidalne i trzyma proporcje jaja kurzego, które zmierzyłem, można wpisać w graniastosłup prawidłowy czworokątny o krawędzi podstawy długości 140mm i wysokości 177mm.</p></br><p>
	Układając takie 2 obok siebie przestrzeń między nimi to optymistycznie 224.7ml. </p></br><p>
	I jakkolwiek nie jest to wielka strata przy ponad 4 litrach samych płodów, tak odpowiedz sobie czytelniku, kiedy ostatnio mierzyłeś jaja dla dobra nauki? </p>
   `,
  },
  {
    title: "Zeus (jako byk) i Europa",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>Nauczka, by nie ufać każdemu bydlakowi, który wydaje się być milusi.</p></br><p>
	Każdy chyba zna co najmniej laskę podobną do Europy. Śliczna jak z obrazka, tępa jak siekiera z drugiej strony i najłatwiej zbajerować ją na szczeniaczka. No dobrze, może na byka prościej, ale po pierwsze, nie uprzedzajmy faktów, a po drugie umówmy się - nie każdy lowelas może sobie pozwolić na trzymanie w domu rogacizny.</p></br><p>
	Zeus był jednak o krok dalej. Podejrzawszy jak Europa wraz z psiapsiółami wącha kwiatki i smyra baranki, sam przybrał postać buhaja i podszedł poudawać jaki jest potulny. Europa zaczęła go więc miziać. Po głowie, karku, grzbiecie... Wreszcie (usiłując zapewne sięgnąć zadu) położyła się na nim, a ten JAK NIE ZACZĄŁ ZAPIERDALAĆ, że ino kurz się sypał. A potem wbiegł do morza i kurz sypać się przestał.</p></br><p>
	Krótko - dogalopował do Krety, narobił Europie pacholąt (nie jest jasne pod jaką postacią to uczynił), zostawił wybrankę, jej matka wyzionęła ducha próbując ją odnaleźć i tak oto, drogie dzieci, powstał gwiazdozbiór byka. </p>  `,
  },
  {
    title: "Shamhad i Enkidu",
    date: writeDate(2021, 3, 21),
    altText: "Here's even more alt text!",
    imageFiles: 1,
    authorNotes: `
            <p>W eposie o Gilgameszu pojawia się wątek Enkidu, którego równie dobrze można by nazwać Ugabuga. Był dziki, zły i niedobry. Tak niedobry, że zagrażał królewskiej władzy króla Gilgamesza, więc ten ostatni postanowił go ucywilizować. Wysłał więc świątynną prostytutkę Shamhad, by ta przemówiła do jego gadziego mózgu. </p></br><p></p>
	Nie wchodząc w szczegóły – po tygodniu ciągłego przemawiania nasienie opuściło mózg dzikusa na tyle, że ostatecznie został najlepszą mordeczką tytułowego bohatera, razem stoczyli mnóstwo epickich bitew i w ogóle takich trzech jak ich dwóch nie było ani jednego.</p></br><p></p>
	Jeśli zaś kogokolwiek obchodzi los oddanej sprawie Shamhad, to nikt nie uznał za stosowne o niej wspomnieć dopóki Enkidu nie zebrało się na umieranie i nie stwierdził, że wszystko to jej wina i on to w ogóle od początku chciał zostać w jaskini.</p>
   `,
  },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) {
  //function used to write a parameter to append to the url, to give each comic page its own unique url
  let result = null,
    tmp = [];
  let items = location.search.substr(1).split("&");
  for (let index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}

function writeDate(year, month, day) {
  //write date of comic page
  const date = new Date(year, month - 1, day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4); //remove the Day
  return date;
}
