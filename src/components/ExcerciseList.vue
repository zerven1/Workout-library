<template>
  <div class="container">
    <button @click="getFilters()" >Filter</button>
      <div class="search_container">
        <input v-model="search" placeholder="Enter your search" class="input">
        <div class="actual_filters">
           <div v-for="filter in filtersList" v-bind:key="filter " style="height:100%">
           <div class="filter_button" v-if="filter!=null">
             <div id="filter_text">{{filter}}</div>
             <i class="fas fa-times-circle" @click="removeFilter(filter)"></i>
           </div>
           </div>
           <div class="clear_button" @click="clearFilters" v-if="category!=null || sort !=null || equipment !=null || level !=null">
              Wyczyść filtry
           </div>
        </div>
      </div>
      <div v-for="workout in getProducts" v-bind:key="workout.name  ">
        <router-link :to="{ name:'workout' , params: {name: workout.name,category:workout.category, 
        description: workout.description, image: workout.image,level:workout.level,equipment:workout.equipment}}">
        <div  class="item" >
        <div class="image">
          <img :src="workout.image" >
        </div>
        <div class="name">
          <div>
            <h1>{{workout.name  }}</h1>
          </div>
        </div>
      </div>
      </router-link>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'ExcerciseList',
  components: {
  },
  data() {
    return{
    category:null,
    level:null,
    equipment:null,
    sort:null, 
    filtersList:[],
    sortWorkouts:[],
    search:"",
     workouts:[
    {   
       name: 'Pompki',
       category: 'Klatka piersiowa',
       image:require('@/assets/pompki.jpg'),
       equipment:'Bez sprzętu',
       level:'Początkujący',
       description:'Przed rozpoczęciem ćwiczenia należy przyjąć pozycję deski, tak aby ciało było wyprostowane i tworzyło linię prostą. Dłonie należy ułożyć w linii prostej pod barkami lub trochę szerzej. Następnie należy spiąć pośladki i brzuch. Następnie należy uginać łokcie do kąta prostego, opuszczając całe ciało, pamiętając o zachowaniu prostej pozycji. Aby wrócić do pozycji wyjściowej należy wyprostować łokcie. Ćwiczenie wzmacnia szczególnie mięśnie klatki piersiowej oraz mięśnie pleców, barków i brzucha.'
    },
    {
       name: 'Przysiady',
       category: 'Nogi',
       image: require('@/assets/przysiad.jpg'),
       equipment:'Bez sprzętu',
        level:'Nowicjusz',
       description:'Przed rozpoczęciem ćwiczenia należy stanąć prosto w lekkim rozkroku. Następnie należy napiąć mięśnie brzucha i pośladków. Następnie należy powoli uginać kolana jednocześnie wypychając biodra do tyłu. Należy pamiętać, by całe stopy przylegały do podłoża, a plecy pozostały w neutralnej pozycji. Kąt między udem a podudziem powinien wynosić maksymalnie 90 stopni. Powrót do pozycji wyjściowej należy wykonać powoli prostując kolana. Ćwiczenie wzmacnia mięśnie ud i łydek, a także mięśnie pośladkowe. Drama Queen Katarzyna Kiszka 3.	Wyciskanie żołnierskie Opis ćwiczenia: Przed rozpoczęciem ćwiczenia należy przyjąć pozycję siedzącą z plecami dociśniętymi do oparcia i nogami zapartymi o podłogę. Następnie należy unieść ramiona, tak aby hantle znajdowały się na wysokości barków. Łokcie powinny być w jednej linii z nadgarstkiem. Następnie należy unieść ramiona jednocześnie prostując je stawach łokciowych i wycisnąć hantle nad głowę. Ruch powinien odbywać się po trójkącie, tak aby hantle schodziły się do środka w momencie, gdy są nad głową. Aby powrócić do pozycji wyjściowej należy powolnym ruchem opuszczać hantle. Ćwiczenie wzmacnia głownie mięśnie naramienne środkowe, a także mięśnie czworoboczne i trójgłowy ramienia.'
    },
    {
       name: 'Podciąganie nachwytem',
       category: 'Plecy',
       image: require('@/assets/podciaganie.jpg'),
       equipment:'Drążek',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy złapać drążek nachwytem, czyli kciuk musi objąć drążek od dołu, na szerokość barków, lub nieco szerzej. Tułów powinien znajdować się w linii prostej wraz z nogami, a łokcie wyprostowane. Następnie należy napiąć mięśnie brzucha, ściągnąć łopatki i wyciągnąć szyję. Następnie należy wykonać ruch w górę, do momentu, gdy broda znajdzie się nad linią drążka. Powrót do pozycji początkowej powinien odbywać się powoli, kontrolowanym ruchem, aż do całkowitego wyprostowania rąk. Ćwiczenie wspomaga szczególnie mięsień najszerszy grzbietu, mięśnie proste brzucha i kaptury oraz biceps.'
    },
    {

       name: 'Wyciskanie żołnierskie siedząc',
       category: 'Barki',
       image: require('@/assets/ohp.jpg'),
       equipment:'Bez sprzętu',
       level:'Początkujący',
       description:'Przed rozpoczęciem ćwiczenia należy przyjąć pozycję siedzącą z plecami dociśniętymi do oparcia i nogami zapartymi o podłogę. Następnie należy unieść ramiona, tak aby hantle znajdowały się na wysokości barków. Łokcie powinny być w jednej linii z nadgarstkiem. Następnie należy unieść ramiona jednocześnie prostując je stawach łokciowych i wycisnąć hantle nad głowę. Ruch powinien odbywać się po trójkącie, tak aby hantle schodziły się do środka w momencie, gdy są nad głową. Aby powrócić do pozycji wyjściowej należy powolnym ruchem opuszczać hantle. Ćwiczenie wzmacnia głownie mięśnie naramienne środkowe, a także mięśnie czworoboczne i trójgłowy ramienia.'
    },
    {
       name: 'Pompki na poręczach',
       category: 'Triceps',
       image: require('@/assets/dip.jpg'),
       equipment:'Poręcze',
       level:'Średnio zaawansowany',
       description:'Przed rozpoczęciem ćwiczenia należy wskoczyć na poręcze i ułożyć dłonie chwytem neutralnym, ugiąć kolana i wyprostować plecy. Następnie należy wyprostować ręce w stawach łokciowych oraz ściągnąć łopatki w dół tak by głowa nie chowała się między ramionami. Następnie należy wolnym ruchem uginać łokcie w stawach łokciowych starając trzymać je blisko ciała. Ćwiczenie należy wykonywać do momentu utworzenia kąta 90 stopni między ramieniem a przedramieniem. Aby powrócić do pozycji wyjściowej należy wyprostować łokcie z powrotem. Ćwiczenie angażuje do ruchu głównie mięsień piersiowy większy oraz mięśnie trójgłowe ramion.'
    },
    {
       name: 'Przysiad ze sztangą',
       category: 'Nogi',
       image: require('@/assets/weight_squats.jpg'),
       equipment:'Gryf prosty',
       level:'Początkujący',
       description:'Przysiady ze sztangą Opis ćwiczenia: Przed rozpoczęciem ćwiczenia należy przyjąć pozycję stojącą ze sztangą na plecach. Stopy powinny być na szerokości barków, a dłonie na sztandze ułożone w szerokim rozstawie. Następnie należy wypchnąć klatkę piersiową do przodu i napiąć mięśnie brzucha i pośladków. Następnie należy wykonać płynny i powolny przysiad do pozycji kąta prostego. Aby powrócić do pozycji wyjściowej należy powoli wstać, tak aby nie wykonać przeprostu w stawach kolanowych. Ćwiczenie wzmacnia mięśnie czworogłowe i dwugłowe ud oraz mięśnie pośladków.'
    },
    {
       name: 'Uginanie ramiona hantlami siedząc',
       category: 'Biceps',
       image: require('@/assets/biceps_hantle.jpg'),
       equipment:'Hantle',
       level:'Początkujący',
       description:'Uginanie ramion hantlami siedząc Opis ćwiczenia: Przed rozpoczęciem ćwiczenia należy przyjąć pozycję siedzącą z opuszczonymi swobodnie ramionami, tak aby były prostopadle do podłoża. Hantle należy trzymać chwytem neutralnym. Następnie utrzymując prawidłową pozycję wyjściową i przytrzymując ramiona nieruchomo, należy wykonać ugięcie ramion w łokciu jednocześnie robiąc półobrót nadgarstka na zewnątrz. Ćwiczenie należy wykonywać z maksymalnie napiętym bicepsem, a w szczytowym momencie ruchu należy podnieść łokieć w celu dopięcia mięśnia dwugłowego. Aby powrócić do pozycji wyjściowej należy powolnym ruchem opuścić przedramiona. Ćwiczenie wspomaga rozwój mięśnia dwugłowego ramienia i mięśnia ramiennego.'
     },
      {
       name: 'Stanie na rękach',
       category: 'Barki',
       image: require('@/assets/stanie_na_rekach.jpg'),
       equipment:'Bez sprzętu',
       level:'Zaawansowany',
       description:'Przed rozpoczęciem ćwiczenia klęknąć w klęku podpartym. Następnie wybić się nogami w powietrze do osiągnięcia pionowej pozycji. Stopy należy utrzymać złączone oraz obciągnięte, kolana w pełni wyprosowanem, pośladki napięte a miednicę w tyłopochyleniu. Należy pamiętać aktywnej pracy palców,które powinny być wbite w ziemię. W tej pozycji należy utrzymać się przez określony czas. po czym powrócić do pozycji startowej poprzez opuszczenie nóg. Stanie na rękach angażuje mięśnie ramion, brzucha ,głębokie, nóg, pośladków oraz nadgarstki.'
     },
      {
       name: 'Deska',
       category: 'Brzuch',
       image: require('@/assets/plank.jpg'),
       equipment:'Bez sprzętu',
       level:'Średnio zaawansowany',
       description:'Przed rozpoczęciem ćwiczenia należy klęknąć na podłodze oraz oprzeć się na przedramionach, zginając ręce pod kątem prostym. Należy zwrócić uwagę aby barki znajdowały się dokładnie nad łokciami. Następnie unieść tułów opierając się na palcach stóp i napiąć mięśnie brzucha i utrzymać pozycję przez określony czas. Deska wzmacnia mięśnie tułowa oraz mięśnie głębokie.'
     },
     {
       name: 'Brzuszki skośne',
       category: 'Brzuch',
       image: require('@/assets/brzuszki_skosne.jpg'),
       equipment:'Bez sprzętu',
       level:'Nowicjusz',
       description:': Przed rozpoczęciem ćwiczenia należy położyć się na plecach, ugiąć nogi w kolanach, założyć ręce za głowę. Następnie należy prawą nogę podnieść i oprzeć stopę o lewe kolano. Następnie należy unosić tułów skręcając go, tak aby dotykać lewym łokciem prawego kolana, po czym wrócić do pozycji wyjściowej. Następnie powtórzyć dla drugiej strony. Ćwiczenie należy wykonywać naprzemiennie lewą i prawą stroną. Brzuszki skośne wzmacniają mięśnie poprzeczne i skośne brzucha.'
     },
     {
       name: 'Wykroki do przodu ze sztangą',
       category: 'Nogi',
       image: require('@/assets/wykroki_do_przodu_ze_sztanga.jpg'),
       equipment:'Gryf prosty',
       level:'Średnio zaawansowany',
       description:'Przed rozpoczęciem ćwiczenia należy stanąć w pozycji prostej ze sztangą na karku z równomiernym rozłożeniem dłoni na gryfie. Następnie należy ustawić nogi w lekkim rozkroku i ściągnąć łopatki. Następnie należy wykonać ruch nogą do przodu, obniżając biodra jak najniżej na podłogę i zgiąć nogi w kolanach. Aby wrócić do pozycji wyjściowej należy odepchnąć się od ziemi nogą wykroczną i cofnąć się do tyłu do wyprostowanej pozycji startowej. Następnie wykonywać ćwiczenie naprzemiennie lewą i prawą nogą. Ćwiczenie wzmacnia mięśnie czworogłowe ud i mięśnie pośladków.'
     },
     {
       name: 'Dipy z obciążeniem',
       category: 'Triceps',
       image: require('@/assets/dipy_z_obciazeniem.jpg'),
       equipment:'Poręcze',
       level:'Zaawansowany',
       description:': Przed rozpoczęciem ćwiczenia należy założyć pas z odpowiednim ciężarem. Następnie wejść na poręcze i podkurczyć nogi, tak aby nie dotykały podłoża. Trzymając ręce jak najbliżej tułowia, wyprostować ramiona w stawach łokciowych. Następnie należy opuścić tułów do chwili osiągnięcia kąta 90 stopni pomiędzy ramieniem a przedramieniem. Do pozycji wyjściowej należy powróć zachowując jednocześnie odpowiedną postawę i napięcie mięśniowe. Ćwiczenie wspomaga rozwój mięśnia trójgłowego ramienia oraz wzmacnia mięsnie klatki piersiowej.'
     },
     {
       name: 'Mostek',
       category: 'Inne',
       image: require('@/assets/mostek.jpg'),
       equipment:'Bez sprzętu',
       level:'Początkujący',
       description:'Przed rozpoczęciem ćwiczenia należy położyć się na plecach, ugiąć nogi w kolanach i rozszerzyć stopy. Następnie należy zgiąć ręce w łokciach i położyć dłonie jak najbliżej tułowia. Prostując łokcie jednocześnie unoś miednicę i cały tułów do góry. Aby wrócić do pozycji wyjściowej należy uginać ręce i nogi jednocześnie opuszczać tułów na podłogę. Pozycja mostka wzmacnia mięsnie kręgosłupa, ramion, nadgarstków i brzucha.'
     },
     {
       name: 'Pompki głębokie na hantlach',
       category: 'Klatka piersiowa',
       image: require('@/assets/pompki_glebokie_na_hantlach.jpg'),
       equipment:'Hantle',
       level:'Średnio zaawansowany',
       description:'Przed rozpoczęciem ćwiczenia należy przyjąć pozycję podporu przodem, trzymając dłonie na hantlach trochę szerzej niż szerokość barków. Następnie wypiąć klatkę piersiową do przodu oraz spiąć łopatki. Zginając łokcie wzdłuż tułowia, zbliżyć ciało do podłogi poniżej poziomu hantli.  Następnie zachowując tą samą pozycję, prostować łokcie do pełnego wyprostu, pilnując jednocześnie, aby ciało znajdowało się w linii. Podczas ćwiczenia szczególnie pracują mięsnie klatki piersiowej, ramion i grzbietu, dołączenie hantli do ćwiczenia pozwala na wydłużenie ruchu i możliwość głębszego zejścia.'
     },
     {
       name: 'Skłony do wyprostowanych nóg',
       category: 'Inne',
       image: require('@/assets/sklony_do_wyprostowanych_nog.jpg'),
       equipment:'Bez sprzętu',
       level:'Początkujący',
       description:'Przed rozpoczęciem ćwiczenia należy stanąć ze złączonymi, wyprostowanymi nogami. Następnie należy wykonać skłon ku przodowi, nie odrywając brody od mostka. Skłon należy wykonać maksymalnie jak najdalej, najlepiej dotykając czołem kolan, a dłońmi podłoża. Podczas wykonywania ćwiczenia nogi muszą być cały czas wyprostowane. Aby powrócić do pozycji wyjściowej należy bardzo powoli podnosić tułów, pamiętając o tym, aby brodę oderwać od mostka na samym końcu. Ćwiczenie wzmacnia i rozciąga mięśnie grzbietu oraz pomaga utrzymać wyprostowaną sylwetkę.'
     },
     {
       name: 'Wymachy nóg w tył',
       category: 'Nogi',
       image: require('@/assets/wymachy_nog_w_tyl.jpg'),
       equipment:'Bez sprzętu',
       level:'Nowicjusz',
       description:'Przed rozpoczęciem ćwiczenia należy przyjąć pozycję klęku podpartego z dłońmi skierowanymi lekko do środka, na wysokości barków. Kręgosłup powinien znajdować się w neutralnej pozycji, a pośladki i brzuch napięte. Następnie należy wyciągnąć prawą nogę do tyłu i unosić do góry zginając kolano. Stopa powinna być w pozycji flex. Następnie należy wyprostować uniesioną nogę. Ćwiczenie wykonywać naprzemiennie lewą i prawą nogą. Ćwiczenie wzmacnia przede wszystkim mięśnie dwugłowe uda oraz mięśnie pośladków.'
     },
     {
       name: 'Wskoki na podwyższenie',
       category: 'Nogi',
       image: require('@/assets/wskoki_na_podwyzszenie.jpg'),
       equipment:'Bez sprzętu',
       level:'Początkujący',
       description:'Przed rozpoczęciem ćwiczenia należy stanąć przed podwyższeniem ze stopami rozstawionymi na szerokość bioder. Następnie ugiąć kolana, wcisnąć stopy w podłogę i skierować nogi delikatnie na zewnątrz. Następnie należy pochylić tułów do przodu i napiąć mięśnie brzucha, a ręce ustawić na wysokości klatki piersiowej. Następnie należy wybić się na podwyższenie i wylądować w pozycji startowej, tak aby kąt między kolanem a udem wynosił 90 stopni. Aby wrócić do pozycji początkowej należy zeskoczyć z podwyższenia, pamiętając o tym aby nie zeskoczyć na wyprostowane nogi. Ćwiczenie wzmacnia mięśnie nóg, brzucha, ramion i poprawiają mobilność stawów.'
     },
     {
       name: 'Pompki z nogami na podwyższeniu',
       category: 'Klatka piersiowa',
       image: require('@/assets/pompki_podwyzszenie.jpg'),
       equipment:'Bez sprzętu',
       level:'Zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy ustawić podwyższenie na wysokości kolan. Należy przyjąć pozycję podpartą, tak jak do pompki i oprzeć stopy na podwyższeniu. Następnie należy rozstawić ręce trochę szerzej niż na szerokość barków i napiąć mięśnie korpusu i pośladków. Następnie należy zginać łokcie, obniżając tułów tuż nad podłoże. Powrót do pozycji wyjściowej powinien odbyć się bez rozluźniania barków. Należy także unikać przeprostów. Ćwiczenie wzmacnia szczególnie górną część mięśni klatki piersiowej oraz mięśnie naramienne.'
     },
     {
       name: 'Wiosłowanie w podporze',
       category: 'Plecy',
       image: require('@/assets/wioslowanie_w_podporze.jpg'),
       equipment:'Hantle',
       level:'Zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy ustawić się w pozycji podpartej i oprzeć hantle na szerokość barków. Ramiona w łokciach należy wyprostować, a stopy ustawić szerzej niż szerokość bioder. Ciało powinno tworzyć jedną linię, a mięśnie brzucha i pośladków spięte. Następnie należy unieść hantle w górę, przyciągając ją w stronę biodra, jednocześnie przyciągając łopatkę do kręgosłupa. Kontrolowanym ruchem należy opuścić hantle do pozycji wyjściowej. Powtarzać naprzemiennie lewą i prawą ręką. Ćwiczenie angażuje mięśnie grzbietu, równoległoboczny i zginacze przedramienia, co powala na ich większy rozwój.'
     },
     {
       name: 'Wspinaczka górska w podporze',
       category: 'Inne',
       image: require('@/assets/wspinaczka_gorska_w_podporze.jpg'),
       equipment:'Bez sprzętu',
       level:'Nowicjusz',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję podporu przodem z dłońmi ułożonymi dokładnie pod barkami i prostymi rękami. Następnie należy spiąć łopatki i brzuch tak aby ciało tworzyło linię prostą. Następnie szybkim ruchem należy przyciągnąć prawe kolano do klatki, dostawiając stopę na podłogę. Następnie należy wrócić do pozycji startowej i wykonać ruch drugą nogą. Ćwiczenie wykonywać naprzemiennie lewą i prawą nogą. Ćwiczenie wzmacnia mięsnie nóg, grzbietu, brzucha i ramion, jest także odpowiednim uzupełnieniem każdego zestawu ćwiczeń.'
     },
     {
       name: 'Wiosłowanie sztangą stojąc',
       category: 'Plecy',
       image: require('@/assets/wioslowanie_sztanga_stojac.jpg'),
       equipment:'Gryf prosty',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy chwycić sztangę podchwytem na szerokość barków. Następnie należy ugiąć nogi w kolanach i wykonać opad tułowia do przodu. Ramiona powinny zostać wyprostowane i ustawione prostopadle do podłoża. Następnie należy wykonać przyciągnięcie sztangi w górę, w stronę mostka jak najbliżej tułowia. Łopatki należy przyciągnąć jak najbliżej kręgosłupa. Powrót do pozycji wyjściowej należy wykonać obniżając sztangę w dół. Ćwiczenie wspomaga przede wszystkim mięśnie pleców, klatki piersiowej i mięśnie naramienne.'
     },
     {
       name: 'Plank boczny',
       category: 'Brzuch',
       image: require('@/assets/plank_boczny.jpg'),
       equipment:'Bez sprzętu',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję podporu bokiem na przedramieniu, ramię powinno być ugięte pod kątem 90 stopni. Następnie należy wyprostować plecy i spiąć mięśnie brzucha. Ćwiczenie polega na jak najdłuższym utrzymaniu pozycji wyjściowej i utrzymaniu napięcia mięśni. Ćwiczenie wzmacnia mięsień prosty i skośny brzucha oraz mięsień naramienny. '
     },
     {
       name: 'Wyciskanie hantli nad głowę stojąc',
       category: 'Barki',
       image: require('@/assets/hantle_nad_glowe.jpg'),
       equipment:'Hantle',
       level:'Nowicjusz',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję stojącą z nogami rozstawionymi na szerokość bioder i wyprostowanymi plecami. Następnie należy unieść hantle na wysokość głowy lub barków. Następnie należy unieść ramię jednocześnie prostując staw łokciowy, tak aby wycisnąć hantle nad głowę. Ważne jest, żeby ruch wykonywać po trójkącie. Zejście do pozycji wyjściowej powinno być powolne. Ćwiczenie należy wykonywać naprzemiennie, raz lewą, raz prawą ręką. Ćwiczenie wzmacnia mięsień trójgłowy ramienia, naramienny środkowy oraz czworoboczny.'
     },
     {
       name: 'Brzuszki proste',
       category: 'Brzuch',
       image: require('@/assets/brzuszki_proste.jpg'),
       equipment:'Bez sprzętu',
       level:'Nowicjusz',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję leżąc na plecach. Następnie należy ugiąć nogi w kolanach, a stopy oprzeć o podłogę całą podeszwą założyć ręce za głowę. Następnie należy unosić tułów, tak aby łopatki były kilka centymetrów nad ziemią. Opuszczenie tułowia wiąże się z powrotem do pozycji wyjściowej. Ćwiczenie angażuje do pracy głownie mięśnie proste brzucha.'
     },
     {
       name: 'Przyciąganie kolan do klatki w zwisie na drążku',
       category: 'Brzuch',
       image: require('@/assets/przyciaganie_kolan_do_klatki_w_zwisie_na_drazku.jpg'),
       equipment:'Drążek',
       level:'Początkujący',
       description:'Przed wykonaniem ćwiczenia należy złapać drążek nachwytem na szerokość barków. Tułów powinien znajdować się w linii prostej wraz z nogami. Następnie należy napiąć mięśnie brzucha i unieść kolana do klatki piersiowej do momentu uniesienia miednicy w górę.  Powrót do pozycji początkowej powinien odbywać się powoli, kontrolowanym ruchem, aż do opuszczenia kolan. Ćwiczenie angażuje do pracy mięśnie proste brzucha, mięsień biodrowo-lędźwiowy i prosty uda.'
     },
     {
       name: 'Unoszenie nóg w zwisie na drążku',
       category: 'Brzuch',
       image: require('@/assets/unoszenie_nog_w_zwisie_na_drazku.jpg'),
       equipment:'Drążek',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy złapać drążek nachwytem na szerokość barków, lub nieco szerzej. Tułów powinien znajdować się w linii prostej wraz z nogami. Następnie należy napiąć mięśnie brzucha i wysunąć biodra do przodu spinając mięśnie pośladków. Następnie należy płynnie i dynamicznie unieść wyprostowane nogi do góry jednocześnie kierując miednicę ku górze. Powrót do pozycji początkowej powinien odbywać się powoli, kontrolowanym ruchem, aż do całkowitego wyprostowania nóg. Ćwiczenie angażuje do pracy mięśnie proste, dolne i skośne brzucha.'
     },
     {
       name: 'Przysiady na jednej nodze',
       category: 'Nogi',
       image: require('@/assets/przysiad_na_jednej_nodze.jpg'),
       equipment:'Bez sprzętu',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy stanąć prosto na jednej nodze trzymając ją w powietrzu pod kątem 45 stopni. Aby utrzymać odpowiedni balans należy trzymać ręce przed sobą. Następnie należy powoli opuszczać ciało w dół zginając nogę, która dotyka podłoża i prostować nogę, która jest w powietrzu. Przysiad należy wykonać nie dotykając pośladkami do podłoża. Następnie, aby powrócić do pozycji początkowej należy powoli wyprostować kolano i biodra. Przysiady wykonywać naprzemiennie, raz na lewej, raz na prawej nodze. Ćwiczenie wspomaga szczególnie mięśnie czworogłowe i dwugłowe ud i mięśnie pośladkowe.'
     },
     {
       name: 'Przysiady z obciążeniem',
       category: 'Nogi',
       image: require('@/assets/przysiady_z_obciazeniem.jpg'),
       equipment:'Kettlebell',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję stojącą z prostymi plecami. Stopy należy ułożyć mniej więcej na szerokości barków. Następnie należy wypiąć klatkę piersiową do przodu, ściągnąć łopatki i napiąć brzuch i pośladki. Następnie należy wykonać płynny i powolny przysiad do pozycji poniżej kąta prostego. Do pozycji wyjściowej powinno wrócić się powoli prostując kolana, tak aby nie robić przeprostu w stawach kolanowych. Ćwiczenie angażuje głównie mięsień czworogłowy uda oraz dwugłowy uda i mięśnie pośladkowe.'
     },
     {
       name: 'Wiosłowanie hantlami',
       category: 'Plecy',
       image: require('@/assets/wioslowanie_hantlami.jpg'),
       equipment:'Hantle',
       level:'Początkujący',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję stojąca z opadem tułowia około 45°, trzymając hantle chwytem młotkowym. Ramiona muszą być wyprostowane, ustawione prostopadle do podłoża. Następnie należy przyciągnąć hantle pionowo w górę, kierując je w stronę bioder, jednocześnie maksymalnie zbliżając łopatki do kręgosłupa. Następnie, aby powrócić do pozycji wyjściowej należy powoli opuszczać ramiona, nie prostując pleców. Ćwiczenie wpływa na wzmocnienie mięśnia najszerszego grzbietu, równoległobocznego i zginaczy przedramienia.'
     },
     {
       name: 'Przysiad bułgarski',
       category: 'Nogi',
       image: require('@/assets/przysiad_bulgarski.jpg'),
       equipment:'Bez sprzętu',
       level:'Zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy stanąć w wykroku z nogą opartą na podparciu. Przed wykonaniem ćwiczenia należy pamiętać, aby stopy były ustawione równolegle do siebie, pośladki napięte, a ciężar ciała przeniesiony na nogę wykroczną. Następnie należy rozpocząć ruch, wykonując przysiad tak, aby nie wysuwać w przód kolana nogi wykonującej przysiad. Przysiad należy wykonywać do momentu uczucia znaczącego rozciągania nogi zakrocznej. Powrót do pozycji wyjściowej powinien odbywać się stabilnie i płynnie poprzez wyprostowanie nogi opierającej się na podłożu. Ćwiczenie wzmacnia mięsień czworogłowy uda, mięśnie pośladkowe i mięśnie kulszowo-goleniowe.'
     },
     {
       name: 'Przyciąganie kolan do łokci stojąc',
       category: 'Inne',
       image: require('@/assets/przyciaganie_kolan_do_lokci_stojac.jpg'),
       equipment:'Bez sprzętu',
       level:'Nowicjusz',
       description:'Przed wykonaniem ćwiczenia należy stanąć prosto z nogami mocno osadzonymi na podłodze na szerokość ramion. Następnie należy ugiąć ramiona w łokciach, a dłonie skierować ku górze. Następnie należy podnosić lewe kolano wysoko do góry, jednocześnie upuszczając prawy łokieć w jego kierunku, tak aby się stykały. Podczas wykonywania ćwiczenia należy wykonywać delikatny skręt tułowia. Następnie należy wrócić do pozycji początkowej, opuszczając nogę. Ćwiczenie należy wykonywać naprzemiennie raz lewą, raz prawą stroną. Ćwiczenie wzmacnia przede wszystkim mięśnie proste i skośne brzucha oraz mięsień biodrowo-lędźwiowy i prosty uda.'
     },
     {
       name: 'Zwis na drążku',
       category: 'Inne',
       image: require('@/assets/zwis_na_drazku.jpg'),
       equipment:'Drążek',
       level:'Początkujący',
       description:'Przed wykonaniem ćwiczenia należy złapać drążek nachwytem na szerokość barków lub trochę szerzej, tak aby móc wisieć na nim bez podkurczania nóg i nie dotykając podłoża. Tułów powinien znajdować się w linii prostej wraz z nogami. Następnie należy delikatnie napiąć mięśnie brzucha i spiąć łopatki. Ćwiczenie ma charakter odprężający i relaksacyjny oraz pomaga utrzymać prawidłową, wyprostowaną postawę ciała. Ćwiczenie angażuje do pracy mięśnie przedramion, nadgarstków, palców, a także mięśnie pleców, grzbietu i mięsień prosty brzucha.'
     },
     {
       name: 'Skakanka',
       category: 'Inne',
       image: require('@/assets/skakanka.jpg'),
       equipment:'Skakanka',
       level:'Nowicjusz',
       description:'Przed wykonaniem ćwiczenia należy dobrać odpowiednią długość skakanki, łapiąc oba jej końce, przydeptując na środku i naprężając do klatki piersiowej. Następnie należy zachować prostą pozycję, trzymając łokcie nisko i nie usztywniając kolan podczas skoków. Następnie należy rozpocząć skakanie, gdy skakanka zbliża się do podłoża i znajduje się przed stopami, należy podskoczyć, obunóż lub najpierw jedną a potem drugą nogą. Można podskakiwać na jednej nodze, skakać, biegać. Ćwiczenie głownie angażuje mięśnie łydek, a także mięśnie czworogłowe ud i mięśnie pośladków.'
     },
     {
       name: 'Wykroki',
       category: 'Nogi',
       image: require('@/assets/wykroki.jpg'),
       equipment:'Bez sprzętu',
       level:'Nowicjusz',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję z mocno napiętymi mięśniami pośladkowymi oraz mocno napiętymi mięśniami brzucha. Następnie należy dać daleki krok do przodu, jednocześnie ustawiając kość piszczelową pionowo względem podłogi. Przez cały ruch należy utrzymać spionizowane plecy. Następnie należy powoli opuścić się w dół na napiętych mięśniach, tak aby lekko dotknąć kolanem ziemi ale nie kłaść go na niej. Powrót do góry należy rozpocząć od mocnego odepchnięcia od ziemi nogą wykroczną i cofnąć się do tyłu do wyprostowanej pozycji startowej. Następnie należy powtórzyć cały ruch drugą stroną. Ćwiczenie należy wykonywać naprzemiennie, raz lewą, raz prawą nogą. Ćwiczenie wzmacnia głownie mięśnie czworogłowe ud, mięsień powięzi szerokiej i mięśnie kulszowo-goleniowe.'
     },
     {
       name: 'Skrętoskłony',
       category: 'Inne',
       image: require('@/assets/skretosklony.jpg'),
       equipment:'Brak',
       level:'Nowicjusz',
       description:'Przed wykonaniem ćwiczenia należy stanąć w pozycji rozkrocznej utrzymując proste nogi w kolanach. Następnie należy wykonać skłon połączony ze skrętem tułowia, sięgając prawą ręką do lewej stopy, a lewą ręką wysoko w górę lub za siebie. Następnie należy wrócić do pozycji wyjściowej podnosząc tułów, a następnie wykonać ruch na drugą stronę ciała. Ćwiczenie wykonywać naprzemiennie, raz lewą, raz prawą stroną. Ćwiczenie wzmacnia odcinek piersiowy kręgosłupa oraz stawy biodrowe. '
     },
     {
       name: 'Przysiad z gumą na kolanach',
       category: 'Nogi',
       image: require('@/assets/przysiad_z_guma_na_kolanach.jpg'),
       equipment:'Guma',
       level:'Początkujący',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję stojącą, stopy należy ułożyć mniej więcej na szerokość bioder i założyć gumą na kolana. Następnie należy wypiąć klatkę piersiową do przodu, ściągnąć łopatki i napiąć brzuch i pośladki. Następnie należy cofnąć biodra i ugiąć kolana zachowując wyprostowaną postawę. Do pozycji wyjściowej należy wrócić prostując kolana, tak aby nie robić przeprostu w stawach kolanowych. Ćwiczenie angażuje głównie mięśnie czworogłowe i dwugłowe uda oraz mięśnie pośladkowe i mięśnie brzucha.'
     },
     {
       name: 'Falowanie liną treningową',
       category: 'Inne',
       image: require('@/assets/trening_z_linami.jpg'),
       equipment:'Lina treningowa',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy stanąć w lekkim rozkroku, chwycić końce liny, każdy w jedną dłoń. Dłonie należy trzymać na wysokości bioder, a biodra skierować do tyłu. Następnie należy unosić i opuszczać dłonie, starając się jak najintensywniej ruszać liną, wykonując nią falujące ruchy. Najlepiej rozpocząć od powolnego tempa i stopniowo zwiększać szybkość ruchu. Ćwiczenie wzmacnia górne partie mięśniowe oraz mięśnie brzucha, mięśnie głębokie i pośladki, a także mięśnie nóg.'
     },
     {
       name: 'Uginanie ramion z gumą',
       category: 'Biceps',
       image: require('@/assets/uginanie_ramion_z_guma.jpg'),
       equipment:'Guma',
       level:'Początkujący',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję stojącą ze stopami rozstawionymi na szerokość ramion. Następnie należy położyć gumę pod obie stopy i napiąć mięśnie korpusu. Następnie należy złapać taśmę podchwytem, rozstawiając dłonie na szerokość barków, trzymając łokcie blisko ciała. Następnie należy przyciągać taśmę do klatki piersiowej, zginając ręce w łokciach i opuszczać, cały czas kontrolując napięcie taśmy. Ćwiczenie wzmacnia mięsień dwugłowy ramienia oraz mięsień ramienny.'
     },
     {
       name: 'Martwy ciąg',
       category: 'Plecy',
       image: require('@/assets/martwy_ciag.jpg'),
       equipment:'Gryf prosty',
       level:'Średnio zaawansowany',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję półprzysiadu przed sztangą z mocno pochylonym ciałem. Sztanga powinna znajdować się nad stopami, blisko piszczeli. Należy wyprostować ramiona i ustawić je na szerokość barków, zachowując wyprostowane plecy. Następnie należy chwycić sztangę i rozpocząć unoszenie jej z ziemi, wykonując wyprost w stawach biodrowych oraz kolanowych. Sztangę należy prowadzić blisko nóg, nie wyginając pleców w łuk. Przez cały czas należy utrzymywać mocne napięcie mięśni brzucha oraz pośladków. Aby powrócić do pozycji wyjściowej należy w kontrolowany sposób odstawić sztangę na podłogę. Ćwiczenie angażuje w ruch mięśnie prostownika grzbietu, mięsień czworoboczny i czworoboczny lędźwiowy oraz mięśnie pośladkowe i mięśnie dwugłowe i czworogłowe ud.'
     },
     {
       name: 'Uginanie przedramion z gryfem prostym stojąc',
       category: 'Biceps',
       image: require('@/assets/uginanie_ramion_z_gryfem_lamanym_stojac.jpg'),
       equipment:'Gryf prosty',
       level:'Początkujący',
       description:'Przed wykonaniem ćwiczenia należy przyjąć pozycję stojącą prosto w lekkim rozkroku. Łokcie należy trzymać blisko korpusu. Następnie należy rozstawić dłonie na szerokość barków, a sztangę należy złapać podchwytem. Następnie należy unieść sztangę do klatki piersiowej, po czym opuść ją do pozycji wyjściowej, cały czas kontrolując ruch. Należy pamiętać, aby wykonywać ruch tylko przedramionami. Ćwiczenie wzmacnia mięśnie dwugłowe ramion oraz mięsień ramienny.'
     },
    ]
  }

},
  computed:{
     getProducts(){
      if(this.category!==null){
        if(this.level === null && this.equipment===null)
        {
          if(this.search!==''){
            return this.workouts.filter(workout => workout.category===this.category && workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts.filter(workout => workout.category===this.category);
          }
        }
        if(this.level !== null && this.equipment===null)
        {
          if(this.search!==''){
            return this.workouts.filter(workout => workout.category===this.category && workout.level===this.level && workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts.filter(workout => workout.category===this.category && workout.level===this.level);
          }
        }
        if(this.level === null && this.equipment!==null)
        {
          if(this.search!==''){
            return this.workouts.filter(workout => workout.category===this.category && workout.equipment===this.equipment && workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts.filter(workout => workout.category===this.category && workout.equipment===this.equipment);
          }
        }
        else
        {
          if(this.search!==''){
            return this.workouts.filter(workout => workout.category===this.category && workout.equipment===this.equipment && workout.level===this.level && workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts.filter(workout => workout.category===this.category && workout.equipment===this.equipment && workout.level===this.level);
          }
        }
      }
      else{
      if(this.level === null && this.equipment===null)
        {
          if(this.search!==''){
            return this.workouts.filter(workout => workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts;
          }
        }
        if(this.level !== null && this.equipment===null)
        {
          if(this.search!==''){
            return this.workouts.filter(workout => workout.level===this.level && workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts.filter(workout =>  workout.level===this.level);
          }
        }
        if(this.level === null && this.equipment!==null)
        {
          if(this.search!==''){
            return this.workouts.filter(workout =>  workout.equipment===this.equipment && workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts.filter(workout =>  workout.equipment===this.equipment);
          }
        }
        else
        {
          if(this.search!==''){
            return this.workouts.filter(workout => workout.equipment===this.equipment && workout.level===this.level && workout.name.toLowerCase().includes(this.search.toLowerCase()));
          }
          else{
            return this.workouts.filter(workout =>  workout.equipment===this.equipment && workout.level===this.level);
          }
        }
      }
       
  },
  },
 created() {
    window.addEventListener('resize',this.checkScreen);
    this.checkScreen();
    this.getWorkouts();
  },    
  methods:{
   getCategorie(){
     this.category=this.$store.getters.getCurrentCategory;
  },
     getLevel(){
     this.level=this.$store.getters.getCurrentLevel;
  },
     getEquipment(){
     this.equipment=this.$store.getters.getCurrentEquipment;
  },
     getSort(){
     this.sort=this.$store.getters.getCurrentSort;
  },
  getWorkouts(){
    this.workouts=this.$store.getters.getWorkouts;
  },
  sortArray(){
    this.sortWorkouts = this.filtersList;
    console.log(this.sortWorkouts);
    for(var i=0; i<this.sortWorkouts.length; i++)
    {
      this.sortWorkouts.sort(function(a, b){return a-b});
    }
    console.log(this.sortWorkouts);  
  },
  getFilters(){
    this.getCategorie();
    this.getLevel();
    this.getEquipment();
    this.getSort();
    this.filtersList=[];
    this.filtersList.push(this.category,this.level,this.equipment,this.sort);
    },
    removeFilter(filter){
      for(var i=0; i<this.filtersList.length; i++){
        if(this.filtersList[i]===filter){
          this.filtersList.splice(i,1);
        }
        if(filter===this.category)
        {
          this.category=null;
          this.$store.commit('setCurrentCategory',this.category);
        }
        if(filter===this.level)
        { 
          this.level=null;
          this.$store.commit('setCurrentLevel',this.level);
        }
        if(filter===this.equipment)
        {
          this.equipment=null;
          this.$store.commit('setCurrentEquipment',this.equipment);
        }
        if(filter===this.sort)
        {
          this.sort=null;
          this.$store.commit('setCurrentSort',this.sort);
        }
      }
    },
    clearFilters(){
      this.category=null;
      this.level=null;
      this.equipment=null;
      this.sort=null;
      this.filtersList=[];
      this.$store.commit('setCurrentCategory',this.category);
      this.$store.commit('setCurrentLevel',this.level);
      this.$store.commit('setCurrentEquipment',this.equipment);
      this.$store.commit('setCurrentSort',this.sort);
    }
  },
  filters:{
    sort: function (value) {
         return value.sort((a, b) => a.name - b.name );
      },
    category: function(value){
      if(this.category !==null){
      return value.filter(workout => workout.category === this.category);
      }
    } ,
    equipment:function()
    {
      if(this.equipment !==null){
      return this.workouts.filter(workout => workout.equipment === this.equipment);
      }
    },
    level:function()
    {
      if(this.level !==null){
      return this.workouts.filter(workout => workout.level === this.level);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  min-height:700px;
  width:100%;
  
  padding:15px 10px 15px 10px;
  
  .items_list{
    display:inline-block;

  }
}
img{
  width:100%;
  height:450px;
}
a{
  text-decoration: none;
}
h1{
  color:black;
  font-size:25px;
}
.search_container{
   height:70px;
   margin:10px 20px 30px 0px;
   button{
     padding:0px;
     font-size:15px;
     margin:0px;
   }
   #search{
      width:12%;
      height:50px;
   }
   .input{
    width:98%;
    height:45px;
    padding:0px;
   }
   .actual_filters{
     min-height:30px;
     width:98%;
     
     margin:10px 0px 0px 15px;

     .filter_button{
       height:100%;
       color:white;
       background: linear-gradient(352deg, rgba(255,255,255,1) 0%, rgba(148,148,148,1) 100%);
       border-radius:20px;
       float:left;
       margin-right:10px;
       margin-top:5px;
       padding:5px;
       font-weight: bold;
       i{
         float:right;
         align-items: center;
         font-size:20px;
       }
       #filter_text{
         float:left;
         padding-right:10px;
         height:100%;
         text-align:left;
       }
       #filter_text:hover{
         color:green;
       }
       i:hover{
         color:green;
       }
     }
     .clear_button{
       height:100%;
       color:white;
       background: linear-gradient(352deg, rgba(255,255,255,1) 0%, rgba(148,148,148,1) 100%);
       border-radius:20px;
       float:right;
       margin-right:10px;
       margin-top:5px;
       padding:5px;
       font-weight: bold;
     }
     .clear_button:hover{
       color:green;
     }
   }
 }
.item{
  margin:15px;

  overflow:auto;
  width:18%;
  float:left;
}
.item:hover{
  background-color: 		#B0C4DE;
}
.image{

  min-height:300px;
  margin:10px;

  width:90%;
  float:left;
  overflow-y:auto;
}
.name{

  min-height:80px;
  margin:10px;

  width:90%;
  float:left;
}
h1{
  margin:0px 0px 0px 0px;
}
 button{
  border:1px solid black;
  padding:10px;
  background: rgb(255,255,255);
  background: linear-gradient(352deg, rgba(255,255,255,1) 0%, rgba(148,148,148,1) 100%);
  width:97%;
  color:white;
  font-size:25px;
  font-weight: bold;
  margin:10px 15px 0px 00px;
 }
  button:hover{
   color:green;
 }

@media only screen and (max-width: 1710px) {
  .item{
    width:22%;
  }
  .cointainer{
    button{
    width:97%;
    }
  }
}
@media only screen and (max-width: 1500px) {

  h1{
    font-size:22px;
  }
  }

   @media only screen and (max-width: 1150px) {
    
   .item{
    width:27vw;
    }
    .container{
    button{
    width:96%;
    }
    h1{
      font-size:20px;
    }
  }
  }
     @media only screen and (max-width: 850px) {

   .item{
    width:40vw;
    
    }
    .container{
    button{
      width:95%;
    }
    }
  }
          @media only screen and (max-width: 600px) {

   .item{
    width:80vw;
    
    }
    .container{
     button{
      width:95%;
    }
    }
  }
</style>